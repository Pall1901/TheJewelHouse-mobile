import { StyleSheet } from "react-native";
import AppFontSize from "../../app-res/AppFontSize";
import AppDimension from "../../app-res/AppDimension";
import AppColor from "../../app-res/AppColor";
import AppFontFamily from "../../app-res/AppFontFamily";

export const styles = StyleSheet.create({
  margin: {
    marginHorizontal: AppDimension.SPACING_X_15,
  },
  logout : {
    width : 200, 
    alignSelf:'center'
  },
  centerView: {
    alignItems: 'center'
  },
  infoView: {
    alignItems: 'flex-start',
    padding: AppDimension.SPACING_X_20
  },
  rowView: {
    flexDirection: 'row',
  },
  horizontalView: {
    flexDirection: 'row', 
  },
  text: {
    textTransform: 'capitalize',
    marginLeft: AppDimension.SPACING_X_05,
  },
  width: {
    width: '100%'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  colorGreen : {color:AppColor.green},

  headerLabel: {
    fontSize: AppFontSize.FONT_SIZE_16,
    fontFamily: AppFontFamily.ManropeBold,
    color: AppColor.black
  },
  headerLabelText1: {
    fontSize: AppFontSize.FONT_SIZE_16,
    fontFamily: AppFontFamily.ManropeRegular,
    color: AppColor.black,
    marginLeft: AppDimension.SPACING_X_10,
    textAlignVertical:'center',
  },
  headerLabel1: {
    fontSize: AppFontSize.FONT_SIZE_14,
    fontFamily: AppFontFamily.ManropeBold,
    color: AppColor.black,
    marginLeft: AppDimension.SPACING_X_10,
    textAlignVertical:'center',
  },
  marginBotton: {
    marginBottom: AppDimension.SPACING_X_10
  },
  textStyle: {
    marginRight: 10,
    fontSize: AppFontSize.FONT_SIZE_12
  },

  profileNameBg: {
    marginTop: AppDimension.SPACING_Y_10,
    width: AppDimension.SPACING_X_80,
    height: AppDimension.SPACING_X_80,
    borderRadius: AppDimension.SPACING_X_40,
    backgroundColor: AppColor.primary,
    alignItems: 'center',
    flexDirection: 'row',
  },
  profileNameText: {
    color: AppColor.white,
    fontFamily: AppFontFamily.ManropeExtraBold,
    fontSize: AppFontSize.FONT_SIZE_32,
    textAlign: 'center',
    width: '100%',
  },
  card: {
    backgroundColor: AppColor.primary,
    marginTop: AppDimension.SPACING_Y_10,
    marginBottom: AppDimension.SPACING_Y_05,
    padding: AppDimension.SPACING_X_16,

  },
  card1: {
    padding: AppDimension.SPACING_X_20,
    marginHorizontal: AppDimension.SPACING_X_10,
    elevation: 5,
    shadowColor: AppColor.greyIcon,
    shadowRadius: 2,
    width: '100%',
    backgroundColor: AppColor.white,
    marginBottom: AppDimension.SPACING_Y_10,
    borderRadius: AppDimension.SPACING_X_10,
    borderColor: AppColor.primary,
    borderWidth:1,
    alignSelf: 'center',
  },
  title: {
    fontSize: AppFontSize.FONT_SIZE_18,
    fontFamily: AppFontFamily.ManropeExtraBold,
    marginVertical: AppDimension.SPACING_X_10,
    color: AppColor.grey2,
    width: '100%',
  },
  value: {
    color: AppColor.greyText,
    fontSize: AppFontSize.FONT_SIZE_14,
    fontFamily: AppFontFamily.ManropeRegular,
    textAlign: 'right',
    flex:1
    //width: '70%'
  },
  buildLabel:{
    fontFamily:AppFontFamily.ManropeRegular,
    fontSize:AppFontSize.FONT_SIZE_10,
    position:'absolute',
    left:10,
    color:AppColor.white
  },
  cardMargin:{ 
    marginVertical: AppDimension.SPACING_Y_08 
  },
});