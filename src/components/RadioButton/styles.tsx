import { StyleSheet } from "react-native";
import AppColor from "../../app-res/AppColor";
import AppDimension from "../../app-res/AppDimension";
import AppFontFamily from "../../app-res/AppFontFamily";
import AppFontSize from "../../app-res/AppFontSize";

export const styles = StyleSheet.create({
    view:{
       flex:1, 
       marginVertical: AppDimension.SPACING_X_05 ,
       flexDirection:'row',
       alignItems:'center',
        paddingHorizontal: AppDimension.SPACING_X_10,
        paddingVertical: AppDimension.SPACING_X_05,
        backgroundColor: AppColor.white,
        borderRadius: AppDimension.SPACING_X_10,
        borderColor: AppColor.primary,
        borderWidth: AppDimension.SPACING_X_01,
       
    },
    header: {
      color: AppColor.black,
      fontSize: AppFontSize.FONT_SIZE_16,
      fontFamily: AppFontFamily.ManropeExtraBold,
      flex:1
    },
    title: {
      color: AppColor.black,
      fontSize: AppFontSize.FONT_SIZE_16,
      fontFamily: AppFontFamily.ManropeBold,
      paddingStart: AppDimension.SPACING_X_10,
      textTransform:'capitalize'
    },
    radioButton: {
      borderRadius: AppDimension.SPACING_X_18,
      width: AppDimension.SPACING_X_18,
      height: AppDimension.SPACING_X_18,
      borderWidth: AppDimension.SPACING_X_02,
      borderColor: AppColor.primary,
      padding: AppDimension.SPACING_X_02,
    },
    radio: {
      backgroundColor: AppColor.primary,
      width: '100%',
      height: '100%',
      borderRadius: AppDimension.SPACING_X_24,
    },
    pressable: {
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center',
      height: AppDimension.SPACING_X_40,
    }
  });