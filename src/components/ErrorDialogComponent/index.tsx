import React from 'react';
import { Text, View } from 'react-native';
import AppSvgIcon, { SVGName } from '../../app-res/AppSvgIcon';
import { styles } from './style';

type ErrorDialogComponentProps  = {
  icon: SVGName;
  title: string;
  description: string;
}

const ErrorDialogComponent = ({ icon, title, description} : ErrorDialogComponentProps) => {
  return (
    
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
        {AppSvgIcon(
            icon
          )} 
          <Text style={styles.modalHead}>{title}</Text>
          <Text style={styles.modalText}>{description}</Text>
        </View>
      </View>
    
  );
};



export default ErrorDialogComponent;
