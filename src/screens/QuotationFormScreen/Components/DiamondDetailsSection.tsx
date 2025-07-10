import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DiamondDetails } from '../../../utils/types';
import globalStyles from '../../../theme/globalStyles';
import Header from '../../../components/Header';
import { useNavigation } from '@react-navigation/native';

interface Props {
  data: DiamondDetails[];
  onChange: (data: DiamondDetails[]) => void;
  onNext: () => void;
}



const DiamondDetailsSection: React.FC<Props> = ({ data, onChange, onNext }) => {
  const navigation = useNavigation();
  return (
     <View style={[globalStyles.mainContainer]}>
      <Header name={'Diamond Details'} navigation={navigation}/>
      <Text>DiamondDetailsSection</Text>
    </View>
  )
}

export default DiamondDetailsSection

