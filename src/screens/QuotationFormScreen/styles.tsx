import { StyleSheet } from "react-native";
import AppColor from "../../app-res/AppColor";
import AppDimension from "../../app-res/AppDimension";
import AppFontFamily from "../../app-res/AppFontFamily";
import AppFontSize from "../../app-res/AppFontSize";

export const styles = StyleSheet.create({
    view: {
        backgroundColor: '#FFF8E7', // soft gold tint
        borderRadius: 12,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 4,
    },
    header: {
        fontSize: AppFontSize.FONT_SIZE_18,
        color: '#A68A00',
        fontFamily: AppFontFamily.ManropeBold,
    },
    totalPriceView: {
        backgroundColor: AppColor.greyLighter,
        borderRadius: 12,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 16,
    },
    text: {
        fontSize: AppFontSize.FONT_SIZE_18,
        color: AppColor.black,
        fontFamily: AppFontFamily.ManropeBold,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: AppDimension.SPACING_Y_20,
    },
    card: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 14,
        marginBottom: AppDimension.SPACING_X_10,
    },

    sectionHeader: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 12,
        color: '#333',
    },
    sectionHeaderContainer: {
        borderBottomWidth: 1,
        borderStyle: 'dotted',
        borderColor: '#bbb',
        // marginBottom: 12,
    },

    finalCard: {
        backgroundColor: '#f9f9f9',
        borderColor: '#ccc',
        borderWidth: 1,
    },

    finalLabel: {
        fontSize: 16,
        fontWeight: '600',
    },

    finalAmount: {
        fontSize: 20,
        fontWeight: 'bold',
        color: AppColor.primary, // deep green or use your theme color
    },


});