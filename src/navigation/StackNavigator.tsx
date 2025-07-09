import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import AppColor from '../app-res/AppColor';
import { ScreenName, TabScreen } from '../utils/enums';
import { RootStackParamList } from './RootStackParamList';
import TabBarItem from './TabBarItem/TabBarItem';
import HomeScreen from '../screens/HomeScreen';
import DashboardScreen from '../screens/DashboardScreen';
import QuotationScreen from '../screens/QuotationScreen';
import HistoryScreen from '../screens/HistoryScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const screenOptionStyleNoHeader = {
  headerStyle: {
    backgroundColor: '#082466',
  },
  headerTintColor: AppColor.white,
  headerBackTitle: 'Back',
  headerShown: false,
};

const MainStackNavigator = ({
  initialRouteName,
}: {
  initialRouteName: keyof RootStackParamList;
}) => {

  return (
    <Stack.Navigator
      screenOptions={screenOptionStyleNoHeader}
      initialRouteName={initialRouteName}>

      <Stack.Screen
        name={ScreenName.HOME_SCREEN}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};


const AuthStackNavigator = ({
  initialRouteName,
}: {
  initialRouteName: keyof RootStackParamList;
}) => {
  console.log('AuthStackNavigator initialRouteName:', initialRouteName);
  
  return (
    <Stack.Navigator
      screenOptions={screenOptionStyleNoHeader}
      initialRouteName={initialRouteName}>

      <Stack.Screen
        name={ScreenName.LOGIN_SCREEN}
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ScreenName.HOME_SCREEN}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const TabArr = [
  { route: TabScreen.DASHBOARD, title: 'Dashboard', component: DashboardScreen },
  { route: TabScreen.QUOTATION, title: 'Quotation', component: QuotationScreen },
  { route: TabScreen.HISTORY, title: 'History', component: HistoryScreen },
  { route: TabScreen.PROFILE, title: 'Profile', component: ProfileScreen },
];

const BottomTabs = () => {
  return (
    <View
      style={{
        justifyContent: 'flex-end',
        flex: 1,
        backgroundColor: AppColor.white,
        overflow: 'hidden'
      }}>
      <Tab.Navigator
        initialRouteName={TabScreen.DASHBOARD}
        tabBar={props => <TabBarItem {...props} />}>
        {TabArr.length > 0 &&
          TabArr.map((item, index) => {
            return (
              <Tab.Screen
                key={index}
                name={item.route}
                component={item.component}
                options={{
                  headerShown: false,
                }}
              />
            );
          })}
      </Tab.Navigator>
    </View>
  );
};

export { AuthStackNavigator, BottomTabs, MainStackNavigator };
