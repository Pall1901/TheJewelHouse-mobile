import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AppColor from '../../../app-res/AppColor';
import AppDimension from '../../../app-res/AppDimension';
import AppFontFamily from '../../../app-res/AppFontFamily';
import AppFontSize from '../../../app-res/AppFontSize';
import ButtonComponent from '../../../components/ButtonComponent';
import { ScreenName } from '../../../utils/enums';
import { formatNumber } from '../../../utils/Helper';

type QuotationItemCardProps = {
    item: any;
    navigation: any
};

const QuotationItemCard = ({ item, navigation }: QuotationItemCardProps) => {
    //console.log(item,'..................');


    const handlePress = () => {
        navigation.navigate(ScreenName.ORDER_FORM_SCREEN, { item: item });
    };
    const editQuotation = () => {
         navigation.navigate(ScreenName.QUOTATION_FORM_SCREEN, { item: item });
    };
    const { clientDetails, quotationSummary, date, orderStatus } = item;
    const formattedDate = new Date(date).toLocaleDateString();

    return (
        <TouchableOpacity style={styles.paddingHorizontal} onPress={() => { navigation.navigate(ScreenName.QUOTATION_DETAIL_SCREEN, { item: item }) }}>
            <View style={styles.orderCard}>

                <View style={styles.row}>
                    <View style={styles.rowView}>
                        <Text style={styles.textValue}>{clientDetails.name.trim() || 'Client Name'}</Text>
                        <View style={styles.view} />
                        <Text style={styles.textValue}>{clientDetails.contactNumber}</Text>
                    </View>
                    <Text style={styles.textValue}>{formattedDate}</Text>
                </View>

                <View style={{ marginTop: 16 }}>
                    {/* Values row */}
                    <View style={styles.row}>
                        <Text style={styles.value}>₹{formatNumber(quotationSummary.goldCost)}</Text>
                        <Text style={styles.value}>₹{formatNumber(quotationSummary.labourCost)}</Text>
                        <Text style={styles.value}>₹{formatNumber(quotationSummary.diamondCost)}</Text>
                        <Text style={styles.value}>₹{formatNumber(quotationSummary.gst)}</Text>
                    </View>

                    {/* Labels row */}
                    <View style={styles.row}>
                        <Text style={styles.label}>Gold{'\n'}Cost</Text>
                        <Text style={styles.label}>Labour{'\n'}Cost</Text>
                        <Text style={styles.label}>Diamond{'\n'}Cost</Text>
                        <Text style={styles.label}>GST</Text>
                    </View>
                </View>

                <View style={{ ...styles.rowView, marginVertical: AppDimension.SPACING_Y_10 }}>
                    <Text style={styles.totalLabel}>Total Price: </Text>
                    <Text style={styles.totalValue}>₹{formatNumber(quotationSummary.finalTotal)}</Text>
                </View>

                {orderStatus !== 'placed' ?
                    <View style={styles.buttonRow}>
                        <View style={{ marginRight: 8, flex: 1 }}>
                            <ButtonComponent
                                title={'Edit Quotation'}
                                onPress={editQuotation}
                                textStyle={styles.tradeButtonText} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <ButtonComponent
                                title={'Place Order'}
                                onPress={handlePress}
                                textStyle={styles.tradeButtonText}
                            />
                        </View>
                    </View>
                    : null}
            </View>
        </TouchableOpacity>
    );
};




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
        //shadowRadius: 6,
        //elevation: 3,
        marginBottom: AppDimension.SPACING_Y_04,
    },
    row: {
        //flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginBottom: AppDimension.SPACING_Y_05,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: AppDimension.SPACING_Y_10, // Add some space above buttons
    },
    rowView: {
        flexDirection: 'row',
        marginBottom: AppDimension.SPACING_Y_04,
        alignItems: 'center',
        justifyContent: 'center'
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
        flex: 1,
        fontSize: AppFontSize.FONT_SIZE_15,
        fontFamily: AppFontFamily.ManropeBold,
        color: AppColor.grey71,
        textAlign: 'center',

    },
    value: {
        flex: 1,
        fontSize: AppFontSize.FONT_SIZE_14,
        fontFamily: AppFontFamily.ManropeExtraBold,
        color: AppColor.black,
        textAlign: 'center',
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




export default QuotationItemCard;