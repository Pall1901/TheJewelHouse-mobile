import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';

interface RadioButtonProps {
  options: Array<{ value: string; name: string }>; 
  label: string;
  selected: string;
  setSelected: (value: any) => void;
}

const RadioButton = ({ options, label, selected, setSelected, }: RadioButtonProps) => {
  return (
    <View style={styles.view}>
      <Text style={styles.header}>{label}</Text>

      <View style={{ flexDirection: 'row',alignItems:'center',flex:2 }}>

        {options.map(item => (
          <Pressable
            
            style={styles.pressable}
            key={item.value}
            onPress={() => setSelected(item.value)}>
            <View style={[styles.radioButton]}>
              {selected == item.value ? <View style={styles.radio} /> : <></>}
            </View>
            <Text style={styles.title}>{item.name}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default RadioButton;


