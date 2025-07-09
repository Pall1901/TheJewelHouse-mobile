import PropTypes from 'prop-types';
import React from 'react';
import {View, StatusBar, Platform} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const GeneralStatusBarColor = ({backgroundColor, ...props}) => {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? statusBarHeight : 0;

  return (
    <View style={[{height: STATUSBAR_HEIGHT}, {backgroundColor}]}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
};
export default GeneralStatusBarColor;

// Define prop types
GeneralStatusBarColor.propTypes = {
  backgroundColor: PropTypes.string,
};

