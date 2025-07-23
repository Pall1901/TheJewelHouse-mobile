import { StyleSheet } from 'react-native';
import AppFontSize from '../../app-res/AppFontSize';
import AppDimension from '../../app-res/AppDimension';
import AppColor from '../../app-res/AppColor';
import AppFontFamily from '../../app-res/AppFontFamily';
import globalStyles from '../../theme/globalStyles';

export const styles = StyleSheet.create({
 type: {
    ...globalStyles.fontExtraBold,
    color: AppColor.primary,
    paddingHorizontal: AppDimension.SPACING_X_10,
    paddingVertical: AppDimension.SPACING_Y_05,
    fontSize: AppFontSize.FONT_SIZE_18,
    textTransform: 'uppercase'
  },
  view: {
    flex:1,
    width: '100%',
    marginTop: AppDimension.SPACING_Y_04,
    paddingHorizontal: AppDimension.SPACING_X_10,
  },
  errorView: {
        flex: 1, justifyContent: 'center', alignItems: 'center', padding:20
    },
});
