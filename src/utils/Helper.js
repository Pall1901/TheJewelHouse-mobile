import {Alert, Platform, View} from 'react-native';
import DeviceInfo, {getBundleId} from 'react-native-device-info';
import {showMessage} from 'react-native-flash-message';
import {checkInternetConnection} from 'react-native-offline';
import AppColor from '../app-res/AppColor';
import AppString from '../app-res/AppString';
import moment from 'moment';

const showAlert = (title, message) => {
  Alert.alert(title, message, [{text: 'OK', onPress: () => console.log('')}]);
};

const uniqueDeviceId = () => {
  return DeviceInfo.getUniqueId();
};

const isLowercase = str => {
  return str === str.toLowerCase();
};

const ItemSeparatorView = () => {
  return (
    <View
      style={{
        height: 0.5,
        width: '100%',
        backgroundColor: AppColor.greyLight,
      }}
    />
  );
};

const maskMobileNumber = mobile => {
  let strNumber = JSON.stringify(mobile);
  if (strNumber.length >= 10) {
    return strNumber.slice(0, 2) + 'xxxxxx' + strNumber.slice(-2);
  }
  return strNumber;
};

const debounceFunc = (func, handler, delay) => {
  clearTimeout(handler);
  return setTimeout(func, delay);
};

const directoryName = (event, id) => {
  const directory = `${event.replace(' ', '_')}_${id}_${new Date()
    .getTime()
    .toString()}`;
  return directory;
};

// const requestFilesDir = DocumentDirectoryPath + '/reqfiles/';

const getNextdays = async days => {
  const temp29 = [...new Array(days)].map((i, idx) => {
    return moment().add(idx, 'days');
  });
  const nextDays = [...temp29];
  return nextDays;
};

const getNextDaysStartEnd = async day => {
  const nextThirtyDays = await getNextdays(day);
  const start = nextThirtyDays[0];
  const end = nextThirtyDays[nextThirtyDays.length - 1];
  return {nextThirtyDays, start, end};
};

const showToastMessage = (message, type, position = 'bottom') => {
  showMessage({
    message,
    type,
    icon: type,
    position,
  });
};

const getDateRange = (startDate, endDate) => {
  let days = endDate.diff(startDate, 'days') + 1;
  const temp = [...new Array(days)].map((i, idx) => {
    return moment(startDate, 'DD-MM-YYYY')
      .add(idx, 'days')
      .format('YYYY-MM-DD');
  });
  const datesBetween = [...temp];

  return datesBetween;
};

const tID = testID => {
  const appIdentifier = getBundleId();

  if (!testID) {
    return undefined;
  }

  const prefix = `${appIdentifier}:id/`;
  const hasPrefix = testID.startsWith(prefix);

  return Platform.select({
    android: !hasPrefix ? `${prefix}${testID}` : testID,
    ios: hasPrefix ? testID.slice(prefix.length) : testID,
  });
};

const checkInternet = async () => {
  const isConnected = await checkInternetConnection(
    AppString.google_url,
    6000,
    true,
    'HEAD',
  );
  if (!isConnected) {
    showToastMessage('Please check internet connection', 'danger');
  }
  return isConnected;
};

const getSum = numbers => {
  const sum = numbers.reduce((acc, currentValue) => acc + currentValue, 0);
  return sum;
};

const isObjectEmpty = obj => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
};

const formatNumber = value => {
  if (value >= 100000) {
    return (value / 100000).toFixed(2).replace(/\.0$/, '') + 'L';
  } else if (value >= 1000) {
    return (value / 1000).toFixed(2).replace(/\.0$/, '') + 'K';
  }
  return parseFloat(value).toFixed(2);
};

const formatNumber1 = value => {
  if (value >= 100000) {
    return (value / 100000).toFixed(2).replace(/\.0$/, '') + 'L';
  }

  return Math.floor(value);
};

const parseFloatNumber = value => {
  if (value != null) {
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      return parsedValue.toFixed(2);
    }
  }
  return '-';
};

const formatNumberWithCommas = (num) => {
  if (!num) return '0';
  return Number(num).toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};



const isDebugMode = () => __DEV__;

export {
  ItemSeparatorView,
  checkInternet,
  debounceFunc,
  directoryName,
  getDateRange,
  getNextDaysStartEnd,
  getNextdays,
  getSum,
  isLowercase,
  isObjectEmpty,
  showAlert,
  showToastMessage,
  tID,
  uniqueDeviceId,
  formatNumber,
  formatNumber1,
  maskMobileNumber,
  parseFloatNumber,
  isDebugMode,
  formatNumberWithCommas,
};
