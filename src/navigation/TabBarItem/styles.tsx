import { StyleSheet } from "react-native";
import AppColor from "../../app-res/AppColor";
import AppDimension from "../../app-res/AppDimension";
import AppFontFamily from "../../app-res/AppFontFamily";
import AppFontSize from "../../app-res/AppFontSize";

export const styles = StyleSheet.create({
    mainContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      paddingTop: AppDimension.SPACING_Y_08,
      height: AppDimension.SPACING_Y_78,
      overflow: 'hidden',
      backgroundColor: AppColor.primaryGreen,
      borderTopRightRadius: AppDimension.SPACING_X_20,
      borderTopLeftRadius: AppDimension.SPACING_X_20,
    },
    mainItemContainer: {
      // flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    viewImagContainer: {
      width: AppDimension.SPACING_X_50,
      height: AppDimension.SPACING_X_50,
      alignItems: 'center',
      backgroundColor: AppColor.white,
      borderRadius: AppDimension.SPACING_X_50,
      paddingVertical: AppDimension.SPACING_X_08,
      paddingTop: AppDimension.SPACING_Y_10,
    },
    textLabel: {
      color: AppColor.white,
      fontSize: AppFontSize.FONT_SIZE_13,
      fontFamily: AppFontFamily.ManropeBold
    }
  
  });