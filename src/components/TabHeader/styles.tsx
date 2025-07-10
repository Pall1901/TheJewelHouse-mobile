import { StyleSheet } from "react-native";
import AppColor from "../../app-res/AppColor";
import AppDimension from "../../app-res/AppDimension";
import AppFontFamily from "../../app-res/AppFontFamily";
import AppFontSize from "../../app-res/AppFontSize";

export const styles = StyleSheet.create({
    mainRow: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: AppDimension.SPACING_Y_50,
      backgroundColor: AppColor.primary,
      paddingEnd:AppDimension.SPACING_X_05
    },
    textGreen: {
      color: AppColor.white,
      fontSize: AppFontSize.FONT_SIZE_24,
      fontFamily: AppFontFamily.ManropeBold,
      paddingStart: AppDimension.SPACING_X_10,
      lineHeight: AppFontSize.FONT_SIZE_30,
    },
    infoCard: {
      position: 'absolute',
      backgroundColor: AppColor.black,
      right: AppDimension.SPACING_X_30,
      top: AppDimension.SPACING_Y_50,
      paddingHorizontal: AppDimension.SPACING_X_10,
      paddingVertical: AppDimension.SPACING_X_05,
      borderRadius: AppDimension.SPACING_X_10,
    },
    infoRow: { flexDirection: 'row', alignItems: 'center', marginVertical: AppDimension.SPACING_X_05 },
    infoText: {
      marginStart: AppDimension.SPACING_X_10,
      fontFamily: AppFontFamily.ManropeBold,
      color: AppColor.white,
      fontSize: AppFontSize.FONT_SIZE_16,
    },
  });