import React, { useCallback, useEffect } from 'react';
import { DeviceEventEmitter, View } from 'react-native';
import AppString from '../../app-res/AppString';
import ButtonComponent from '../../components/ButtonComponent';
import TabHeader from '../../components/TabHeader';
import globalStyles from '../../theme/globalStyles';
import { TabScreen } from '../../utils/enums';
import TextValueWithTitle from './Components/TextValueWithTitle';
import { styles } from './styles';
import Loader from '../../components/Loader/Loader';
import { useUser } from '../../ayncStorage/UserContext';
import useSummery from './Hook/useSummery';
import { useFocusEffect } from '@react-navigation/native';

type DashboardProps = {
  navigation: any;
  route: any;
};

const DashboardScreen = (props: DashboardProps) => {
  const { loader } = useUser();
  const { getSummery, summery } = useSummery();

  useEffect(() => {

    DeviceEventEmitter.addListener("event.orderSubmitted", (eventData) => onSuccessQuotation(eventData));
    DeviceEventEmitter.addListener("event.orderPlaced", (eventData) => onSuccessOrder(eventData));
    return () => {
      DeviceEventEmitter.removeAllListeners("event.orderSubmitted");
      DeviceEventEmitter.removeAllListeners("event.orderPlaced");
    };
  }, []);

  useFocusEffect(
    useCallback(() => {
      getSummery();
    }, [])
  );

  const onSuccessQuotation = (eventData: any) => {
    if (eventData?.submit) {
      props.navigation.navigate(TabScreen.QUOTATION);
    }
  };

  const onSuccessOrder = (eventData: any) => {
    if (eventData?.submit) {
      props.navigation.navigate(TabScreen.ORDERS);
    }
  };


  return (
    <View style={[globalStyles.mainContainer]}>
      {loader && <Loader />}
      <TabHeader name={AppString.dashboardScreen.header} />

      <View style={styles.rowView}>
        <TextValueWithTitle
          title={'Total Orders'}
          value={summery ? summery.totalOrders : '0'}
          style={{ marginRight: 10 }}
        />
        <TextValueWithTitle
          title={'Total Quotations'}
          value={summery ? summery.totalQuotations : '0'}
        />
      </View>

      <ButtonComponent
        title={"Create Quotation"}
        onPress={() => { props.navigation.navigate('QuotationFormScreen') }}
        style={styles.buttonStyle}
      />





    </View>

  )
}

export default DashboardScreen

