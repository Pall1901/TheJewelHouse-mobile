import { ScrollView, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { QuotationForm, QuotationSummary } from '../../../utils/types';
import globalStyles from '../../../theme/globalStyles';
import Header from '../../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles';
import { formatNumberWithCommas, showAlert } from '../../../utils/Helper';
import TextInputComponent from '../../../components/TextInputComponent';
import ButtonComponent from '../../../components/ButtonComponent';
import Loader from '../../../components/Loader/Loader';
import ErrorComponent from '../../../components/ErrorComponent';
import { Formik } from 'formik';
import { validationSchema } from './Validation';
import UploadImageView from './UploadImageView';

interface Props {
  quotationForm: QuotationForm;
  data: QuotationSummary;
  onChange: (updated: Partial<QuotationForm>) => void;
  onSubmit: () => void;
  setImageUrl: (url: string) => void;
  imageUrl: string;
}

const QuotationSummarySection: React.FC<Props> = ({
  quotationForm,
  data,
  onChange,
  onSubmit,
  setImageUrl,
  imageUrl,
}) => {
  console.log(imageUrl, 'QuotationSummarySection data');

  const navigation = useNavigation();
  // Calculate costs
  const goldCost = parseFloat(quotationForm.goldDetails.totalGoldCost) || 0;
  const labourCost =
    parseFloat(quotationForm.goldDetails.totalLabourPrice) || 0;
  const diamondCost = quotationForm.diamondDetails.reduce(
    (sum, diamond) => sum + parseFloat(diamond.totalAmount || '0'),
    0,
  );

  const total = goldCost + labourCost + diamondCost;
  const gst = +(total * 0.03).toFixed(2);
  const finalTotal = total + gst;

  // For display
  const displayGoldCost = formatNumberWithCommas(goldCost.toFixed(2));
  const displayLabourCost = formatNumberWithCommas(labourCost.toFixed(2));
  const displayDiamondCost = formatNumberWithCommas(diamondCost.toFixed(2));
  const displayTotal = formatNumberWithCommas(total.toFixed(2));
  const displayGst = formatNumberWithCommas(gst.toFixed(2));
  const displayFinalTotal = formatNumberWithCommas(finalTotal.toFixed(2));

  useEffect(() => {
    onChange({
      quotationSummary: {
        goldCost: goldCost.toFixed(2),
        labourCost: labourCost.toFixed(2),
        diamondCost: diamondCost.toFixed(2),
        total: total.toFixed(2),
        gst: gst.toFixed(2),
        finalTotal: finalTotal.toFixed(2),
      },
    });
  }, [goldCost, labourCost, diamondCost, total, gst, finalTotal]);

  const generatePDF = (values: any) => {
    quotationForm.clientDetails.name = values.name;
    quotationForm.clientDetails.contactNumber = values.contactNumber;
    quotationForm.clientDetails.city = values.city;
    quotationForm.clientDetails.remark = values.remark;
    quotationForm.clientDetails.styleCode = values.styleCode;
    onSubmit();
  };

  return (
    <View style={[globalStyles.mainContainer]}>
      <Header name="Quotation Summary" navigation={navigation} />

      <ScrollView
        style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 8 }}
      >
        {/* Cost Breakdown Section */}
        <View style={styles.card}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>Cost Breakdown</Text>
          </View>

          {[
            { label: 'Gold Cost', value: displayGoldCost },
            { label: 'Labour Cost', value: displayLabourCost },
            { label: 'Diamond Cost', value: displayDiamondCost },
            { label: 'Total', value: displayTotal },
          ].map((item, idx) => (
            <View
              key={idx}
              style={{
                ...styles.row,
                justifyContent: 'space-between',
                marginVertical: 4,
              }}
            >
              <Text style={[styles.text, styles.finalLabel]}>{item.label}</Text>
              <Text style={[styles.text]}>₹ {item.value}</Text>
            </View>
          ))}
        </View>

        {/* Taxes Section */}
        <View style={styles.card}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>Taxes & Charges</Text>
          </View>
          <View
            style={{
              ...styles.row,
              justifyContent: 'space-between',
              marginVertical: 4,
            }}
          >
            <Text style={[styles.text, styles.finalLabel]}>GST (3%)</Text>
            <Text style={styles.text}>₹ {displayGst}</Text>
          </View>
        </View>

        {/* Final Total Section */}
        <View style={[styles.card, styles.finalCard]}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>Final Amount</Text>
          </View>
          <View
            style={{
              ...styles.row,
              justifyContent: 'space-between',
              marginTop: 8,
            }}
          >
            <Text style={[styles.text, styles.finalLabel]}>Total</Text>
            <Text style={[styles.text, styles.finalAmount]}>
              ₹ {displayFinalTotal}
            </Text>
          </View>
        </View>

        <Formik
          initialValues={{
            name: quotationForm?.clientDetails?.name || '',
            contactNumber: quotationForm?.clientDetails?.contactNumber || '',
            city: quotationForm?.clientDetails?.city || '',
            remark: quotationForm?.clientDetails?.remark || '',
            styleCode: quotationForm?.clientDetails?.styleCode || '',
          }}
          validateOnMount={true}
          validationSchema={validationSchema}
          onSubmit={values => generatePDF(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <TextInputComponent
                title="Name"
                placeholder="Enter customer name"
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
              >
                <ErrorComponent
                  errors={errors}
                  touched={touched}
                  fieldName={'name'}
                  flag={false}
                />
              </TextInputComponent>

              <TextInputComponent
                title="Mobile No"
                placeholder="Enter customer contact number  "
                onChangeText={handleChange('contactNumber')}
                onBlur={handleBlur('contactNumber')}
                value={values.contactNumber}
                keyboardType="number-pad"
                maxLength={10}
              >
                <ErrorComponent
                  errors={errors}
                  touched={touched}
                  fieldName={'contactNumber'}
                  flag={false}
                />
              </TextInputComponent>

              <TextInputComponent
                title="City"
                placeholder="Enter city"
                onChangeText={handleChange('city')}
                onBlur={handleBlur('city')}
                value={values.city}
              >
                <ErrorComponent
                  errors={errors}
                  touched={touched}
                  fieldName={'city'}
                  flag={false}
                />
              </TextInputComponent>

              <TextInputComponent
                title="Remark"
                placeholder="Enter remark"
                onChangeText={handleChange('remark')}
                onBlur={handleBlur('remark')}
                value={values.remark}
              ></TextInputComponent>

              <TextInputComponent
                title="Style Code"
                placeholder="Enter style code"
                onChangeText={handleChange('styleCode')}
                onBlur={handleBlur('styleCode')}
                value={values.styleCode}
              ></TextInputComponent>

              <UploadImageView
                setImageUrl={setImageUrl}
                initialUrl={imageUrl}
              />

              <ButtonComponent
                title={'Generate PDF'}
                onPress={() => {
                  handleSubmit();
                }}
              />
            </>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};

export default QuotationSummarySection;
