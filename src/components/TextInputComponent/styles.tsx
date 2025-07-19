import { StyleSheet } from "react-native";
import AppColor from "../../app-res/AppColor";
import AppDimension from "../../app-res/AppDimension";
import AppFontFamily from "../../app-res/AppFontFamily";
import AppFontSize from "../../app-res/AppFontSize";

export const styles = StyleSheet.create({
    container: {
      height: AppDimension.SPACING_Y_50,
      minWidth: '90%',
      position: 'relative',
      borderRadius: AppDimension.SPACING_X_10,
      borderWidth:1,
      borderColor:AppColor.primary,
      alignItems: 'center',
      paddingEnd: AppDimension.SPACING_X_10,
      flexDirection: 'row',
    },
    textInput: {
      flex: 1,
      //marginTop: AppDimension.SPACING_Y_10,
      //justifyContent: 'flex-end',
      height: AppDimension.SPACING_Y_55,
      borderRadius: AppDimension.SPACING_X_10,
      color: AppColor.grey,
      paddingStart: AppDimension.SPACING_X_05,
      paddingEnd: AppDimension.SPACING_X_10,
    },
    titleText: {
      color: AppColor.primary,
      fontSize: AppFontSize.FONT_SIZE_14,
      fontFamily: AppFontFamily.ManropeBold,
    },
    title: {
      color: AppColor.black,
      fontSize: AppFontSize.FONT_SIZE_15,
      marginLeft:AppDimension.SPACING_X_02,
      marginBottom:AppDimension.SPACING_Y_03,
      fontFamily: AppFontFamily.ManropeBold,
    },
    textInput1: {
      backgroundColor : AppColor.greyLighter,
      height: AppDimension.SPACING_Y_48,
    },
    textMargin: {
      //height: AppDimension.SPACING_Y_100,
      //marginTop: AppDimension.SPACING_Y_20,
    },
  });