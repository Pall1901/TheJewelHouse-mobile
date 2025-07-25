import { StyleSheet } from 'react-native';
import AppColor from '../../app-res/AppColor';
import AppDimension from '../../app-res/AppDimension';

export const styles = StyleSheet.create({

  loginButton: {
    alignItems: 'center',
    
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  calendarView: {
    backgroundColor: AppColor.white,
    borderRadius: AppDimension.SPACING_X_10,
    padding: AppDimension.SPACING_X_20,
    width: '90%'
  }

});
