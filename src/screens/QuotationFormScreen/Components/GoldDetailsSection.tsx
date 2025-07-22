import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import ButtonComponent from '../../../components/ButtonComponent';
import Header from '../../../components/Header';
import RadioButton from '../../../components/RadioButton';
import TextInputComponent from '../../../components/TextInputComponent';
import globalStyles from '../../../theme/globalStyles';
import { GoldColor, GoldPurity } from '../../../utils/enums';
import { GoldDetails } from '../../../utils/types';
import { styles } from '../styles';
import GoldColorSelector from './GoldColorSelector';
import { useGoldRateAPI } from '../Hook/useGoldRateAPI';
import { useUser } from '../../../ayncStorage/UserContext';
import { formatNumberWithCommas } from '../../../utils/Helper';

interface Props {
  data: GoldDetails;
  onChange: (data: GoldDetails) => void;
  onNext: () => void;
}

export const goldPurityOptions = [
  {
    value: GoldPurity.GOLD_14,
    name: GoldPurity.GOLD_14,
  },
  {
    value: GoldPurity.GOLD_18,
    name: GoldPurity.GOLD_18,
  },
]

const GoldDetailsSection: React.FC<Props> = ({ data, onChange, onNext }) => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState<GoldPurity>(data.goldPurity as GoldPurity || GoldPurity.GOLD_14);
  const [color, setColor] = useState<GoldColor>(data.goldColor as GoldColor || GoldColor.YELLOW);

 const { goldRateData } = useUser();


  // Rates
  const currentRatePerGram = goldRateData
    ? Number(
      parseFloat(
        selected === GoldPurity.GOLD_14
          ? goldRateData.price_gram_14k
          : goldRateData.price_gram_18k
      ).toFixed(2)
    )

    : 0;
  const parsedWeight = parseFloat(data.weight) || 0;
  const parsedLabourCost = parseFloat(data.labourCost) || 0;

  const computedTotalGoldCost = parsedWeight ? (parsedWeight * currentRatePerGram).toFixed(2) : '0';
  const computedTotalLabourPrice = parsedWeight && parsedLabourCost ? (parsedWeight * parsedLabourCost).toFixed(2) : '0';

  useEffect(() => {
    onChange({
      ...data,
      goldPurity: selected,
      goldColor: color,
      ratePerGram: currentRatePerGram.toString(),
      totalGoldCost: computedTotalGoldCost,
      totalLabourPrice: computedTotalLabourPrice,
    });
  }, [selected, color, data.weight, data.labourCost]);


  return (
    <View style={[globalStyles.mainContainer]}>
      <Header name={'Gold Details'} navigation={navigation} />

      <ScrollView style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 8, marginBottom: 16 }}>

        <View style={styles.view}>
          <Text style={styles.header}>
            Today's Gold Price
          </Text>
          <Text style={styles.header}>
            ₹{currentRatePerGram} /gram
          </Text>
        </View>


        <RadioButton
          options={goldPurityOptions}
          label={'Gold Purity'}
          setSelected={setSelected}
          selected={selected} />

        <GoldColorSelector selectedColor={color} onSelect={setColor} />

        <TextInputComponent
          title="Jwellery Size"
          placeholder="Enter Jwellery Size"
          onChangeText={(text) => onChange({ ...data, jewelrySize: text })}
          value={data.jewelrySize}
          keyboardType="numeric">
        </TextInputComponent>

        <TextInputComponent
          title="Gold Weight(grams)"
          placeholder="Enter Weight"
          onChangeText={(text) => onChange({ ...data, weight: text })}
          value={data.weight}
          keyboardType="numeric">
        </TextInputComponent>

        <View style={styles.totalPriceView}>
          <Text style={styles.text}>
            Total Gold Cost
          </Text>
          <Text style={styles.text}>
            ₹{formatNumberWithCommas(computedTotalGoldCost)}
          </Text>
        </View>

        <TextInputComponent
          title="Labour cost(per gram)"
          placeholder="Enter cost"
          onChangeText={(text) => onChange({ ...data, labourCost: text })}
          value={data.labourCost}
          keyboardType="numeric">
        </TextInputComponent>


        <View style={styles.totalPriceView}>
          <Text style={styles.text}>
            Total Labour Cost
          </Text>
          <Text style={styles.text}>
            ₹{formatNumberWithCommas(computedTotalLabourPrice)}
          </Text>
        </View>

        <ButtonComponent title="Next" onPress={onNext} />


      </ScrollView>
    </View>
  );
};

export default GoldDetailsSection;
