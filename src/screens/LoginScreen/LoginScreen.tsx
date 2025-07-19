import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Formik } from 'formik';
import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  View
} from 'react-native';
import AppDimension from '../../app-res/AppDimension';
import AppImages from '../../app-res/AppImages';
import AppString from '../../app-res/AppString';
import { useUser } from '../../ayncStorage/UserContext';
import ButtonComponent from '../../components/ButtonComponent';
import ErrorComponent from '../../components/ErrorComponent';
import { Icons } from '../../components/Icon/Icons';
import KeyboardAvoidingViewComponent from '../../components/KeyboardAvoidingViewComponent';
import Loader from '../../components/Loader/Loader';
import TextInputComponent from '../../components/TextInputComponent';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import { ScreenName } from '../../utils/enums';
import { loginValidationSchema } from './Components/Validation';
import useLogin from './Hook/useLogin';
import { styles } from './styles';

type LoginProps = {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    ScreenName.LOGIN_SCREEN
  >;
  route: RouteProp<RootStackParamList, ScreenName.LOGIN_SCREEN>;
};

const LoginScreen = (props: LoginProps) => {
  const { loader } = useUser();
  const { loginCheck } = useLogin(props.navigation);

  const login = (values: any) => {
   // props.navigation.navigate(ScreenName.HOME_SCREEN)
    loginCheck(values);
  };

  return (
    <ImageBackground
      source={AppImages.loginBg}
      style={{ flex: 1 }}
      resizeMode='stretch'>
      <View style={styles.container}>
        {loader && <Loader />}
          <Image
            source={AppImages.logo}
            resizeMode='contain'
            style={styles.image}
            accessible={true}
            testID={`loginScreen-image`}
            accessibilityLabel={`loginScreen-image`}
          />
        
       
        <KeyboardAvoidingViewComponent>
          <View style={{ alignItems: 'center' }}>
            <View style={styles.view}>

              <Text
                style={styles.textGreen}
                accessible={true}
                testID={`loginScreen-signInText`}
                accessibilityLabel={`loginScreen-signInText`}>
                {AppString.loginScreen.title}
              </Text>

              <Formik
                testID='loginScreen-formik'
                initialValues={{
                  phone: '',
                  password: '',
                }}
                validateOnMount={true}
                validationSchema={loginValidationSchema}
                onSubmit={values => login(values)}>
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
                      title="Mobile No"
                      placeholder="999999999"
                      onChangeText={handleChange('phone')}
                      onBlur={handleBlur('phone')}
                      value={values.phone}
                      iconType={Icons.Ionicons}
                      iconVisible={'phone-portrait-sharp'}
                      keyboardType="number-pad"
                      wrapperStyle={{ marginBottom: AppDimension.SPACING_Y_10 }}
                      maxLength={10}>
                      <ErrorComponent
                        errors={errors}
                        touched={touched}
                        fieldName={'phone'}
                        flag={false}
                      />
                    </TextInputComponent>

                    <TextInputComponent
                      title="Password"
                      placeholder="**********"
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      secureTextEntry={true}
                      contextMenuHidden={true}
                      wrapperStyle={{ marginBottom: AppDimension.SPACING_Y_10 }}
                      screen="loginScreen">
                      <ErrorComponent
                        screenName="loginScreen"
                        errors={errors}
                        touched={touched}
                        fieldName={'password'}
                        flag={false}
                      />
                    </TextInputComponent>

                   

                    <View style={styles.loginButton}>
                      <ButtonComponent
                        title={AppString.loginScreen.login}
                                              
                        onPress={() => {
                          handleSubmit();
                        }}
                      />
                    </View>
                  </>
                )}
              </Formik>

            </View>
          </View>
        </KeyboardAvoidingViewComponent>
        
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
