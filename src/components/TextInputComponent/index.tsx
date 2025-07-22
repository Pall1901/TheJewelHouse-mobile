import React, { useState } from 'react';
import {
  Animated,
  Pressable,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View
} from 'react-native';
import MaskInput from 'react-native-mask-input';
import AppColor from '../../app-res/AppColor';
import AppDimension from '../../app-res/AppDimension';
import AppFontSize from '../../app-res/AppFontSize';
import { tID } from '../../utils/Helper';
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
  maxLength?: number
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
  placeholder,
  
}: TextInputProps & BaseInputprops) => {
  const [passwordVisible, setPasswordVisible] = useState(secureTextEntry);
  const [isFocused, setIsFocused] = useState(false);

  const animatedValue = new Animated.Value(isFocused || value !== '' ? 1 : 0);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [AppDimension.SPACING_Y_15, 0],
  });


  const labelStyle = {
    position: 'absolute',
    left: AppDimension.SPACING_X_10,
    top: translateY,
    fontSize: isFocused || value !== '' ? AppFontSize.FONT_SIZE_15 : AppFontSize.FONT_SIZE_18,
    color: AppColor.generalGrey,
  };

  return (
    <View style={[{ marginBottom: AppDimension.SPACING_Y_10 }, wrapperStyle]}>
       <Text style={styles.title}>{title}</Text>
      <View style={[styles.container, flag && styles.textMargin]}>

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
              testID={tID(`${screen}-textInput-${title?.replaceAll(/\s/g, '')}`)}
              accessibilityLabel={`${screen}-textInput-${title?.replaceAll(/\s/g, '')}`}
              value={value}
              style={{ flex: 1, color: AppColor.black }}
              keyboardType={keyboardType || 'default'}
              secureTextEntry={passwordVisible}
              editable={editable}
              placeholder={placeholder}
              placeholderTextColor={AppColor.greyLight}
              contextMenuHidden={contextMenuHidden}
              onFocus={handleFocus}
              onBlur={handleBlur}
              returnKeyType='done'
              onChangeText={(masked, unmasked) => {
                onChangeText && onChangeText(unmasked);
              }}
              mask={[...Array(maxLength ?? 10)].map((_, indx: number) => /\d/)}
              placeholderFillCharacter=""
            />
            :
            <TextInput
              accessible={true}
              testID={tID(`${screen}-textInput-${title?.replaceAll(/\s/g, '')}`)}
              accessibilityLabel={`${screen}-textInput-${title?.replaceAll(/\s/g, '')}`}
              value={value}
              placeholder={placeholder}
              placeholderTextColor={AppColor.greyLight}
              style={{ flex: 1, color: AppColor.black }}
              onChangeText={onChangeText}
              keyboardType={keyboardType || 'default'}
              secureTextEntry={passwordVisible}
              editable={editable}
              contextMenuHidden={contextMenuHidden}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />

          }
        </View>

        {iconVisible != '' ? (
          <Pressable
            accessible={true}
            testID={tID(`${screen}-icon-${iconType}`)}
            accessibilityLabel={`${screen}-icon-${iconType}`}
            onPress={onPress}>
            <Icon type={iconType} size={25} name={iconVisible} color={AppColor.grey2} />
          </Pressable>


        ) : null}
        {secureTextEntry ? (
          <TouchableOpacity
            accessible={true}
            testID={tID(`${screen}-icon-password`)}
            accessibilityLabel={`${screen}-icon-password`}
            onPress={() => {
              setPasswordVisible(!passwordVisible);
            }}>
            <Icon
              size={25}
              color={AppColor.grey2}
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


