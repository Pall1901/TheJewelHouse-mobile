import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import globalStyles from '../../theme/globalStyles';
import TabHeader from '../../components/TabHeader';
import ErrorDialogComponent from '../../components/ErrorDialogComponent';
import { useUser } from '../../ayncStorage/UserContext';
import { useFocusEffect } from '@react-navigation/native';
import Loader from '../../components/Loader/Loader';
import { styles } from './styles';
import useOrderHistory from './Hook/useOrderHistory';
import OrderCard from './Components/OrderCard';

type OrdersProps = {
  navigation: any;
  route: any;
};

const OrdersScreen = (props : OrdersProps) => {
 const { loader } = useUser()
  const { getOrderList, orderList, loading, hasMore } = useOrderHistory()
  
   useFocusEffect(
    useCallback(() => {
      getOrderList(true);
    }, [])
  );

    const renderItem = ({ item }: any) => (
    <OrderCard item={item} navigation={props.navigation} />
  );

  return (
   <View style={[globalStyles.mainContainer]}>
    {loader && <Loader />}
      <TabHeader name={'Orders'} />
      
      <View style={styles.view}>
        <FlatList
          data={orderList}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}

          onEndReached={() => {
            if (hasMore && !loading) {
              getOrderList();
            }
          }}
          onEndReachedThreshold={0.5}
          onRefresh={() => getOrderList(true)} // 🔧 added pull-to-refresh
          refreshing={loading}
          ListFooterComponent={loading && hasMore ? <ActivityIndicator style={{ margin: 10 }} /> : null}
          ListEmptyComponent={() => (

            <View style={styles.errorView}>
              {!loading && orderList?
                <ErrorDialogComponent
                  icon='noDataFound'
                  title={'Quotation data not found.'}
                  description='Create quotation to to view data.' />
                :
                <></>}
            </View>

          )}
        />
      </View>
    </View>
  )
}

export default OrdersScreen