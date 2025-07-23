import { ScrollView, Text, ToastAndroid, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
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
import { debounce } from 'lodash';
import useQuotationAPI from '../Hook/useQuotationAPI';
import Loader from '../../../components/Loader/Loader';
import { useUser } from '../../../ayncStorage/UserContext';
import { formatNumberWithCommas } from '../../../utils/Helper';

interface Props {
  data: DiamondDetails[];
  onChange: (data: DiamondDetails[]) => void;
  onNext: () => void;
}

const discount = Array.from({ length: 10 }, (_, i) => ({
  value: `${i + 1}`,
  name: `${i + 1}`,
}));

type DropdownItem = {
  value: string;
  name: string;
};


const DiamondDetailsSection: React.FC<Props> = ({ data, onChange, onNext }) => {
  const { loader, dropdown } = useUser();
  const navigation = useNavigation();

  const [diamondRateData, setDiamondRateData] = useState<{ [index: number]: any }>({});
  const { fetchDiamondRate } = useQuotationAPI(
    (index: any, rateData: any) => {
      setDiamondRateData(prev => ({
        ...prev,
        [index]: rateData,
      }));
    }
  );

  useEffect(() => {
    Object.entries(diamondRateData).forEach(([indexStr, rateData]) => {
      const index = Number(indexStr);
      if (
        data[index] &&
        rateData?.price &&
        data[index].ratePerCts !== String(rateData.price)
      ) {
        const updatedDiamond = {
          ...data[index],
          ratePerCts: String(rateData.price),
        };
        handleUpdateDiamond(index, updatedDiamond);
      }
    });
  }, [diamondRateData]);


  const [shapes, setShapeOptions] = useState<DropdownItem[]>([]);
  const [color, setColorOptions] = useState<DropdownItem[]>([]);
  const [clarity, setClarityOptions] = useState<DropdownItem[]>([]);

  // Separate center and side diamonds
  const centerDiamonds = data.filter(d => d.type === 'center');
  const sideDiamonds = data.filter(d => d.type === 'side');

  const isValidSize = (size: string) => {
    return size?.trim().length >= 3;
  };

  const handleAddDiamond = (type: 'center' | 'side') => {
    const newDiamond: DiamondDetails = {
      type,
      shape: '',
      size: '',
      color: '',
      clarity: '',
      ratePerCts: '',
      discount: '',
      totalAmount: '',
    };
    onChange([...data, newDiamond]);
  };

  const transformAsIs = (array: string[]) => {
    return array.map(item => ({
      value: item,
      name: item
    }));
  };

  useEffect(() => {
    setColorOptions(transformAsIs(dropdown.diamondColors));
    setClarityOptions(transformAsIs(dropdown.diamondPurity));
    setShapeOptions(transformAsIs(dropdown.diamondShapes));
  }, []);

  const prevValuesRef = useRef({
    size: '',
    shape: '',
    color: '',
    clarity: '',
  });

  const handleUpdateDiamond = (index: number, updatedDiamond: DiamondDetails) => {
    const { ratePerCts, discount } = updatedDiamond;
    updatedDiamond.totalAmount =ratePerCts
    let totalAmount = updatedDiamond.totalAmount;
    if (ratePerCts && discount) {
      totalAmount = calculateTotalAmount(ratePerCts, discount);
    }

    const updatedDiamonds = [...data];
    updatedDiamonds[index] = { ...updatedDiamond, totalAmount };
    onChange(updatedDiamonds);

    const { size, shape, color, clarity } = updatedDiamond;

    if (shape && color && clarity && isValidSize(size)) {
      const hasChanged =
        size !== prevValuesRef.current.size ||
        shape !== prevValuesRef.current.shape ||
        color !== prevValuesRef.current.color ||
        clarity !== prevValuesRef.current.clarity;

      if (hasChanged) {
        setDiamondRateData(prev => {
          const updated = { ...prev };
          delete updated[index];
          return updated;
        });
        debouncedApiCall(size, shape, color, clarity, index);
        prevValuesRef.current = { size, shape, color, clarity };
      }
      else {
        debouncedApiCall.cancel(); // Cancel if not valid or no change
        setDiamondRateData(prev => {
          const updated = { ...prev };
          delete updated[index];
          return updated;
        });
      }
    }
    else {
      // Handle input clear: cancel API and clear rate
      debouncedApiCall.cancel();
      setDiamondRateData(prev => {
        const updated = { ...prev };
        delete updated[index];
        return updated;
      });
    }
  };

  const debouncedApiCall = useRef(
    debounce((size, shape, color, clarity, index) => {
      if (!shape || !color || !clarity || !isValidSize(size)) {
        console.log('1');
        return;
      }

      fetchDiamondRate({ size, color, shape, clarity, index });
    }, 600)
  ).current;

  const calculateTotalAmount = (ratePerCts: string, discount: string) => {
    const rate = parseFloat(ratePerCts) || 0;
    const disc = parseFloat(discount) || 0;
    const discountedRate = rate - (rate * disc / 100);
    return (discountedRate).toFixed(2);
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
          value={diamond.ratePerCts ? formatNumberWithCommas(String(diamond.ratePerCts)) : '0'}
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
          ₹{formatNumberWithCommas(String(diamond.totalAmount)) || '0'}
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



