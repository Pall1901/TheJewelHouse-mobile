
import { DeviceEventEmitter, Keyboard } from 'react-native';
import { createOrder, login } from '../../../api-services/api';
import { checkInternet, showToastMessage } from '../../../utils/Helper';
import { HttpStatusCode } from '../../../utils/enums';
import { useUser } from '../../../ayncStorage/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

type UseOrderReturnType = {
    placeOrder: (values: any, id: any) => void;
};
const useOrder = (navigation: any): UseOrderReturnType => {
    const today = new Date();
    const formattedDate = today.toISOString().slice(0, 10);

    const { setLoader, user } = useUser();

    const placeOrder = (values: any, id: any) => {
        setLoader(false);
        const checkInternetStatus = async () => {
            const isConnected = await checkInternet()
            if (isConnected) {
                OrderHandler(values, id);
            }
        };
        checkInternetStatus()
    };


    const OrderHandler = async (values: any, id: any) => {
        Keyboard.dismiss();
        const data = {
            "name": values.name,
            "email": values.email,
            "contactNumber": values.contactNumber,
            "address": values.address,
            "city": values.city,
            "pinCode": values.pinCode,
            "aadhaarNumber": values.aadhaarNumber,
            "panCardNumber": values.panCardNumber,
            "expectedDeliveryDate": values.expectedDeliveryDate,
        }

        let datas = {
            userId: user?.id,
            quotationId: id,
            orderDate: formattedDate,
            customerDetails: data
        };
        console.log(datas, 'data');

        setLoader(true);

        try {
            const res = await createOrder(datas);
            const { data = {} } = res;
            if (data?.code == HttpStatusCode.Created) {
                showToastMessage(data.message, 'success');
                navigation.pop(2); // or as needed
                DeviceEventEmitter.emit("event.orderPlaced", { submit: true });
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

    return { placeOrder };
};

export default useOrder;
