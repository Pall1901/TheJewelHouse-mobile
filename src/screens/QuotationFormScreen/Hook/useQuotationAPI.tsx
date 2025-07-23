
import { Keyboard } from 'react-native';
import { useUser } from '../../../ayncStorage/UserContext';
import { checkInternet, showToastMessage } from '../../../utils/Helper';
import { useState } from 'react';
import type { DownloadResult } from 'react-native-fs';
import { HttpStatusCode } from '../../../utils/enums';
import { createQuotation, getDiamondRate } from '../../../api-services/api';
import { QuotationForm } from '../../../utils/types';
import RNFS from 'react-native-fs';

type UseQuotationReturnType = {
    fetchDiamondRate: (size: any, color: any, shape: any, clarity: any, index: any) => void
    submitQuotation: (values: any) => void;
    downloadResult: DownloadResult | null
    downloadPath : any
};


const useQuotationAPI = (onRateData: (index: number, rateData: any) => void, openModal: any,): UseQuotationReturnType => {
    const { setLoader, user } = useUser();
    const [downloadResult, setDownloadResult] = useState<DownloadResult | null>(null);
    const [downloadPath, setDownloadPath] = useState('')
    const today = new Date();
    const formattedDate = today.toISOString().slice(0, 10);



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

    const submitQuotation = (values: QuotationForm) => {
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

        let datas = {
            userId: user?.id,
            date: formattedDate,
            ...values
        };
        console.log(datas, 'datas');

        setLoader(true);
        try {
            const res = await createQuotation(datas);
            const { data = {} } = res;

            if (data?.code == HttpStatusCode.Created) {
                console.log(data.data.pdfUrl);
                //setPdfUrl(data.data.pdfUrl)
                const url = `http://62.72.33.172:4000${data.data.pdfUrl}`
                const baseName = (url.split('/').pop() || 'quotation').replace('.pdf', '');
                const uniqueName = `${baseName}_${Date.now()}.pdf`;
                const downloadPath = `${RNFS.DownloadDirectoryPath}/${uniqueName}`;
                const downloadResult1 = await RNFS.downloadFile({
                    fromUrl: url,
                    toFile: downloadPath,
                }).promise;

                setDownloadResult(downloadResult1)
                setDownloadPath(downloadPath)
                openModal();
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
    }



    return { fetchDiamondRate, submitQuotation, downloadResult, downloadPath };
};

export default useQuotationAPI;
