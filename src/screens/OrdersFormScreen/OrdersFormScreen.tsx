import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import globalStyles from '../../theme/globalStyles';
import Header from '../../components/Header';
import KeyboardAvoidingViewComponent from '../../components/KeyboardAvoidingViewComponent';
import TextInputComponent from '../../components/TextInputComponent';
import ErrorComponent from '../../components/ErrorComponent';
import ButtonComponent from '../../components/ButtonComponent';
import AppString from '../../app-res/AppString';
import AppDimension from '../../app-res/AppDimension';
import { styles } from './styles';
import { validationSchema } from './Components/Validation';

type OrderFormProps = {
  navigation: any;
  route: any;
};

const OrdersFormScreen = (props: OrderFormProps) => {
 // const { item } = props.route.params;
 // console.log(item);


  const submitOrder = (values: any) => {
    console.log(values);
  }


  return (
    <View style={[globalStyles.mainContainer]}>
      <Header name={'Place Order'} navigation={props.navigation} />

      <KeyboardAvoidingViewComponent>
        <View style={{ alignItems: 'center' }}>

          <Formik
            initialValues={{
              name: '',
              contactNumber: '',
              address: '',
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
                  value={values.name}
                  wrapperStyle={{ marginBottom: AppDimension.SPACING_Y_10 }}
                  maxLength={10}>
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
                  wrapperStyle={{ marginBottom: AppDimension.SPACING_Y_10 }}
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
                  keyboardType='email-address'
                  wrapperStyle={{ marginBottom: AppDimension.SPACING_Y_10 }}>
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
                  value={values.address}
                  flag={true}>
                  <ErrorComponent
                    errors={errors}
                    touched={touched}
                    fieldName={'address'}
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
                  wrapperStyle={{ marginBottom: AppDimension.SPACING_Y_10 }}
                  maxLength={10}>
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
                  wrapperStyle={{ marginBottom: AppDimension.SPACING_Y_10 }}
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
                  value={values.panCardNumber}
                  wrapperStyle={{ marginBottom: AppDimension.SPACING_Y_10 }}
                  maxLength={12}>
                  <ErrorComponent
                    errors={errors}
                    touched={touched}
                    fieldName={'panCardNumber'}
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
              </>
            )}
          </Formik>


        </View>
      </KeyboardAvoidingViewComponent>
    </View>
  )
}

export default OrdersFormScreen
