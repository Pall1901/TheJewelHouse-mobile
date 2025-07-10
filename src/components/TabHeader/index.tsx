import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

type HeaderProps = {
  name: string;
};
const TabHeader = (props: HeaderProps) => {
  
  return (
    <View style={styles.mainRow} >
      <Text style={styles.textGreen}>{props.name}</Text>
    </View>
  );
};

export default TabHeader;


