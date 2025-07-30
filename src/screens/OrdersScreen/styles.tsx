import { StyleSheet } from 'react-native';
import AppDimension from '../../app-res/AppDimension';

export const styles = StyleSheet.create({
  view: {
    flex:1,
    width: '100%',
    marginTop: AppDimension.SPACING_Y_08,
    paddingHorizontal: AppDimension.SPACING_X_10,
  },
  errorView: {
        flex: 1, justifyContent: 'center', alignItems: 'center', padding:20
    },
});
