import { Formik } from 'formik';
import React, { useState } from 'react';
import { Modal, View } from 'react-native';
import ButtonComponent from '../../components/ButtonComponent';
import ErrorComponent from '../../components/ErrorComponent';
import Header from '../../components/Header';
import { Icons } from '../../components/Icon/Icons';
import KeyboardAvoidingViewComponent from '../../components/KeyboardAvoidingViewComponent';
import TextInputComponent from '../../components/TextInputComponent';
import globalStyles from '../../theme/globalStyles';
import { validationSchema } from './Components/Validation';
import { styles } from './styles';
import { Calendar } from 'react-native-calendars';
import AppColor from '../../app-res/AppColor';
import AppFontSize from '../../app-res/AppFontSize';
import dayjs from 'dayjs';
import useOrder from './Hook/useOrder';
import { useUser } from '../../ayncStorage/UserContext';
import Loader from '../../components/Loader/Loader';

type OrderFormProps = {
  navigation: any;
  route: any;
};

const OrderFormScreen = (props: OrderFormProps) => {
  const { item } = props.route.params;
  const {loader} = useUser();
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [selected, setSelected] = useState('');
  const { placeOrder } = useOrder(props.navigation);

  const submitOrder = (values: any) => {
    console.log(values);
    placeOrder(values,item._id)
  }

  const onCalendarPress = () => {
    console.log('Calendar Pressed');
    setCalendarVisible(true)
  }

  return (
    <View style={[globalStyles.mainContainer]}>
      <Header name={'Place Order'} navigation={props.navigation} />
      {loader && <Loader />}
      <KeyboardAvoidingViewComponent>
        <View style={{ alignItems: 'center' }}>

          <Formik
            initialValues={{
              name: item.clientDetails.name,
              contactNumber: item.clientDetails.contactNumber,
              address: '',
              city: '',
              pinCode: '',
              email: '',
              aadhaarNumber: '',
              panCardNumber: '',
              expectedDeliveryDate: '',
            }}
            validateOnMount={true}
            validationSchema={validationSchema}
            onSubmit={values => submitOrder(values)}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isValid,
              setFieldValue,
              resetForm,
              dirty
            }) => (
              <>
                <TextInputComponent
                  title="Name"
                  placeholder="Enter customer name"
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}>
                  <ErrorComponent
                    errors={errors}
                    touched={touched}
                    fieldName={'name'}
                    flag={false}
                  />
                </TextInputComponent>

                <TextInputComponent
                  title="Mobile No"
                  placeholder="Enter customer contact number  "
                  onChangeText={handleChange('contactNumber')}
                  onBlur={handleBlur('contactNumber')}
                  value={values.contactNumber}
                  keyboardType="number-pad"
                  maxLength={10}>
                  <ErrorComponent
                    errors={errors}
                    touched={touched}
                    fieldName={'contactNumber'}
                    flag={false}
                  />
                </TextInputComponent>

                <TextInputComponent
                  title="Email Id"
                  placeholder="Enter customer email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType='email-address'>
                  <ErrorComponent
                    errors={errors}
                    touched={touched}
                    fieldName={'email'}
                    flag={false}
                  />
                </TextInputComponent>



                <TextInputComponent
                  title="Address"
                  placeholder="Enter address"
                  onChangeText={handleChange('address')}
                  onBlur={handleBlur('address')}
                  value={values.address}>
                  <ErrorComponent
                    errors={errors}
                    touched={touched}
                    fieldName={'address'}
                    flag={false}
                  />
                </TextInputComponent>

                <TextInputComponent
                  title="City"
                  placeholder="Enter city"
                  onChangeText={handleChange('city')}
                  onBlur={handleBlur('city')}
                  value={values.city}>
                  <ErrorComponent
                    errors={errors}
                    touched={touched}
                    fieldName={'city'}
                    flag={false}
                  />
                </TextInputComponent>

                <TextInputComponent
                  title="Pincode"
                  placeholder="Enter pincode"
                  onChangeText={handleChange('pinCode')}
                  onBlur={handleBlur('pinCode')}
                  value={values.pinCode}
                  keyboardType="numeric"
                  maxLength={6}>
                  <ErrorComponent
                    errors={errors}
                    touched={touched}
                    fieldName={'pinCode'}
                    flag={false}
                  />
                </TextInputComponent>

                <TextInputComponent
                  title="Aadhaar Number"
                  placeholder="Enter aadhaar card number"
                  onChangeText={handleChange('aadhaarNumber')}
                  onBlur={handleBlur('aadhaarNumber')}
                  value={values.aadhaarNumber}
                  keyboardType="numeric"
                  maxLength={12}>
                  <ErrorComponent
                    errors={errors}
                    touched={touched}
                    fieldName={'aadhaarNumber'}
                    flag={false}
                  />
                </TextInputComponent>

                <TextInputComponent
                  title="PAN Number"
                  placeholder="Enter pan card number"
                  onChangeText={handleChange('panCardNumber')}
                  onBlur={handleBlur('panCardNumber')}
                  value={values.panCardNumber}>
                  <ErrorComponent
                    errors={errors}
                    touched={touched}
                    fieldName={'panCardNumber'}
                    flag={false}
                  />
                </TextInputComponent>

                <TextInputComponent
                  title="Expected Delivery Date"
                  placeholder="Select date"
                  onChangeText={handleChange('expectedDeliveryDate')}
                  onBlur={handleBlur('expectedDeliveryDate')}
                  value={values.expectedDeliveryDate}
                  iconType={Icons.Ionicons}
                  iconVisible={'calendar'}
                  onPress={onCalendarPress}>
                  <ErrorComponent
                    errors={errors}
                    touched={touched}
                    fieldName={'expectedDeliveryDate'}
                    flag={false}
                  />
                </TextInputComponent>

                <View style={styles.loginButton}>
                  <ButtonComponent
                    title={'Place Order'}
                    onPress={() => {
                      handleSubmit();
                    }}
                  />
                </View>


                <Modal
                  visible={calendarVisible}
                  transparent={true}
                  animationType="slide"
                  onRequestClose={() => setCalendarVisible(false)}
                >
                  <View style={styles.modalView}>
                    <View style={styles.calendarView}>
                      <Calendar
                        minDate={new Date().toISOString().split('T')[0]} // disables previous dates
                        onDayPress={day => {
                          const formattedDate = dayjs(day.dateString).format('DD-MM-YYYY');
                          setFieldValue('expectedDeliveryDate', formattedDate);
                          setSelected(day.dateString);
                          setCalendarVisible(false);
                        }}
                        markedDates={{
                          [selected]: { selected: true, selectedColor: AppColor.primary }
                        }}
                        theme={{
                          arrowColor: AppColor.primary, // Change arrow color here
                        }}
                      />
                      <View style={{...styles.loginButton,height: 60}}>
                        <ButtonComponent
                          title="Close"
                          onPress={() => setCalendarVisible(false)}
                          textStyle={{ fontSize: AppFontSize.FONT_SIZE_16 }}
                        />
                      </View>
                    </View>
                  </View>
                </Modal>
              </>
            )}
          </Formik>




        </View>
      </KeyboardAvoidingViewComponent>
    </View>
  )
}

export default OrderFormScreen
