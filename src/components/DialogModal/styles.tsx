import { StyleSheet } from "react-native";
import AppColor from "../../app-res/AppColor";
import AppDimension from "../../app-res/AppDimension";
import AppFontSize from "../../app-res/AppFontSize";
import globalStyles from "../../theme/globalStyles";

export const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
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
      ...globalStyles.fontBold,
      fontSize: AppFontSize.FONT_SIZE_24,
      marginBottom: AppDimension.SPACING_X_15,
      color: AppColor.primary,
      textAlign:'center'
    },
    modalTitle: {
      ...globalStyles.fontBold,
      fontSize: AppFontSize.FONT_SIZE_20,
      marginBottom: AppDimension.SPACING_X_05,
      color: AppColor.black,
      textAlign:'center'
    },
    modalText: {
      ...globalStyles.fontRegular,
      fontSize: AppFontSize.FONT_SIZE_16,
      marginBottom: AppDimension.SPACING_X_15,
      color: AppColor.black,
      textAlign:'center'  
    },
  });
  