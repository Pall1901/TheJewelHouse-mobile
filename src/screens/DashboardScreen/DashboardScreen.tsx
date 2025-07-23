import React, { useEffect } from 'react';
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

type DashboardProps = {
  navigation: any;
  route: any;
};

const DashboardScreen = (props: DashboardProps) => {
  const {loader} = useUser();
  useEffect(() => {
    DeviceEventEmitter.addListener("event.orderSubmitted", (eventData) => onSuccess(eventData));
    return () => {
      DeviceEventEmitter.removeAllListeners("event.orderSubmitted")
    };
  }, []);

   const onSuccess = (eventData: any) => {
    if (eventData?.submit) {
      props.navigation.navigate(TabScreen.QUOTATION);
    }
  }


  return (
    <View style={[globalStyles.mainContainer]}>
      {loader && <Loader />}
      <TabHeader name={AppString.dashboardScreen.header} />

      <View style={styles.rowView}>
        <TextValueWithTitle
          title={'Total Orders'}
          value={'0'}
          style={{ marginRight: 10 }}
        />
        <TextValueWithTitle
          title={'Total Quotations'}
          value={'0'}
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

