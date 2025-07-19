import React from 'react';

import { Pressable, Text, View } from 'react-native';
import AppColor from '../../app-res/AppColor';
import AppDimension from '../../app-res/AppDimension';
import AppSvgIcon from '../../app-res/AppSvgIcon';
import { styles } from './styles';
import PropTypes from 'prop-types';

const icons = {
  DASHBOARD: 'home',
  QUOTATION: 'portfolio',
  ORDERS: 'orders',
  PROFILE: 'profile'
};

const label = {
  DASHBOARD: 'Dashboard',
  QUOTATION: 'Quotation',
  ORDERS: 'Orders',
  PROFILE: 'Profile'

};


const TabBarItem = ({ state, navigation }) => {
  return (

    <View style={styles.mainContainer}>
      {state.routes.map((route, index) => {
        const title = label[route.name];

        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });
          
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <View
            key={`TabItem${route.name}`}
            style={[
              styles.mainItemContainer,
            ]}>
            <Pressable onPress={onPress} style={{}}>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <View style={[styles.viewImagContainer, {
                  borderColor: isFocused ? AppColor.primary : 'transparent',
                }]}>
                  {AppSvgIcon(
                    icons[route.name],
                    isFocused ? AppColor.primary : AppColor.greyIcon,
                    null,
                    AppDimension.SPACING_X_26,
                    AppDimension.SPACING_X_26
                  )}
                </View>
                <Text
                  style={styles.textLabel}>
                  {title}
                </Text>
              </View>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
};

export default TabBarItem;

// Define prop types
TabBarItem.propTypes = {
  state: PropTypes.any,
  navigation: PropTypes.any
};

