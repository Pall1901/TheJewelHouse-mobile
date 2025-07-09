/*
 * globalStyles (Object)
 * Description : Object containing some styles used repeatedly
 * throughout the application
 */

// Imports
import {StyleSheet, Platform} from 'react-native';
import AppColor from '../app-res/AppColor';
import AppDimension from '../app-res/AppDimension';
import AppFontFamily from '../app-res/AppFontFamily';
import AppFontSize from '../app-res/AppFontSize';

/************************************************
 *
 * OBJECT
 *
 ************************************************/
const globalStyles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 10,
    },
    shadowRadius: 3,
    shadowOpacity: 0.5,
    elevation: 3,
  },
  mainContainer: {
    flex: 1, 
    backgroundColor: AppColor.white,
  },
  textExtraBold: {
    color: AppColor.white,
    fontSize: AppFontSize.FONT_SIZE_22,
    fontFamily: AppFontFamily.ManropeExtraBold,
  },
  textBold: {
    color: AppColor.white,
    fontSize: AppFontSize.FONT_SIZE_24,
    fontFamily: AppFontFamily.ManropeBold,
  },
  textBlack: {
    color: AppColor.black,
    fontSize: AppFontSize.FONT_SIZE_15,
    fontFamily: AppFontFamily.ManropeBold,
  },
  textGrey: {
    color: AppColor.grey1,
    fontSize: AppFontSize.FONT_SIZE_14,
    fontFamily: AppFontFamily.ManropeRegular,
  },
  errorText: {
    fontSize: AppFontSize.FONT_SIZE_14,
    color: 'red',
    fontFamily: AppFontFamily.ManropeBold,
    marginLeft: AppDimension.SPACING_X_10,
  },
  fontRegular:{
    fontFamily: AppFontFamily.ManropeRegular,
  },
  fontBold:{
    fontFamily: AppFontFamily.ManropeBold,
  },
  fontExtraBold:{
    fontFamily: AppFontFamily.ManropeExtraBold,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional, for semi-transparent background
    position: 'absolute',
    width: AppDimension.DEVICE_WIDTH,
    height: AppDimension.DEVICE_HEIGHT,
  },
  cardContainer: {
    marginHorizontal: 10,
    backgroundColor: AppColor.white,
    borderRadius: AppDimension.SPACING_X_20,
    shadowColor: AppColor.black,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: Platform.OS ==='ios'?0.1: 0.5,
    shadowRadius: AppDimension.SPACING_X_20,
    elevation: AppDimension.SPACING_X_05,
    marginTop: AppDimension.SPACING_X_20,
    paddingVertical: AppDimension.SPACING_X_20,
  }
});

// Export Object
export default globalStyles;
