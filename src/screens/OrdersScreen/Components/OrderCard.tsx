import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppColor from '../../../app-res/AppColor';
import AppDimension from '../../../app-res/AppDimension';
import AppFontSize from '../../../app-res/AppFontSize';
import AppFontFamily from '../../../app-res/AppFontFamily';
import { formatNumberWithCommas } from '../../../utils/Helper';

type OrderItemCardProps = {
  item: any;
  navigation: any
};

const OrderCard = ({ item, navigation }: OrderItemCardProps) => {
  console.log(item);
  

  const {
    customerDetails: {
      name,
      contactNumber,
      address,
      city,
      pinCode,
      email,
      panCardNumber,
      aadhaarNumber,
      expectedDeliverydate
    }
  } = item;

  const formattedDate = new Date(item.orderDate).toLocaleDateString();

  return (
    <View style={styles.orderCard}>

      <View style={styles.row}>
        <View style={styles.rowView}>
          <Text style={styles.value}>{name || 'Client Name'}</Text>
          <View style={styles.view} />
          <Text style={styles.value}>{contactNumber}</Text>
        </View>
        <Text style={styles.value}>{formattedDate}</Text>
      </View>
      <Text style={styles.value}>{email}</Text>

      <View style={{ ...styles.rowView, marginTop: 10 }}>
        <Text style={styles.label}>Address:  </Text>
        <Text style={styles.value}>
          {address}, {city} - {pinCode}
        </Text>
      </View>

      {panCardNumber ?
        <View style={styles.rowView}>
          <Text style={styles.label}>PAN no:  </Text>
          <Text style={styles.value}>{panCardNumber}</Text>
        </View>
        : <></>}

      {aadhaarNumber ?
        <View style={styles.rowView}>
          <Text style={styles.label}>Aadhaar No:  </Text>
          <Text style={styles.value}>{aadhaarNumber}</Text>
        </View>
        : <></>}

        <View style={{ ...styles.rowView, justifyContent:'center' }}>
        <Text style={styles.label}>Order Cost: </Text>
        <Text style={styles.totalValue}>{formatNumberWithCommas(item.quotationId.quotationSummary.total)}</Text>
      </View>

      <View style={{ ...styles.rowView, justifyContent:'center' }}>
        <Text style={styles.label}>Expected Delivery Date: </Text>
        <Text style={styles.totalValue}>{expectedDeliverydate}</Text>
      </View>
    </View>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  paddingHorizontal: {
    paddingTop: AppDimension.SPACING_Y_05,
  },
  orderCard: {
    backgroundColor: AppColor.white,
    borderRadius: 12,
    padding: AppDimension.SPACING_X_10,
    borderWidth: 0.5,
    borderColor: AppColor.primary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    marginBottom: AppDimension.SPACING_Y_04,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginBottom: AppDimension.SPACING_Y_05,
  },
  rowView: {
    flexDirection: 'row',
    marginBottom: AppDimension.SPACING_Y_04,
    alignItems: 'center',
    //justifyContent: 'center'
  },
  textValue: {
    fontSize: AppFontSize.FONT_SIZE_14,
    fontFamily: AppFontFamily.ManropeBold,
    color: AppColor.greyText,
  },
  view: {
    backgroundColor: AppColor.greyText,
    width: AppDimension.SPACING_X_01,
    height: 14,
    marginHorizontal: AppDimension.SPACING_X_04,
    marginTop: AppDimension.SPACING_X_03,
    alignContent: 'center',
    alignSelf: 'center'
  },

  label: {
    //flex: 1,
    fontSize: AppFontSize.FONT_SIZE_15,
    fontFamily: AppFontFamily.ManropeBold,
    color: AppColor.grey71,
    textAlign: 'center',

  },
  value: {
    //flex: 1,
    fontSize: AppFontSize.FONT_SIZE_14,
    fontFamily: AppFontFamily.ManropeExtraBold,
    color: AppColor.black,
    //textAlign: 'center',
  },

  totalLabel: {
    fontSize: AppFontSize.FONT_SIZE_16,
    fontFamily: AppFontFamily.ManropeExtraBold,
    color: AppColor.black,
    textAlign: 'center',
  },
  totalValue: {
    fontSize: AppFontSize.FONT_SIZE_16,
    fontFamily: AppFontFamily.ManropeExtraBold,
    color: AppColor.black,
    textAlign: 'center',
  },

  tradeButtonText: {
    color: AppColor.white,
    fontFamily: AppFontFamily.ManropeBold,
    fontSize: AppFontSize.FONT_SIZE_16,
  },

});
