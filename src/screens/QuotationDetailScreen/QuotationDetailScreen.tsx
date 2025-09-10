import React from 'react'
import { Button, Linking, ScrollView, Text, View } from 'react-native'
import Header from '../../components/Header'
import globalStyles from '../../theme/globalStyles'
import { styles } from './styles';
import ButtonComponent from '../../components/ButtonComponent';
import { formatNumber } from '../../utils/Helper';

type QuotationDetailProps = {
  navigation: any;
  route: any;
};

const QuotationDetailScreen = (props: QuotationDetailProps) => {
  const { item } = props.route.params;
  console.log(item, 'item');

  return (
    <View style={[globalStyles.mainContainer]}>
      <Header name={'Quotation Detail'} navigation={props.navigation} />
      <ScrollView style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 8 }}>
        <View style={styles.card}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>Gold Details</Text>
          </View>

          <View style={styles.mainRow}>
            <View style={styles.row}>
              <Text style={styles.label}>Purity:</Text>
              <Text style={styles.value}>{item.goldDetails.goldPurity}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Color:</Text>
              <Text style={styles.value}>{item.goldDetails.goldColor}</Text>
            </View>
          </View>

          {/* Row 2 */}
          <View style={styles.mainRow}>
            <View style={styles.row}>
              <Text style={styles.label}>Weight:</Text>
              <Text style={styles.value}>{item.goldDetails.weight} g</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Rate/g:</Text>
              <Text style={styles.value}>₹{formatNumber(item.goldDetails.ratePerGram)}</Text>
            </View>
          </View>

          {/* Row 3 */}
          <View style={styles.mainRow}>
            <View style={styles.row}>
              <Text style={styles.label}>Gold Cost:</Text>
              <Text style={styles.value}>₹{formatNumber(item.goldDetails.totalGoldCost.toFixed(2))}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Labour Cost:</Text>
              <Text style={styles.value}>₹{formatNumber(item.goldDetails.totalLabourPrice)}</Text>
            </View>
          </View>


        </View>

        <View style={styles.card}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>Diamond Details</Text>
          </View>
          {item.diamondDetails.map((diamond, index) => (
            <View key={index} style={styles.card}>
              <View style={styles.mainRow}>
                <View style={styles.row}>
                  <Text style={styles.label}>Type: </Text>
                  <Text style={styles.value}>{diamond.type}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.label}>Shape: </Text>
                  <Text style={styles.value}>{diamond.shape}</Text>
                </View>
              </View>

              {/* Row 2 */}
              <View style={styles.mainRow}>
                <View style={styles.row}>
                  <Text style={styles.label}>Size: </Text>
                  <Text style={styles.value}>{diamond.size} cts</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.label}>Color: </Text>
                  <Text style={styles.value}>{diamond.color}</Text>
                </View>
              </View>

              {/* Row 3 */}
              <View style={styles.mainRow}>
                <View style={styles.row}>
                  <Text style={styles.label}>Clarity: </Text>
                  <Text style={styles.value}>{diamond.clarity}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.label}>Rate/ct: </Text>
                  <Text style={styles.value}>₹{formatNumber(diamond.ratePerCts)}</Text>
                </View>
              </View>
              {/* Row 4 */}
              <View style={styles.mainRow}>
                <View style={styles.row}>
                  <Text style={styles.label}>Discount: </Text>
                  <Text style={styles.value}>{diamond.discount}%</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.label}>Final Rate/ct: </Text>
                  <Text style={styles.value}>₹{formatNumber(diamond.ratePerCtsAfterDis)}</Text>
                </View>
              </View>

              {/* Row 5 */}
              <View style={styles.row}>
                <Text style={styles.label}>Total Amount: </Text>
                <Text style={styles.value}>₹{formatNumber(diamond.totalAmount)}</Text>
              </View>

            </View>
          ))}
        </View>

        <View style={styles.card}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>Quotation Details</Text>
          </View>

          <View style={styles.mainRow}>
            <View style={styles.row}>
              <Text style={styles.label}>Gold Cost:</Text>
              <Text style={styles.value}>₹{formatNumber(item.quotationSummary.goldCost)}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Diamond Cost:</Text>
              <Text style={styles.value}>₹{formatNumber(item.quotationSummary.diamondCost)}</Text>
            </View>
          </View>

          {/* Row 2 */}
          <View style={styles.mainRow}>
            <View style={styles.row}>
              <Text style={styles.label}>Labour Cost:</Text>
              <Text style={styles.value}>₹{formatNumber(item.quotationSummary.labourCost)}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>GST:</Text>
              <Text style={styles.value}>₹{formatNumber(item.quotationSummary.gst)}</Text>
            </View>
          </View>

          {/* Total Row */}
          <View style={styles.mainRow}>
            <View style={styles.row}>
              <Text style={[styles.label, styles.totalLabel]}>Total:</Text>
              <Text style={[styles.value, styles.totalValue]}>₹{formatNumber(item.quotationSummary.total)}</Text>
            </View>
          </View>

        </View>

        <ButtonComponent
          title="View PDF"
          onPress={() => Linking.openURL(item.pdfUrl)} // or your download logic
        />

      </ScrollView>
    </View>
  )
}

export default QuotationDetailScreen

