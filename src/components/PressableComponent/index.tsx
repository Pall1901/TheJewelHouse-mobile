import React from 'react';
import { Pressable } from 'react-native';
import AppColor from '../../app-res/AppColor';

interface BackgroundViewComponentProps{
    children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined;
    onPress: any;
    screen : string;
    button : string;
    disabled?:boolean
 }

const PressableComponent = ({children,onPress,screen,button,disabled = false}:BackgroundViewComponentProps) => {
  const testID=`${screen}-button-${button.replaceAll(' ','')}`
  return (
    <Pressable
    accessible={true}
    testID={testID}
    disabled={disabled}
    accessibilityLabel={testID}
    style={[disabled && {backgroundColor:AppColor.greyLight}]}
    onPress={() => onPress()}>
        {children}
  </Pressable>
  )
}

export default PressableComponent
