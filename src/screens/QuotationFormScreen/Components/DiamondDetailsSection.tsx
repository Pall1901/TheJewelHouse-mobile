import { ScrollView, Text, View } from 'react-native';
import React from 'react';
import { DiamondDetails } from '../../../utils/types';
import globalStyles from '../../../theme/globalStyles';
import Header from '../../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles';
import AppFontSize from '../../../app-res/AppFontSize';
import AppDimension from '../../../app-res/AppDimension';
import CustomDropdown from '../../../components/CustomDropdown/CustomDropdown';
import TextInputComponent from '../../../components/TextInputComponent';
import ButtonComponent from '../../../components/ButtonComponent';

interface Props {
  data: DiamondDetails[];
  onChange: (data: DiamondDetails[]) => void;
  onNext: () => void;
}

const shapes = [
  { value: 'pear', name: 'Pear' },
  { value: 'marquise', name: 'Marquise' },
  { value: 'emerald', name: 'Emerald' },
  { value: 'heart', name: 'Heart' },
];

const color = [
  { value: 'D', name: 'D' },
  { value: 'E', name: 'E' },
  { value: 'E-F', name: 'E-F' },
  { value: 'G', name: 'G' },
];

const clarity = [
  { value: 'VVS1', name: 'VVS1' },
  { value: 'VVS2', name: 'VVS2' },
  { value: 'VS1', name: 'VS1' },
  { value: 'VS2', name: 'VS2' },
];

const discount = Array.from({ length: 10 }, (_, i) => ({
  value: `${i + 1}`,
  name: `${i + 1}`,
}));

const DiamondDetailsSection: React.FC<Props> = ({ data, onChange, onNext }) => {
  const navigation = useNavigation();

  // Separate center and side diamonds
  const centerDiamonds = data.filter(d => d.type === 'center');
  const sideDiamonds = data.filter(d => d.type === 'side');

  const handleAddDiamond = (type: 'center' | 'side') => {
    const newDiamond: DiamondDetails = {
      type,
      shape: '',
      size: '',
      color: '',
      clarity: '',
      weight: '',
      ratePerCts: '',
      discount: '',
      totalAmount: '',
    };
    onChange([...data, newDiamond]);
  };

  const handleUpdateDiamond = (index: number, updated: DiamondDetails) => {
    const updatedDiamonds = [...data];
    updatedDiamonds[index] = updated;
    onChange(updatedDiamonds);
  };

  const renderDiamondBlock = (diamond: DiamondDetails, index: number, blockIndex: number, type: 'center' | 'side') => (
    <View
      key={blockIndex}
      style={styles.card}
    >
      <Text
        style={{
          fontSize: AppFontSize.FONT_SIZE_18,
          fontWeight: 'bold',
          marginBottom: 10,
          color: '#333',
        }}
      >
        {type === 'center'
          ? `Centerpiece Diamond ${blockIndex + 1}`
          : `Side Diamond ${blockIndex + 1}`}
      </Text>

      <View style={styles.row}>
        <CustomDropdown
          placeholder="Select Shape"
          actionItems={shapes}
          onSelect={item => handleUpdateDiamond(index, { ...diamond, shape: item.value })}
          selectedValue={shapes.find(item => item.value === diamond.shape)}
          wrapperStyle={{ marginRight: AppDimension.SPACING_X_10, flex: 0.5 }}
          title="Shape"
        />
        <CustomDropdown
          placeholder="Select Color"
          actionItems={color}
          onSelect={item => handleUpdateDiamond(index, { ...diamond, color: item.value })}
          selectedValue={color.find(item => item.value === diamond.color)}
          wrapperStyle={{ flex: 0.5 }}
          title="Color"
        />
      </View>

      <View style={styles.row}>
        <CustomDropdown
          placeholder="Select Clarity"
          actionItems={clarity}
          onSelect={item => handleUpdateDiamond(index, { ...diamond, clarity: item.value })}
          selectedValue={clarity.find(item => item.value === diamond.clarity)}
          wrapperStyle={{ marginRight: AppDimension.SPACING_X_10, flex: 0.5 }}
          title="Clarity"
        />
        <TextInputComponent
          title="Size (cts)"
          placeholder="Enter size"
          onChangeText={text => handleUpdateDiamond(index, { ...diamond, size: text })}
          value={diamond.size}
          keyboardType="numeric"
          wrapperStyle={{ flex: 0.5 }}
        />
      </View>

      <View style={styles.row}>
        <TextInputComponent
          title="Rate per cts"
          placeholder="Enter rate"
          onChangeText={text => handleUpdateDiamond(index, { ...diamond, ratePerCts: text })}
          value={"0"}
          keyboardType="numeric"
          flag={true}
          editable={false}
          wrapperStyle={{ flex: 0.5, marginRight: AppDimension.SPACING_X_10 }}
        />

        <CustomDropdown
          placeholder="Select Discount"
          actionItems={discount}
          onSelect={item => handleUpdateDiamond(index, { ...diamond, discount: item.value })}
          selectedValue={discount.find(item => item.value === diamond.discount)}
          wrapperStyle={{ flex: 0.5 }}
          title="Discount(%)"
        />
      </View>

      <View style={styles.totalPriceView}>
        <Text style={styles.text}>
          Total Diamond Cost
        </Text>
        <Text style={styles.text}>
          ₹{diamond.totalAmount || '0'}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={[globalStyles.mainContainer]}>
      <Header name={'Diamond Details'} navigation={navigation} />
      <ScrollView style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 8, marginBottom: 16 }}>

        {/* Center diamonds */}
        {centerDiamonds.map((diamond, blockIndex) => {
          const index = data.findIndex(d => d === diamond);
          return renderDiamondBlock(diamond, index, blockIndex, 'center');
        })}
        {centerDiamonds.length < 4 && (
          <ButtonComponent
            title="Add Another Diamond"
            onPress={() => handleAddDiamond('center')}
            style={{ width: 250, alignSelf: 'center' }}
            textStyle={{ textAlign: 'center', fontSize: AppFontSize.FONT_SIZE_16 }}
          />
        )}

        <View style={{ marginVertical: 20 }} />

        {/* Side diamonds */}
        {sideDiamonds.map((diamond, blockIndex) => {
          const index = data.findIndex(d => d === diamond);
          return renderDiamondBlock(diamond, index, blockIndex, 'side');
        })}
        {sideDiamonds.length < 4 && (
          <ButtonComponent
            title="Add Another Diamond"
            onPress={() => handleAddDiamond('side')}
            style={{ width: 250, alignSelf: 'center' }}
            textStyle={{ textAlign: 'center', fontSize: AppFontSize.FONT_SIZE_16 }}
          />
        )}

        <View style={{ marginVertical: 20 }} />
        <ButtonComponent title="Next" onPress={onNext} />
      </ScrollView>
    </View>
  );
};

export default DiamondDetailsSection;



