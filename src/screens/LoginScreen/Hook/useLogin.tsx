
import { Keyboard } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../../../api-services/api';
import { loginUser, setLoader } from '../../../redux/User/UserActions';
import { checkInternet, showToastMessage } from '../../../utils/Helper';
import { HttpStatusCode } from '../../../utils/enums';

type UseLoginReturnType = {
    loginCheck: (values: any) => void;
};
const useLogin = (navigation: any): UseLoginReturnType => {

    const dispatch = useDispatch();

    const loginCheck = (values: any) => {
        dispatch(setLoader(false));
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
        dispatch(setLoader(true));

        try {
            const res = await login(datas);
            const { data = {} } = res;
            if (data?.code == HttpStatusCode.OK) {
                console.log(data.data);
                dispatch(loginUser(data.data.user));
                // dispatch(setRole(selected))
            }
            else {
                showToastMessage(data.message, 'danger');
            }
        } catch (error) {
            dispatch(setLoader(false));
            console.log('error', error);
            showToastMessage(JSON.stringify(error?.message), 'danger');
        } finally {
            dispatch(setLoader(false));
        }
    };

    return { loginCheck };
};

export default useLogin;
