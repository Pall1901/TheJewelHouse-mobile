import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppColor from '../../../app-res/AppColor';
import AppDimension from '../../../app-res/AppDimension';
import AppFontFamily from '../../../app-res/AppFontFamily';
import AppFontSize from '../../../app-res/AppFontSize';
import ButtonComponent from '../../../components/ButtonComponent';
import { ScreenName } from '../../../utils/enums';

type QuotationItemCardProps = {
    item: any;
    navigation: any
};

const QuotationItemCard = ({ item, navigation }: QuotationItemCardProps) => {

    const handlePress = () => {
       navigation.navigate(ScreenName.ORDER_FORM_SCREEN, { item: item });
    };
    const { clientDetails, quotationSummary, date } = item;
    const formattedDate = new Date(date).toLocaleDateString();

    return (
        <View style={styles.paddingHorizontal}>
            <View style={styles.orderCard}>

                <View style={styles.row}>
                <View style={styles.header}>
                    <Text style={styles.name}>{clientDetails.name.trim() || 'Client Name'}</Text>
                    <Text style={styles.contact}>📞 {clientDetails.contactNumber}</Text>
                </View>
                <Text style={styles.date}>📅 {formattedDate}</Text>
                </View>

                <View style={styles.divider} />

                <View style={styles.summary}>
                    <Text style={styles.summaryTitle}>Quotation Summary:</Text>

                    <View style={styles.row}>
                        <Text style={styles.label}>💎 Diamond Cost:</Text>
                        <Text style={styles.value}>₹{quotationSummary.diamondCost}</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.label}>🪙 Gold Cost:</Text>
                        <Text style={styles.value}>₹{quotationSummary.goldCost}</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.label}>🛠️ Labour Cost:</Text>
                        <Text style={styles.value}>₹{quotationSummary.labourCost}</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.label}>🧾 GST:</Text>
                        <Text style={styles.value}>₹{quotationSummary.gst}</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={[styles.label, styles.totalLabel]}>💰 Total:</Text>
                        <Text style={[styles.value, styles.totalValue]}>₹{quotationSummary.total}</Text>
                    </View>
                </View>


                <ButtonComponent
                    title={'Place Order'}
                    onPress={handlePress}
                    style={styles.tradeButton}
                    textStyle={styles.tradeButtonText}
                />

            </View>
        </View>
    );
};




const styles = StyleSheet.create({
    paddingHorizontal: {
        paddingTop: AppDimension.SPACING_Y_05,
    },
    orderCard: {
        backgroundColor: AppColor.white,
        borderRadius: 12,
        padding: AppDimension.SPACING_X_12,
        borderWidth:0.5,
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
    rowView: {
        flexDirection: 'row',
        marginBottom: AppDimension.SPACING_Y_04,
    },
    // row: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     marginBottom: AppDimension.SPACING_Y_08,
    // },
    item: {
        flex: 1,
        alignItems: 'flex-start',
    },
    textLabel: {
        fontSize: AppFontSize.FONT_SIZE_12,
        fontFamily: AppFontFamily.ManropeRegular,
        textAlignVertical: 'center',
        marginRight: AppDimension.SPACING_X_05,
        color: '#666',
    },
    textValue: {
        fontSize: AppFontSize.FONT_SIZE_14,
        fontFamily: AppFontFamily.ManropeBold,
        color: AppColor.primaryText || '#333',
    },
    tradeButton: {
        marginTop: AppDimension.SPACING_Y_03,
        backgroundColor: AppColor.primary,
        paddingVertical: AppDimension.SPACING_Y_05,
        borderRadius: 8,
        alignItems: 'center',
    },
    tradeButtonText: {
        color: AppColor.white,
        fontFamily: AppFontFamily.ManropeBold,
        fontSize: AppFontSize.FONT_SIZE_16,
    },
    statusBadge: {
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 5
    },
    statusText: {
        color: AppColor.white,
        fontFamily: AppFontFamily.ManropeRegular,
    },


    header: {
        marginBottom: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#222',
    },
    date: {
        fontSize: 14,
        color: '#666',
        marginTop: 2,
    },
    contact: {
        fontSize: 14,
        color: '#666',
        marginTop: 2,
    },
    divider: {
        height: 1,
        backgroundColor: '#eee',
        marginVertical: 10,
    },
    summary: {},
    summaryTitle: {
        fontSize: 15,
        fontWeight: '600',
        color: '#444',
        marginBottom: 6,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 2,
    },
    label: {
        fontSize: 14,
        color: '#555',
    },
    value: {
        fontSize: 14,
        color: '#333',
    },
    totalLabel: {
        fontWeight: 'bold',
        color: '#111',
    },
    totalValue: {
        fontWeight: 'bold',
        color: '#111',
    },
});




export default QuotationItemCard;
