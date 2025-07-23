import React, { useCallback, useEffect, useState } from 'react';
import { DeviceEventEmitter, View } from 'react-native';
import Share from 'react-native-share';
import AppString from '../../app-res/AppString';
import { useUser } from '../../ayncStorage/UserContext';
import DialogModal from '../../components/DialogModal';
import Loader from '../../components/Loader/Loader';
import { showToastMessage } from '../../utils/Helper';
import { QuotationForm } from '../../utils/types';
import DiamondDetailsSection from './Components/DiamondDetailsSection';
import GoldDetailsSection from './Components/GoldDetailsSection';
import QuotationSummarySection from './Components/QuotationSummarySection';
import useQuotationAPI from './Hook/useQuotationAPI';

type QuotationFormProps = {
  navigation: any;
  route: any;
};

const QuotationFormScreen = ({ navigation }: QuotationFormProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const { loader, setLoader } = useUser();
  const [verificationModalVisible, setVerificationModalVisible] = useState(false)

  const openModal = useCallback(() => {
    setVerificationModalVisible(true);
  }, [verificationModalVisible]);

  const closeModal = useCallback(() => {
    navigation.pop(2);
    setVerificationModalVisible(false);
    DeviceEventEmitter.emit("event.orderSubmitted", { submit: true });
    downloadAndSharePDF(downloadResult)
  }, [verificationModalVisible]);

  const { submitQuotation, downloadResult, downloadPath } = useQuotationAPI(navigation, openModal);

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      if (currentStep > 1) {
        e.preventDefault();
        setCurrentStep((prev) => prev - 1);
      } else {
        unsubscribe();
        navigation.goBack();
      }
    });
    return unsubscribe;
  }, [navigation, currentStep]);

  const [quotationForm, setQuotationForm] = useState<QuotationForm>({
    clientDetails: { name: '', contactNumber: '', address: '', email: '' },
    goldDetails: {
      goldPurity: '',
      goldColor: '',
      jewelrySize: '',
      weight: '',
      ratePerGram: '',
      totalGoldCost: '',
      labourCost: '',
      totalLabourPrice: '',
    },
    diamondDetails: [
      {
        type: 'center',
        shape: '',
        size: '',
        color: '',
        clarity: '',
        ratePerCts: '',
        discount: '',
        totalAmount: '',
      },
      {
        type: 'side',
        shape: '',
        size: '',
        color: '',
        clarity: '',
        ratePerCts: '',
        discount: '',
        totalAmount: '',
      },
    ],
    quotationSummary: { goldCost: '', labourCost: '', diamondCost: '', gst: '', total: '', finalTotal: '' },
  });

  const isDiamondEmpty = (diamond: any) => {
    return (
      !diamond.shape &&
      !diamond.size &&
      !diamond.color &&
      !diamond.clarity &&
      !diamond.ratePerCts &&
      !diamond.totalAmount
    );
  };

  const handleSubmit = () => {
    const filteredDiamondDetails = quotationForm.diamondDetails.filter(diamond => !isDiamondEmpty(diamond));
    const filteredForm = {
      ...quotationForm,
      diamondDetails: filteredDiamondDetails,
    };
    console.log('Submitting to API:', filteredForm);
    submitQuotation(filteredForm);
  };


  const downloadAndSharePDF = async (downloadResult : any) => {
    try {
      if (downloadResult.statusCode === 200) {
        await Share.open({
          url: `file://${downloadPath}`,
          type: 'application/pdf',
          title: 'Share Quotation PDF',
        });
        //showToastMessage('PDF saved to Downloads folder!', 'success');
      } else {
        showToastMessage('Failed to download PDF', 'danger');
      }
    } catch (error) {
      console.log('Download/Share error:', error);
    }
    finally {
      setLoader(false); // Hide loader
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {loader && <Loader />}
      {currentStep === 1 && (
        <GoldDetailsSection
          data={quotationForm.goldDetails}
          onChange={(updated: any) =>
            setQuotationForm({ ...quotationForm, goldDetails: updated })
          }
          onNext={() => setCurrentStep(2)}
        />
      )}
      {currentStep === 2 && (
        <DiamondDetailsSection
          data={quotationForm.diamondDetails}
          onChange={(updated: any) =>
            setQuotationForm({ ...quotationForm, diamondDetails: updated })
          }
          onNext={() => setCurrentStep(3)}
        />
      )}
      {currentStep === 3 && (
        <QuotationSummarySection
          quotationForm={quotationForm}
          data={quotationForm.quotationSummary}
          onChange={(updated: Partial<QuotationForm>) =>
            setQuotationForm((prev) => ({ ...prev, ...updated }))
          }
          onSubmit={handleSubmit}
        />
      )}

      <DialogModal
        icon={AppString.QuotationScreen.verification.icon}
        visible={verificationModalVisible}
        onClose={closeModal}
        title={AppString.QuotationScreen.verification.title}
        description={AppString.QuotationScreen.verification.description}
        button={'Share'}

      />
    </View>
  );
};

export default QuotationFormScreen;
