import { useState } from 'react';
import { showToastMessage } from '../../../utils/Helper';
import { HttpStatusCode } from '../../../utils/enums';
import { useUser } from '../../../ayncStorage/UserContext';
import { getOrderHistoryList } from '../../../api-services/api';


type useOrderHistoryReturnType = {
    getOrderList: (isRefresh?: boolean) => void;
    orderList: any[];
    loading: boolean;
    hasMore: boolean;
};
const useOrderHistory = (): useOrderHistoryReturnType => {
    const {user} = useUser()
    const [orderList, setOrderList] = useState<any[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const getOrderList = (isRefresh = false) => {
        getOrderListHandler(isRefresh)
    };

    const getOrderListHandler = async (isRefresh = false) => {

        if (loading || (!hasMore && !isRefresh)) return;

        if (isRefresh) {
            setPage(1);
            setHasMore(true);
            setOrderList([]);
        }

        const nextPage = isRefresh ? 1 : page;
        const query = `${user?.id}?page=${nextPage}&items_per_page=10`;
        
        setLoading(true);
        try {
            const res = await getOrderHistoryList(query);
            const { data = {} } = res;

            if (data?.code === HttpStatusCode.OK) {                
                const newData = data.orders || [];
                setOrderList(prev => (nextPage === 1 ? newData : [...(prev || []), ...newData]));
                setPage(nextPage + 1);
                if (newData.length < 10) setHasMore(false);
            } else {
                 setHasMore(false)
                showToastMessage(data.message, 'danger');
            }
        } catch (error: any) {
            setHasMore(false)
            showToastMessage(error.message, 'danger');
        } finally {
            setLoading(false);
        }

    };

   

    return { getOrderList, orderList, loading, hasMore };

};

export default useOrderHistory;
