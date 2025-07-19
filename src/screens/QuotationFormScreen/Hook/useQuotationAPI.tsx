
import { Keyboard } from 'react-native';
import { useUser } from '../../../ayncStorage/UserContext';
import { checkInternet } from '../../../utils/Helper';

type UseQuotationReturnType = {
    goldRate: () => void;
};
const useQuotationAPI = (navigation: any): UseQuotationReturnType => {

    const { setLoader, setUser } = useUser();

    const goldRate = () => {
        setLoader(false);
        const checkInternetStatus = async () => {
            const isConnected = await checkInternet()
            if (isConnected) {
                getGoldRate();
            }
        };
        checkInternetStatus()
    };


    const getGoldRate = async () => {
        Keyboard.dismiss();
        setLoader(true);

        try {
          //  const res = await login(datas);
            
        } catch (error) {
            setLoader(false);
        } finally {
            setLoader(false);
        }
    };

    return { goldRate };
};

export default useQuotationAPI;
