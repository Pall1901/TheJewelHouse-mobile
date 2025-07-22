import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUser } from '../../../ayncStorage/UserContext';
import { getGoldRate, getDropdown } from '../../../api-services/api';
import { HttpStatusCode } from '../../../utils/enums';

const GOLD_RATE_DATE_KEY = 'goldRateDate';
const GOLD_RATE_DATA_KEY = 'goldRateData';

const DROPDOWN_DATE_KEY = 'dropdownDate';
const DROPDOWN_DATA_KEY = 'dropdownData';

export const useGoldRateAPI = () => {
  const { setGoldRateData, setDropdown, goldRateData, dropdown } = useUser();
  const today = new Date().toISOString().split('T')[0];

  const fetchGoldRate = async () => {
    const res = await getGoldRate();
    if (res?.data?.code === HttpStatusCode.OK) {
      const goldData = res.data.data;
      await AsyncStorage.setItem(GOLD_RATE_DATE_KEY, today);
      await AsyncStorage.setItem(GOLD_RATE_DATA_KEY, JSON.stringify(goldData));
      setGoldRateData(goldData);
      console.log('Gold Rate Data fetched and stored:', goldData);
      
    }
  };

  const fetchDropdown = async () => {
    const res = await getDropdown();
    if (res?.data?.code === HttpStatusCode.OK) {
      const dropdownData = res.data.data;
      await AsyncStorage.setItem(DROPDOWN_DATE_KEY, today);
      await AsyncStorage.setItem(DROPDOWN_DATA_KEY, JSON.stringify(dropdownData));
      setDropdown(dropdownData);
      console.log('Dropdown Data fetched and stored:', dropdownData);
      
    }
  };

  const loadDataOncePerDay = async (
    dateKey: string,
    dataKey: string,
    fetchFn: () => Promise<void>,
    setData: (data: any) => void
  ) => {
    try {
      const savedDate = await AsyncStorage.getItem(dateKey);
      const savedData = await AsyncStorage.getItem(dataKey);

      if (savedDate === today && savedData) {
        setData(JSON.parse(savedData));
      } else {
        await fetchFn(); // Calls your existing fetch function
      }
    } catch (error) {
      console.log(`❌ Error loading/storing data for key: ${dataKey}`, error);
    }
  };

  const initializeData = async () => {
    await Promise.all([
      loadDataOncePerDay(GOLD_RATE_DATE_KEY, GOLD_RATE_DATA_KEY, fetchGoldRate, setGoldRateData),
      loadDataOncePerDay(DROPDOWN_DATE_KEY, DROPDOWN_DATA_KEY, fetchDropdown, setDropdown),
    ]);
  };

  return {
    goldRateData,
    dropdown,
    initializeData, // 👈 Only call this in your component
  };
};
