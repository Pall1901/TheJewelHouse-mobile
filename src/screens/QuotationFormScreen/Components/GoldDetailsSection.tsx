import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import ButtonComponent from '../../../components/ButtonComponent';
import Header from '../../../components/Header';
import RadioButton from '../../../components/RadioButton';
import TextInputComponent from '../../../components/TextInputComponent';
import globalStyles from '../../../theme/globalStyles';
import { GoldColor, GoldPurity, HttpStatusCode } from '../../../utils/enums';
import { GoldDetails } from '../../../utils/types';
import { styles } from '../styles';
import GoldColorSelector from './GoldColorSelector';
import { useGoldRateAPI } from '../Hook/useGoldRateAPI';
import { useUser } from '../../../ayncStorage/UserContext';
import { formatNumberWithCommas } from '../../../utils/Helper';
import AppDimension from '../../../app-res/AppDimension';
import { getGoldRateFromDatabase } from '../../../api-services/api';
import Loader from '../../../components/Loader/Loader';

interface Props {
  data: GoldDetails;
  onChange: (data: GoldDetails) => void;
  onNext: () => void;
}

export const goldPurityOptions = [
  {
    value: GoldPurity.GOLD_9,
    name: GoldPurity.GOLD_9,
  },
  {
    value: GoldPurity.GOLD_14,
    name: GoldPurity.GOLD_14,
  },
  {
    value: GoldPurity.GOLD_18,
    name: GoldPurity.GOLD_18,
  },
];

const GoldDetailsSection: React.FC<Props> = ({ data, onChange, onNext }) => {
  const navigation = useNavigation();
  const { loader, setLoader } = useUser();
  const [selected, setSelected] = useState<GoldPurity>(
    (data.goldPurity as GoldPurity) || GoldPurity.GOLD_14,
  );
  const [color, setColor] = useState<GoldColor>(
    (data.goldColor as GoldColor) || GoldColor.YELLOW,
  );

  // const { goldRateData } = useUser();

  const [goldRateData, setGoldRateData] = useState<any>(null);

  useEffect(() => {
    getSummeryHandler();
  }, []);

  const getSummeryHandler = async () => {
    setLoader(true);
    try {
      const response = await getGoldRateFromDatabase();
      const { data = {} } = response;
      if (data?.code == HttpStatusCode.OK) {
        console.log(data.data[0], 'gold rate data');

        setGoldRateData(data?.data[0]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  const rateMap = {
    [GoldPurity.GOLD_9]: goldRateData?.rate9k,
    [GoldPurity.GOLD_14]: goldRateData?.rate14k,
    [GoldPurity.GOLD_18]: goldRateData?.rate18k,
  };

  const currentRatePerGram = goldRateData
    ? Number(parseFloat(rateMap[selected] || 0).toFixed(2))
    : 0;

  const parsedWeight = parseFloat(data.weight) || 0;
  const parsedLabourCost = parseFloat(data.labourCost) || 0;

  const computedTotalGoldCost = parsedWeight
    ? (parsedWeight * currentRatePerGram).toFixed(2)
    : '0';
  const computedTotalLabourPrice =
    parsedWeight && parsedLabourCost
      ? (parsedWeight * parsedLabourCost).toFixed(2)
      : '0';

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
      {loader && <Loader />}
      <Header name={'Gold Details'} navigation={navigation} />

      <ScrollView
        style={{
          flex: 1,
          paddingHorizontal: 16,
          paddingVertical: 8,
          marginBottom: 16,
        }}
      >
        <View style={styles.view}>
          <Text style={styles.header}>Today's Gold Price</Text>
          <Text style={styles.header}>₹{currentRatePerGram} /gram</Text>
        </View>

        <RadioButton
          options={goldPurityOptions}
          label={'Gold Purity'}
          setSelected={setSelected}
          selected={selected}
        />

        <GoldColorSelector selectedColor={color} onSelect={setColor} />

        <TextInputComponent
          title="Category"
          placeholder="Enter category"
          onChangeText={text => onChange({ ...data, category: text })}
          value={data.category}
          keyboardType="default"
        ></TextInputComponent>

        <TextInputComponent
          title="Jwellery Size"
          placeholder="Enter Jwellery Size"
          onChangeText={text => onChange({ ...data, jewelrySize: text })}
          value={data.jewelrySize}
          keyboardType="numeric"
        ></TextInputComponent>

        <TextInputComponent
          title="Gold Weight(grams)"
          placeholder="Enter Weight"
          onChangeText={text => onChange({ ...data, weight: text })}
          value={data.weight?.toString() || ''}
          keyboardType="numeric"
        ></TextInputComponent>

        <View
          style={{
            ...styles.totalPriceView,
            paddingVertical: AppDimension.SPACING_Y_16,
          }}
        >
          <Text style={styles.text}>Total Gold Cost</Text>
          <Text style={styles.text}>
            ₹
            {formatNumberWithCommas(
              data.totalGoldCost || computedTotalGoldCost,
            )}
          </Text>
        </View>

        <TextInputComponent
          title="Labour cost(per gram)"
          placeholder="Enter cost"
          onChangeText={text => onChange({ ...data, labourCost: text })}
          value={data.labourCost?.toString() || ''}
          keyboardType="numeric"
        ></TextInputComponent>

        <View
          style={{
            ...styles.totalPriceView,
            paddingVertical: AppDimension.SPACING_Y_16,
            marginTop: AppDimension.SPACING_Y_10,
          }}
        >
          <Text style={styles.text}>Total Labour Cost</Text>
          <Text style={styles.text}>
            ₹
            {formatNumberWithCommas(
              data.totalLabourPrice || computedTotalLabourPrice,
            )}
          </Text>
        </View>

        <ButtonComponent title="Next" onPress={onNext} />
      </ScrollView>
    </View>
  );
};

export default GoldDetailsSection;
