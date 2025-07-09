import React, { memo } from 'react';
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import AppColor from '../../app-res/AppColor';
import AppDimension from '../../app-res/AppDimension';
import AppSvgIcon, { SVGName } from '../../app-res/AppSvgIcon';
import { styles } from './styles';
interface BaseInputprops {
  title: String;
  showIcon?: SVGName;
  onPress?: () => void;
  style?: any;
  textStyle?: any;
  screen?: string;
  width?: any,
  disabled?:boolean
}

const ButtonComponent = ({
  onPress,
  title,
  showIcon,
  style,
  textStyle,
  screen = '',
  width = AppDimension.SPACING_X_25,
  disabled = false
}: BaseInputprops) => {
  const testID = `${screen}-button-${title.replaceAll(/\s/g, '')}`
  
  return (
    <TouchableOpacity
      accessible={true}
      testID={testID}
      accessibilityLabel={testID}
      disabled={disabled}
      onPress={onPress}>
      <View
        style={[styles.button, style, disabled && {backgroundColor:AppColor.greyLight}]}>
        <Text style={[styles.text, textStyle]}>{title}</Text>
        {showIcon
          ? AppSvgIcon(
              showIcon,
              AppColor.white,
              null,
              width,
              width,
            )
          : null}
      </View>
    </TouchableOpacity>
  );
};

export default memo(ButtonComponent);

