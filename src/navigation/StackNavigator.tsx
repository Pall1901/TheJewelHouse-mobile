import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import AppColor from '../app-res/AppColor';
import { ScreenName, TabScreen } from '../utils/enums';
import { RootStackParamList } from './RootStackParamList';
import TabBarItem from './TabBarItem/TabBarItem';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen/DashboardScreen';
import QuotationScreen from '../screens/QuotationScreen/QuotationScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import OrdersScreen from '../screens/OrdersScreen/OrdersScreen';
import QuotationFormScreen from '../screens/QuotationFormScreen/QuotationFormScreen';
import OrderFormScreen from '../screens/OrderFormScreen/OrderFormScreen';
import OrdersFormScreen from '../screens/OrdersFormScreen/OrdersFormScreen';

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
      <Stack.Screen
        name={ScreenName.QUOTATION_FORM_SCREEN}
        component={QuotationFormScreen}
        options={{ headerShown: false }} />
      <Stack.Screen
        name={ScreenName.ORDERS_FORM_SCREEN}
        component={OrdersFormScreen}
        options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};


const AuthStackNavigator = ({
  initialRouteName,
}: {
  initialRouteName: keyof RootStackParamList;
}) => {

  return (
    <Stack.Navigator
      screenOptions={screenOptionStyleNoHeader}
      initialRouteName={initialRouteName}>

      <Stack.Screen
        name={ScreenName.LOGIN_SCREEN}
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name={ScreenName.HOME_SCREEN}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ScreenName.QUOTATION_FORM_SCREEN}
        component={QuotationFormScreen}
        options={{ headerShown: false }}/> */}
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const TabArr = [
  { route: TabScreen.DASHBOARD, title: 'Dashboard', component: DashboardScreen },
  { route: TabScreen.QUOTATION, title: 'Quotation', component: QuotationScreen },
  { route: TabScreen.ORDERS, title: 'Orders', component: OrdersScreen },
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
