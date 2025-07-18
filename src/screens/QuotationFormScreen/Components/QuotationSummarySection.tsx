import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import { QuotationForm, QuotationSummary } from '../../../utils/types';
import globalStyles from '../../../theme/globalStyles';
import Header from '../../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles';
import { formatNumberWithCommas, showAlert } from '../../../utils/Helper';
import TextInputComponent from '../../../components/TextInputComponent';
import ButtonComponent from '../../../components/ButtonComponent';

interface Props {
  quotationForm: QuotationForm;
  data: QuotationSummary;
  onChange: (updated: Partial<QuotationForm>) => void;
  onSubmit: () => void;
}

const QuotationSummarySection: React.FC<Props> = ({ quotationForm, data, onChange, onSubmit }) => {
  const navigation = useNavigation();
  console.log(quotationForm, 'data in QuotationSummarySection');

  quotationForm.quotationSummary.goldCost = quotationForm.goldDetails.totalGoldCost;
  quotationForm.quotationSummary.labourCost = quotationForm.goldDetails.totalLabourPrice;

  const diamondDetailsLength = quotationForm.diamondDetails.length;

  if (diamondDetailsLength > 0) {
    let total = 0;
    for (const diamond of quotationForm.diamondDetails) {
      total += parseFloat(diamond.totalAmount || '0');
    }
    quotationForm.quotationSummary.diamondCost = total.toFixed(2);
  } else {
    quotationForm.quotationSummary.diamondCost = '0.00';
  }
  const total = parseFloat(quotationForm.quotationSummary.goldCost) +
    parseFloat(quotationForm.quotationSummary.labourCost) +
    parseFloat(quotationForm.quotationSummary.diamondCost);

  quotationForm.quotationSummary.gst = formatNumberWithCommas((total * 0.03).toFixed(2));
  quotationForm.quotationSummary.total = formatNumberWithCommas((total + parseFloat(quotationForm.quotationSummary.gst)).toFixed(2));


  return (
    <View style={[globalStyles.mainContainer]}>
      <Header name="Quotation Summary" navigation={navigation} />

      <ScrollView style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 8 }}>
        {/* Cost Breakdown Section */}
        <View style={styles.card}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>Cost Breakdown</Text>
          </View>

          {[
            { label: 'Gold Cost', value: formatNumberWithCommas(quotationForm.quotationSummary.goldCost) },
            { label: 'Labour Cost', value: formatNumberWithCommas(quotationForm.quotationSummary.labourCost) },
            { label: 'Diamond Cost', value: formatNumberWithCommas(quotationForm.quotationSummary.diamondCost) },
            { label: 'Total', value: formatNumberWithCommas(total.toFixed(2)) },
          ].map((item, idx) => (
            <View
              key={idx}
              style={{ ...styles.row, justifyContent: 'space-between', marginVertical: 4 }}
            >
              <Text style={[styles.text, styles.finalLabel]}>{item.label}</Text>
              <Text style={[styles.text]}>
                ₹ {item.value}
              </Text>
            </View>
          ))}
        </View>

        {/* Taxes Section */}
        <View style={styles.card}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>Taxes & Charges</Text>
          </View>
          <View style={{ ...styles.row, justifyContent: 'space-between', marginVertical: 4 }}>
            <Text style={[styles.text, styles.finalLabel]}>GST (3%)</Text>
            <Text style={styles.text}>₹ {quotationForm.quotationSummary.gst}</Text>
          </View>
        </View>

        {/* Final Total Section */}
        <View style={[styles.card, styles.finalCard]}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>Final Amount</Text>
          </View>
          <View style={{ ...styles.row, justifyContent: 'space-between', marginTop: 8 }}>
            <Text style={[styles.text, styles.finalLabel]}>Total</Text>
            <Text style={[styles.text, styles.finalAmount]}>
              ₹ {quotationForm.quotationSummary.total}
            </Text>
          </View>
        </View>

        <TextInputComponent
          title="Client Name"
          placeholder="Enter Client Name"
          onChangeText={(text) =>
            onChange({
              clientDetails: {
                ...quotationForm.clientDetails,
                name: text,
              },
            })
          }
          value={quotationForm.clientDetails.name}
          keyboardType="default">
        </TextInputComponent>

        <TextInputComponent
          title="Client Phone Number"
          placeholder="Enter Phone Number"
          onChangeText={(text) =>
            onChange({
              clientDetails: {
                ...quotationForm.clientDetails,
                contactNumber: text,
              },
            })
          }
          value={quotationForm.clientDetails.contactNumber}
          keyboardType="numeric">
        </TextInputComponent>

        <ButtonComponent
          title="Generate PDF"
          onPress={() => {
            if (!quotationForm.clientDetails.name.trim()) {
              showAlert('Client name is required');
              return;
            }

            if (!quotationForm.clientDetails.contactNumber.trim()) {
              showAlert('Client phone number is required');
              return;
            }
            
            onSubmit();
          }}
        />

      </ScrollView>
    </View >

  )
}

export default QuotationSummarySection

