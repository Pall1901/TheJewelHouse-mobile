import { StyleSheet } from "react-native";
import AppDimension from "../../app-res/AppDimension";
import AppColor from "../../app-res/AppColor";
import AppFontSize from "../../app-res/AppFontSize";
import AppFontFamily from "../../app-res/AppFontFamily";

export const styles = StyleSheet.create({
    mainRow: {
      flexDirection: 'row',
      //width:'100%',
      paddingTop:AppDimension.SPACING_Y_10,
      alignItems: 'center',
      paddingHorizontal: AppDimension.SPACING_X_10,
      height: AppDimension.SPACING_Y_50,
      backgroundColor:AppColor.primary
    },
    textGreen: {
      color: AppColor.white,
      fontSize: AppFontSize.FONT_SIZE_20,
      fontFamily: AppFontFamily.ManropeBold,
      paddingStart: AppDimension.SPACING_X_10,
      lineHeight:AppFontSize.FONT_SIZE_30,
    },
  });
  