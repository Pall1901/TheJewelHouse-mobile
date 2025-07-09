import { StyleSheet } from "react-native";
import AppDimension from "../../app-res/AppDimension";
import AppColor from "../../app-res/AppColor";
import AppFontFamily from "../../app-res/AppFontFamily";
import AppFontSize from "../../app-res/AppFontSize";

export const styles = StyleSheet.create({
    button: {
      flexDirection:'row',
      backgroundColor: AppColor.primaryGreen,
      paddingVertical: AppDimension.SPACING_Y_08,
      minWidth: AppDimension.SPACING_X_200,
      borderRadius: AppDimension.SPACING_X_10,
      //elevation: AppDimension.SPACING_X_05,
      alignItems:'center',
      justifyContent: 'center',
      marginVertical: AppDimension.SPACING_Y_10,
    },
    text: {
      color: AppColor.white,
      textAlign: 'center',
      fontSize: AppFontSize.FONT_SIZE_20,
      textTransform: 'capitalize',
      fontFamily: AppFontFamily.ManropeBold,
      paddingHorizontal: AppDimension.SPACING_X_20,
    },
  });