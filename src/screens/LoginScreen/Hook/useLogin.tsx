
// import { Keyboard } from 'react-native';
// import { useDispatch } from 'react-redux';
// import { login } from '../../../api-services/api';
// import { setLoader } from '../../../redux/User/UserActions';
// import { checkInternet, showToastMessage } from '../../../utils/Helper';
// import { HttpStatusCode, LoginType, ScreenName } from '../../../utils/enums';
// import { isNullUndefinedOrEmpty } from '../../../utils/helper/IsNullUndefinedOrEmpty';
// import { encryptData } from '../../../utils/crypto';

// type UseLoginReturnType = {
//   loginCheck: (values: any) => void;
// };
// const useLogin = (navigation: any, selected: any): UseLoginReturnType => {

//   const dispatch = useDispatch();

//   const loginCheck = (values: any) => {
//     dispatch(setLoader(false));
//     const checkInternetStatus = async () => {

//       const isConnected = await checkInternet()
//       if (isConnected) {
//         loginHandler(values);
//       }
//     };
//     checkInternetStatus()
//   };


//   const loginHandler = async (values: any) => {
//     Keyboard.dismiss();

//     let datas = {
//       consumerNo: selected == LoginType.CONSUMER_NUMBER ? values.consumerNo : null,
//       phone: selected == LoginType.PHONE ? values.phone : null,
//       email: selected == LoginType.EMAIL ? values.email : null,
//       type: selected,
//       password: encryptData(values.password)
//     };
//     dispatch(setLoader(true));
    
//     try {
//       const res = await login(datas);
//       const { data = {} } = res;
//       if (data?.code == HttpStatusCode.OK) {
//         navigation.navigate(ScreenName.OTP_SCREEN, { phone: data.data.phone, consumerNo: values.consumerNo, from: ScreenName.LOGIN_SCREEN, datas: datas });
//       }
//       else {
//         showToastMessage("Invalid credentials", 'danger');
//         //showToastMessage(data.message, 'danger');
//       }
//     } catch (error) {
//       if (error.code !== HttpStatusCode.Unauthorized || error.code < HttpStatusCode.NotFound) {
//         showToastMessage("Invalid credentials", 'danger');
//       }
//       else{
//         showToastMessage("Something went wrong! Please try after sometime.", 'danger');
//       }
//     } finally {
//       dispatch(setLoader(false));
//     }
//   };

//   return { loginCheck };
// };

// export default useLogin;
