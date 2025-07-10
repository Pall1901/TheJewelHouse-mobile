import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { ScreenName } from '../utils/enums';

export type RootStackParamList = {
  [ScreenName.HOME_SCREEN]: undefined;
  [ScreenName.LOGIN_SCREEN]: undefined;
  [ScreenName.QUOTATION_FORM_SCREEN]: undefined;
};


export type RootStackNavProps<T extends keyof RootStackParamList> = {
  navigation: NativeStackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
};
