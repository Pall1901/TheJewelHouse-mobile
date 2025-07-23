import { StyleSheet } from "react-native";
import AppColor from "../../app-res/AppColor";
import AppDimension from "../../app-res/AppDimension";
import AppFontFamily from "../../app-res/AppFontFamily";
import AppFontSize from "../../app-res/AppFontSize";

export const styles = StyleSheet.create({
    modalContainer: {
     width:'100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      backgroundColor: AppColor.white,
      borderColor:AppColor.primary,
      borderWidth:AppDimension.SPACING_X_01,
      width:'90%',
      paddingVertical: AppDimension.SPACING_X_20,
      paddingHorizontal:AppDimension.SPACING_X_14,
      borderRadius: AppDimension.SPACING_X_10,
      alignItems: 'center',
    },
    modalHead: {
      fontSize: AppFontSize.FONT_SIZE_24,
      fontFamily: AppFontFamily.ManropeBold,
      marginBottom: AppDimension.SPACING_X_15,
      color: AppColor.black,
      textAlign:'center'
    },
    modalText: {
      fontSize: AppFontSize.FONT_SIZE_16,
      fontFamily: AppFontFamily.ManropeRegular,
      marginBottom: AppDimension.SPACING_X_15,
      color: AppColor.black,
      textAlign:'center'
  
    },
  });