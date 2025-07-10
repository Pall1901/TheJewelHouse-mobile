import { StyleSheet } from "react-native";
import AppDimension from "../../app-res/AppDimension";
import AppFontSize from "../../app-res/AppFontSize";
import AppFontFamily from "../../app-res/AppFontFamily";
import AppColor from "../../app-res/AppColor";
import globalStyles from "../../theme/globalStyles";

export const styles = StyleSheet.create({

    rowView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        //flex: 1,
        paddingHorizontal: AppDimension.SPACING_X_20
    },
    analyticsValue: {
        fontSize: AppFontSize.FONT_SIZE_22,
        fontFamily: AppFontFamily.ManropeBold,
        color: AppColor.black,
    },
    analyticsLabel: {
        fontSize: AppFontSize.FONT_SIZE_16,
        fontFamily: AppFontFamily.ManropeBold,
        color: AppColor.primary
    },
    cardView: {
        backgroundColor: AppColor.blueBackground,
        borderRadius: AppDimension.SPACING_X_10,
        alignItems: 'center',
        paddingVertical: AppDimension.SPACING_X_15,
        paddingHorizontal: AppDimension.SPACING_X_10,
        marginTop: AppDimension.SPACING_Y_20,
        flex: 1,
    },
    buttonStyle: {
        marginTop: AppDimension.SPACING_Y_50,   
        marginHorizontal: AppDimension.SPACING_X_20,
        borderRadius: AppDimension.SPACING_X_20,
        paddingVertical: AppDimension.SPACING_Y_10,

    }
    
})