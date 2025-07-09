import { StyleSheet } from 'react-native';
import AppColor from '../../app-res/AppColor';
import AppDimension from '../../app-res/AppDimension';
import AppFontFamily from '../../app-res/AppFontFamily';
import AppFontSize from '../../app-res/AppFontSize';
import globalStyles from '../../theme/globalStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  view: {
    paddingHorizontal: AppDimension.SPACING_X_20,
    paddingVertical: AppDimension.SPACING_X_30,
    marginHorizontal: AppDimension.SPACING_X_20,
    borderRadius: AppDimension.SPACING_X_10,
    borderColor: AppColor.greyLight,
    justifyContent: 'center',
    alignContent: 'center',
    borderWidth: 1,
    backgroundColor: AppColor.bgprimary,
    zIndex: 5,
    elevation: 5,
    shadowColor: AppColor.generalGrey,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  imagenpcl: {
    height: AppDimension.SPACING_Y_40,
    flex: 1
  },
  imagerr: {
    height: AppDimension.SPACING_Y_55,
    flex: 1
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: AppDimension.SPACING_Y_50,
    height: AppDimension.SPACING_Y_200,
    width: AppDimension.SPACING_X_300,
    resizeMode: 'contain',
  },
  imageOct: {
    height: AppDimension.SPACING_Y_50,
    width: AppDimension.SPACING_X_150,
  },
  forgotPasswordButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: AppDimension.SPACING_X_05,
  },
  imageBottom: {
    height: AppDimension.SPACING_Y_140,
    width: AppDimension.DEVICE_WIDTH - 30,
    alignSelf: 'center',
    bottom: -AppDimension.SPACING_Y_03
  },
  viewBottom: {
    backgroundColor: AppColor.calenderBoxGreen,
    width: AppDimension.DEVICE_WIDTH,
    height: AppDimension.SPACING_Y_20
  },
  loginButton: {
    alignItems: 'center'
  },
  textSignup: {
    color: AppColor.primaryRed,
    fontSize: AppFontSize.FONT_SIZE_16,
    fontFamily: AppFontFamily.ManropeBold,
    alignItems: 'center'
  },
  signupView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textGreen: {
    color: AppColor.primaryGreen,
    fontSize: AppFontSize.FONT_SIZE_20,
    fontFamily: AppFontFamily.ManropeExtraBold,
   
    textAlign: 'center',
    marginBottom: AppDimension.SPACING_Y_20
  },
  textDescription: {
    color: AppColor.black,
    fontSize: AppFontSize.FONT_SIZE_16,
    fontFamily: AppFontFamily.ManropeBold,
  },
  textAssociation: {
    color: AppColor.black,
    fontSize: AppFontSize.FONT_SIZE_16,
    fontFamily: AppFontFamily.ManropeBold,
  },
  textLight: {
    color: AppColor.greyIcon,
    fontSize: AppFontSize.FONT_SIZE_12,
    fontFamily: AppFontFamily.ManropeRegular,
    textAlign: 'center',
    marginTop: AppDimension.SPACING_Y_05
  },
  textPassword: {
    ...globalStyles.fontBold,
    fontSize: AppFontSize.FONT_SIZE_16,
    color: AppColor.primaryRed
  }

});
