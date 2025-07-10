import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyles from '../../theme/globalStyles';
import TabHeader from '../../components/TabHeader';
import AppString from '../../app-res/AppString';
import { styles } from './styles';
import TextValueWithTitle from './Components/TextValueWithTitle';
import PressableComponent from '../../components/PressableComponent';
import AppImages from '../../app-res/AppImages';
import AppDimension from '../../app-res/AppDimension';
import ButtonComponent from '../../components/ButtonComponent';

type DashboardProps = {
  navigation: any;
  route: any;
};

const DashboardScreen = (props: DashboardProps) => {
  return (
    <View style={[globalStyles.mainContainer]}>
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
        onPress={() => {props.navigation.navigate('QuotationFormScreen')}}
        style={styles.buttonStyle}
        />





    </View>

  )
}

export default DashboardScreen

