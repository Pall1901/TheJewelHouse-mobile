import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyles from '../../theme/globalStyles';
import TabHeader from '../../components/TabHeader';
import ErrorDialogComponent from '../../components/ErrorDialogComponent';

type OrdersProps = {
  navigation: any;
  route: any;
};

const OrdersScreen = (props : OrdersProps) => {
  return (
   <View style={[globalStyles.mainContainer]}>
      <TabHeader name={'Orders'} />
      <View style={{padding:20}}>
        <ErrorDialogComponent
                  icon='noDataFound'
                  title={'Ordes data not found.'}
                  description='You have not placed any orders yet' />
      </View>
    </View>
  )
}

export default OrdersScreen

const styles = StyleSheet.create({})