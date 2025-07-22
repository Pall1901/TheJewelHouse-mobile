import { ScrollView, Text, View } from 'react-native'
import React, { useEffect } from 'react'
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

  // Calculate costs
  const goldCost = parseFloat(quotationForm.goldDetails.totalGoldCost) || 0;
  const labourCost = parseFloat(quotationForm.goldDetails.totalLabourPrice) || 0;
  const diamondCost = quotationForm.diamondDetails.reduce(
    (sum, diamond) => sum + parseFloat(diamond.totalAmount || '0'),
    0
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
      }
    });
  }, [goldCost, labourCost, diamondCost, total, gst, finalTotal]);


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
            { label: 'Gold Cost', value: displayGoldCost },
            { label: 'Labour Cost', value: displayLabourCost },
            { label: 'Diamond Cost', value: displayDiamondCost },
            { label: 'Total', value: displayTotal },
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
            <Text style={styles.text}>₹ {displayGst}</Text>
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
              ₹ {displayFinalTotal}
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
          keyboardType="number-pad">
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

