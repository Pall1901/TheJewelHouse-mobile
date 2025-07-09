import { View} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { AuthStackNavigator, MainStackNavigator } from './StackNavigator';
import FlashMessage from 'react-native-flash-message';
import AppColor from '../app-res/AppColor';
import {  useSelector } from 'react-redux';
import { ScreenName } from '../utils/enums';


const NavigationContainerComponent = () => {

  const backgroundStyle = {
    backgroundColor: AppColor.blackDark,
  };

  const { user } = useSelector((state: any) => state.UserReducer);
  console.log('NavigationContainerComponent user:', user);

  return (

    <NavigationContainer>
      <View style={{ flex: 1, ...backgroundStyle }}>
        {user == null && (<AuthStackNavigator initialRouteName={ScreenName.LOGIN_SCREEN} />)}
        {user && user._id && (<MainStackNavigator initialRouteName={ScreenName.HOME_SCREEN} />)}
        <FlashMessage position="bottom" animated={true} />
      </View>
    </NavigationContainer> 
  )

}

export default NavigationContainerComponent
