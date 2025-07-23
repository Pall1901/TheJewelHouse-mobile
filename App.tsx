import { useEffect } from 'react';
import { PermissionsAndroid, Platform, StyleSheet, View } from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import { SafeAreaProvider, SafeAreaView, SafeAreaView as SafeView } from 'react-native-safe-area-context';
import AppColor from './src/app-res/AppColor';
import GeneralStatusBarColor from './src/components/StatusBarComponent/GeneralStatusBarColor';
import MainView from './src/navigation/MainView';
import { OperatingSystemType } from './src/utils/enums';
import { useGoldRateAPI } from './src/screens/QuotationFormScreen/Hook/useGoldRateAPI';


function App() {

  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({ fade: true });
    }, 1000);
  }, [])

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <GeneralStatusBarColor backgroundColor={AppColor.statusBarBg}
          barStyle="light-content" />

        {Platform.OS === OperatingSystemType.IOS ? (
          <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}><MainView /></SafeAreaView>
        ) : (
          <SafeView style={{ flex: 1 }}><MainView /></SafeView>
        )}
      </View>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white'
  }
});

export default App;
