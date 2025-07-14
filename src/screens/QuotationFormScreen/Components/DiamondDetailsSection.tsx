import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { DiamondDetails } from '../../../utils/types';
import globalStyles from '../../../theme/globalStyles';
import Header from '../../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles';
import AppFontSize from '../../../app-res/AppFontSize';
import AppDimension from '../../../app-res/AppDimension';
import CustomDropdown from '../../../components/CustomDropdown/CustomDropdown';

interface Props {
  data: DiamondDetails[];
  onChange: (data: DiamondDetails[]) => void;
  onNext: () => void;
}


const items = [
 {
    value: 'pear',
    name: 'Pear',
  },
  {
    value: 'marquise',
    name: 'Marquise',
  },
  {
    value: 'emerald',
    name: 'Emerald',
  },
  {
    value: 'heart',
    name: 'Heart',
  },
   {
    value: 'pear',
    name: 'Pear',
  },
  {
    value: 'marquise',
    name: 'Marquise',
  },
  {
    value: 'emerald',
    name: 'Emerald',
  },
  {
    value: 'heart',
    name: 'Heart',
  },
   {
    value: 'pear',
    name: 'Pear',
  },
  {
    value: 'marquise',
    name: 'Marquise',
  },
  {
    value: 'emerald',
    name: 'Emerald',
  },
  {
    value: 'heart',
    name: 'Heart',
  },
   {
    value: 'pear',
    name: 'Pear',
  },
  {
    value: 'marquise',
    name: 'Marquise',
  },
  {
    value: 'emerald',
    name: 'Emerald',
  },
  {
    value: 'heart',
    name: 'Heart',
  },
];


const DiamondDetailsSection: React.FC<Props> = ({ data, onChange, onNext }) => {
  const navigation = useNavigation();

  const [selectedItem, setSelectedItem] = useState<any>(null);
  const setShapesValue = (value: any) => {
    console.log('value', value);

    //setOpenShapesActinList(false);
  }


  return (
    <View style={[globalStyles.mainContainer]}>
      <Header name={'Diamond Details'} navigation={navigation} />
      <ScrollView style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 8, marginBottom: 16 }}>
        <Text style={{ ...styles.text, fontSize: AppFontSize.FONT_SIZE_20 }}>Centerpiece DIamond</Text>

        <CustomDropdown
          placeholder="Choose an option"
          actionItems={items}
          onSelect={item => setSelectedItem(item)}
          selectedValue={selectedItem}
        />


      </ScrollView>
    </View>
  )
}

export default DiamondDetailsSection

