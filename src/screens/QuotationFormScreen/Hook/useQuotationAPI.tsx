
import { Keyboard } from 'react-native';
import { useUser } from '../../../ayncStorage/UserContext';
import { checkInternet, showToastMessage } from '../../../utils/Helper';
import { useState } from 'react';
import { HttpStatusCode } from '../../../utils/enums';
import { getDiamondRate } from '../../../api-services/api';
import { QuotationForm } from '../../../utils/types';


const useQuotationAPI = (onRateData: (index: number, rateData: any) => void): { fetchDiamondRate: ({ size, shape, color, clarity, index }) => void } => {

    const { setLoader } = useUser();
    const fetchDiamondRate = ({ size, color, shape, clarity, index }) => {
        console.log(index, 'index');

        setLoader(false);
        const checkInternetStatus = async () => {
            const isConnected = await checkInternet()
            if (isConnected) {
                getDiamondRateHandler({ size, color, shape, clarity, index });
            }
        };
        checkInternetStatus()
    };

    const getDiamondRateHandler = async ({ size, color, shape, clarity, index }) => {
        Keyboard.dismiss();
        setLoader(true);
        try {
            const res = await getDiamondRate(`?size=${size}&color=${color}&purity=${clarity}&shape=${shape}`);
            const { data = {} } = res;

            if (data?.code == HttpStatusCode.OK) {
                onRateData(index, data.data);
            }
            else {
                console.log(data?.message);
                showToastMessage(data?.message, 'danger')
            }
        }
        catch (error) {
            setLoader(false);
            console.log(error, 'error');
            showToastMessage(error.message, 'danger');

        } finally {
            setLoader(false);
        }
    };

    const createQuotation = (values: QuotationForm) => {
        setLoader(false);
        const checkInternetStatus = async () => {
            const isConnected = await checkInternet()
            if (isConnected) {
                createQuotationHandler(values);
            }
        };
        checkInternetStatus()
    };

    const createQuotationHandler = async (values: QuotationForm) => {

    }



    return { fetchDiamondRate };
};

export default useQuotationAPI;
