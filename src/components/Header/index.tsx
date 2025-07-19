import React from 'react';
import { Pressable, Text, View } from 'react-native';
import AppColor from '../../app-res/AppColor';
import AppDimension from '../../app-res/AppDimension';
import AppSvgIcon from '../../app-res/AppSvgIcon';
import { styles } from './styles';

type HeaderProps = {
  navigation: any;
  name: string;

};

const Header = (props: HeaderProps) => {
  return (
    <View style={styles.mainRow}>
      <Pressable onPress={() => {
        props.navigation.goBack()
      }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingBottom: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {AppSvgIcon(
              'arrow',
              AppColor.white,
              undefined,
              AppDimension.SPACING_X_20,
              AppDimension.SPACING_Y_20,
            )}
            <Text style={styles.textGreen}>{props.name}</Text>
          </View>

        </View>
      </Pressable>
    </View>

  );
};

export default Header;

