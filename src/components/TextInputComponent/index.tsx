import React, { useState } from 'react';
import {
  Animated,
  Pressable,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View
} from 'react-native';
import MaskInput from 'react-native-mask-input';
import AppColor from '../../app-res/AppColor';
import AppDimension from '../../app-res/AppDimension';
import AppFontSize from '../../app-res/AppFontSize';
import Icon, { Icons } from '../Icon/Icons';
import { styles } from './styles';

interface BaseInputprops {
  wrapperStyle?: any;  
  title?: string;  
  iconVisible?: string;
  onPress?(): void,
  onChangeText?: (e: string) => void;
  keyboardType?:
  | 'number-pad'
  | 'default'
  | 'numeric'
  | 'email-address'
  | 'visible-password';
  flag?: boolean;
  contextMenuHidden?: boolean;
  iconType?: any;
  children?:
  | boolean
  | React.ReactChild
  | React.ReactFragment
  | React.ReactPortal
  | null
  | undefined;
  screen?: string;
  maxLength?: number;
  onBlur:any;
}

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const TextInputComponent = ({
  value,
  onChangeText,
  wrapperStyle,
  title = '',
  keyboardType,
  secureTextEntry,
  iconVisible = '',
  editable,
  flag,
  onPress,
  children,
  contextMenuHidden,
  iconType,
  screen = '',
  maxLength,
  onBlur
}: TextInputProps & BaseInputprops) => {
  const [passwordVisible, setPasswordVisible] = useState(secureTextEntry);
  const [isFocused, setIsFocused] = useState(false);

  const animatedValue = new Animated.Value(isFocused || value !== '' ? 1 : 0);

  // const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [AppDimension.SPACING_Y_16, 0],
  });


  const labelStyle = {
    position: 'absolute',
    left: AppDimension.SPACING_X_10,
    top: translateY,
    fontSize: isFocused || value !== '' ? AppFontSize.FONT_SIZE_15 : AppFontSize.FONT_SIZE_18,
    color: AppColor.generalGrey,
  };



  return (
    <View style={[{ marginBottom: AppDimension.SPACING_Y_20 }, wrapperStyle]}>
      <View style={[styles.container, flag && styles.textMargin]}>

        <Animated.Text style={labelStyle}>{title}</Animated.Text>

        <View
          style={[
            styles.textInput,
            flag && styles.textInput1,
            {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            },
          ]}>
          {keyboardType == "number-pad" ?
            <MaskInput
              accessible={true}
              
              accessibilityLabel={`${screen}-textInput-${title?.replaceAll(/\s/g, '')}`}
              value={value}
              style={{ flex: 1, color: AppColor.black }}
              keyboardType={"number-pad"}
              secureTextEntry={passwordVisible}
              editable={editable}
              contextMenuHidden={contextMenuHidden}
              onFocus={onBlur}
              onBlur={onBlur}
              returnKeyType='done'
              onChangeText={(masked, unmasked) => {
                onChangeText && onChangeText(unmasked);
              }}
              ///\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/
              mask={[...Array(maxLength ?? 10)].map((_, indx: number) => /\d/)}
              placeholderFillCharacter=""
            />
            :
            <AnimatedTextInput
              accessible={true}
              accessibilityLabel={`${screen}-textInput-${title?.replaceAll(/\s/g, '')}`}
              value={value}
              style={{ flex: 1, color: AppColor.black }}
              onChangeText={onChangeText}
              keyboardType={keyboardType ?? 'default'}
              secureTextEntry={passwordVisible}
              editable={editable}
              contextMenuHidden={contextMenuHidden}
              onFocus={onBlur}
              onBlur={onBlur}
              maxLength={maxLength}
            />

          }
        </View>

        {iconVisible != '' ? (
          <Pressable
            accessible={true}
            accessibilityLabel={`${screen}-icon-${iconType}`}
            onPress={onPress}>
            <Icon type={iconType} size={25} name={iconVisible} color={AppColor.primaryGreen} />
          </Pressable>


        ) : null}
        {secureTextEntry ? (
          <TouchableOpacity
            accessible={true}
            onPress={() => {
              setPasswordVisible(!passwordVisible);
            }}>
            <Icon
              size={25}
              color={AppColor.primaryGreen}
              name={passwordVisible ? 'eye' : 'eye-with-line'}
              type={Icons.Entypo}
            />
          </TouchableOpacity>
        ) : null}
      </View>
      {children}
    </View>
  );
};

export default TextInputComponent;


