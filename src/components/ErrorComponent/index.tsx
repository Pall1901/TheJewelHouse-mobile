import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppFontSize from '../../app-res/AppFontSize'
import AppFontFamily from '../../app-res/AppFontFamily'
import AppDimension from '../../app-res/AppDimension'

type ErrorComponentProps = {
  errors: any;
  touched: any;
  fieldName: string;
  flag: boolean;
  screenName?:string
}

const ErrorComponent = ({ errors, touched, fieldName, flag,screenName }: ErrorComponentProps) => {

  return (
    <View style={{ top: flag ? -AppDimension.SPACING_Y_20 : 0 }} key={fieldName}>
      {
        errors[fieldName] && touched[fieldName] && (
          <Text testID={`${screenName}-errorText-${fieldName.replaceAll(/\s/g, '')}`} style={styles.errorText}>{flag ? errors[fieldName]?.name : errors[fieldName]}</Text>
        )
      }
    </View>
  )
}

export default ErrorComponent

const styles = StyleSheet.create({
  errorText: {
    fontSize: AppFontSize.FONT_SIZE_12,
    color: 'red',
    fontFamily: AppFontFamily.ManropeBold,
    marginLeft: AppDimension.SPACING_X_10,
  },
})