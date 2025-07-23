import { useState } from 'react';
import { showToastMessage } from '../../../utils/Helper';
import { HttpStatusCode } from '../../../utils/enums';
import { useUser } from '../../../ayncStorage/UserContext';
import { getQuotationHistoryList } from '../../../api-services/api';


type useQuotationHistoryReturnType = {
    getQuotationList: (isRefresh?: boolean) => void;
    quotationList: any[];
    loading: boolean;
    hasMore: boolean;
};
const useQuotationHistory = (): useQuotationHistoryReturnType => {
    const {setLoader, user} = useUser()
    const [quotationList, setQuotationList] = useState<any[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const getQuotationList = (isRefresh = false) => {
        getQuotationListHandler(isRefresh)
    };

    const getQuotationListHandler = async (isRefresh = false) => {
        setLoader(true)
        const query = `${user?.id}`;
        
        try {
            const res = await getQuotationHistoryList(query);
            const { data = {} } = res;

            if (data?.code === HttpStatusCode.OK) {                
                const newData = data.data || [];
                setQuotationList(newData);
                
            } else {
                showToastMessage(data.message, 'danger');
            }
        } catch (error: any) {
            showToastMessage(error.message, 'danger');
        } finally {
            setLoader(false);
        }

    };

    // const getQuotationListHandler = async (isRefresh = false) => {

    //     if (loading || (!hasMore && !isRefresh)) return;

    //     if (isRefresh) {
    //         setPage(1);
    //         setHasMore(true);
    //         setQuotationList([]);
    //     }

    //     const nextPage = isRefresh ? 1 : page;
    //     const query = `${user?.id}?page=${nextPage}&items_per_page=10`;
    //     console.log(query,'query');
        
    //     setLoading(true);
    //     //if (nextPage === 1) setLoader(true);

    //     try {
    //         const res = await getQuotationHistoryList(query);
    //         const { data = {} } = res;

    //         if (data?.code === HttpStatusCode.OK) {                
    //             const newData = data.data || [];
    //             setQuotationList(prev => (nextPage === 1 ? newData : [...(prev || []), ...newData]));
    //             setPage(nextPage + 1);
    //             if (newData.length < 10) setHasMore(false);
    //         } else {
    //             showToastMessage(data.message, 'danger');
    //         }
    //     } catch (error: any) {
    //         showToastMessage(error.message, 'danger');
    //     } finally {
    //         setLoading(false);
    //         //setLoader(false);
    //     }

    // };

   

    return { getQuotationList, quotationList, loading, hasMore };

};

export default useQuotationHistory;
