import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { QuotationForm } from '../../utils/types';
import DiamondDetailsSection from './Components/DiamondDetailsSection';
import GoldDetailsSection from './Components/GoldDetailsSection';
import QuotationSummarySection from './Components/QuotationSummarySection';

type QuotationFormProps = {
  navigation: any;
  route: any;
};

const QuotationFormScreen = ({ navigation }: QuotationFormProps) => {
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      if (currentStep > 1) {
        e.preventDefault();
        setCurrentStep((prev) => prev - 1);
      } else {
        // Remove listener to avoid infinite loop
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
    quotationSummary: { goldCost: '', labourCost: '', diamondCost: '', gst: '', total: '',finalTotal :'' },
  });

  const handleSubmit = () => {
    console.log('Submitting to API:', quotationForm);
    // Your API call logic here
  };

  return (
    <View style={{ flex: 1 }}>
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
          data ={quotationForm.quotationSummary}
          onChange={(updated: Partial<QuotationForm>) =>
            setQuotationForm((prev) => ({ ...prev, ...updated }))
          }
          onSubmit={handleSubmit}
        />
      )}
    </View>
  );
};

export default QuotationFormScreen;
