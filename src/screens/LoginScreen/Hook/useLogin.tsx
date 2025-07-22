
import { Keyboard } from 'react-native';
import { login } from '../../../api-services/api';
import { checkInternet, showToastMessage } from '../../../utils/Helper';
import { HttpStatusCode } from '../../../utils/enums';
import { useUser } from '../../../ayncStorage/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

type UseLoginReturnType = {
    loginCheck: (values: any) => void;
};
const useLogin = (navigation: any): UseLoginReturnType => {

  const { setLoader, setUser } = useUser();

    const loginCheck = (values: any) => {
        setLoader(false);
        const checkInternetStatus = async () => {
            const isConnected = await checkInternet()
            if (isConnected) {
                loginHandler(values);
            }
        };
        checkInternetStatus()
    };


    const loginHandler = async (values: any) => {
        Keyboard.dismiss();

        let datas = {
            mobile: values.phone,
            password: values.password
        };
        setLoader(true);

        try {
            const res = await login(datas);
            const { data = {} } = res;
            if (data?.code == HttpStatusCode.OK) {                
                const userDetails = data.data.user;
                setUser(userDetails);
                await AsyncStorage.setItem('user', JSON.stringify(userDetails));
                showToastMessage(data.message, 'success');
                navigation.navigate('HomeScreen');
            }
            else {
                console.log('here');
                showToastMessage(data.message, 'danger');
            }
        } catch (error) {
            setLoader(false);
            showToastMessage(JSON.stringify(error?.message), 'danger');
        } finally {
            setLoader(false);
        }
    };

    return { loginCheck };
};

export default useLogin;
