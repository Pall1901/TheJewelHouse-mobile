import { View } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { AuthStackNavigator, MainStackNavigator } from './StackNavigator';
import FlashMessage from 'react-native-flash-message';
import AppColor from '../app-res/AppColor';
import { ScreenName } from '../utils/enums';
import { useUser } from '../ayncStorage/UserContext';
import { useGoldRateAPI } from '../screens/QuotationFormScreen/Hook/useGoldRateAPI';


const NavigationContainerComponent = () => {

  const backgroundStyle = {
    backgroundColor: AppColor.blackDark,
  };
  const { user } = useUser();

  const { initializeData } = useGoldRateAPI();

  useEffect(() => {
    initializeData();
  }, []);

  return (

    <NavigationContainer>
      <View style={{ flex: 1, ...backgroundStyle }}>
        {user == null && (<AuthStackNavigator initialRouteName={ScreenName.LOGIN_SCREEN} />)}
        {user && user.id && (<MainStackNavigator initialRouteName={ScreenName.HOME_SCREEN} />)}
        <FlashMessage position="bottom" animated={true} />
      </View>
    </NavigationContainer>
  )

}

export default NavigationContainerComponent
