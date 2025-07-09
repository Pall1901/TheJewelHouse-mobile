import { Platform, StyleSheet } from "react-native";
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
    borderWidth: 1,
    borderColor: AppColor.primary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingEnd: AppDimension.SPACING_X_10
  },
  labelContainer: {
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: AppColor.white,
    top: -AppDimension.SPACING_X_20,
    left: AppDimension.SPACING_X_10,
    padding: AppDimension.SPACING_X_05,
    zIndex: AppDimension.SPACING_Y_50,
  },
  textInput: {
    flex: 1,
    marginTop: AppDimension.SPACING_Y_10,
    justifyContent: 'flex-end',
    height: AppDimension.SPACING_Y_50,
    borderRadius: AppDimension.SPACING_X_10,
    color: AppColor.grey,
    paddingStart: Platform.OS === 'ios' ? AppDimension.SPACING_X_10 : AppDimension.SPACING_X_05,
    paddingEnd: AppDimension.SPACING_X_10,
  },
  titleText: {
    color: AppColor.primaryGreen,
    fontSize: AppFontSize.FONT_SIZE_14,
    fontFamily: AppFontFamily.ManropeBold,
  },
  textInput1: {
    color: AppColor.primaryGreen,
    height: AppDimension.SPACING_Y_100,
    borderRadius: AppDimension.SPACING_X_20,
  },
  textMargin: {
    height: AppDimension.SPACING_Y_100,
    marginTop: AppDimension.SPACING_Y_20,
  },
});