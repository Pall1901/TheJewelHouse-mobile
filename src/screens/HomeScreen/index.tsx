import React from 'react';
import { View } from 'react-native';
import { RootStackNavProps } from '../../navigation/RootStackParamList';
import { BottomTabs } from '../../navigation/StackNavigator';
import globalStyles from '../../theme/globalStyles';
import { ScreenName } from '../../utils/enums';

type HomeProps = RootStackNavProps<ScreenName.HOME_SCREEN>

const HomeScreen = (props: HomeProps) => {
  
  return (
    <View style={globalStyles.mainContainer}>
      <BottomTabs />
    </View>
  );
};

export default HomeScreen;
