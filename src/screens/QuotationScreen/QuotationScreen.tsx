import { ActivityIndicator, DeviceEventEmitter, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import globalStyles from '../../theme/globalStyles'
import TabHeader from '../../components/TabHeader'
import Loader from '../../components/Loader/Loader';
import { useUser } from '../../ayncStorage/UserContext';
import { styles } from './styles';
import ErrorDialogComponent from '../../components/ErrorDialogComponent';
import AppString from '../../app-res/AppString';
import useQuotationHistory from './Hook/useQuotationHistory';
import QuotationItemCard from './Components/QuotationItemCard';
import { TabScreen } from '../../utils/enums';
import { useFocusEffect } from '@react-navigation/native';

type QuotationsProps = {
  navigation: any;
  route: any;
};


const QuotationScreen = (props: QuotationsProps) => {
  const { loader } = useUser()
  const { getQuotationList, quotationList, loading, hasMore } = useQuotationHistory()

  useFocusEffect(
  useCallback(() => {
    getQuotationList(true);
  }, [])
);

  const renderItem = ({ item }: any) => (
    <QuotationItemCard item={item} navigation={props.navigation} />
  );

  return (
    <View style={[globalStyles.mainContainer]}>
      {loader && <Loader />}
      <TabHeader name={'Quotations'} />

      <View style={styles.view}>
        <FlatList
          data={quotationList}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}

          // onEndReached={() => {
          //   if (hasMore && !loading) {
          //     getQuotationList();
          //   }
          // }}
          // onEndReachedThreshold={0.5}
          // onRefresh={() => getQuotationList(true)} // 🔧 added pull-to-refresh
          // refreshing={loading}
          // ListFooterComponent={loading && hasMore ? <ActivityIndicator style={{ margin: 10 }} /> : null}
          ListEmptyComponent={() => (

            <View style={styles.errorView}>
              {!quotationList ?
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

export default QuotationScreen
