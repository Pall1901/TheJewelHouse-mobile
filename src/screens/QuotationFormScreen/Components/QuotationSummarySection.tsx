import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {QuotationSummary } from '../../../utils/types';
import globalStyles from '../../../theme/globalStyles';
import Header from '../../../components/Header';
import { useNavigation } from '@react-navigation/native';

interface Props {
  data: QuotationSummary;
  onChange: (data: QuotationSummary) => void;
  onSubmit: () => void;
}

const QuotationSummarySection: React.FC<Props> = ({ data, onChange, onSubmit}) => {
  const navigation = useNavigation();
  return (
     <View style={[globalStyles.mainContainer]}>
      <Header name={'Quotation Summery'} navigation={navigation}/>
      <Text>QuotationSummarySection</Text>
    </View>
  )
}

export default QuotationSummarySection

