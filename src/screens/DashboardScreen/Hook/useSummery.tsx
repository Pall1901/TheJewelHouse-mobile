import { useState } from 'react'
import { getDashboardSummery } from '../../../api-services/api'
import { useUser } from '../../../ayncStorage/UserContext'
import { HttpStatusCode } from '../../../utils/enums'
import { checkInternet } from '../../../utils/Helper'

type useSummeryReturnType =  {
    getSummery: () => void;
    summery : any;
}

const useSummery = () : useSummeryReturnType => {
    const {setLoader, user} = useUser()
    const [summery, setSummery] = useState()

    const getSummery = () => {
        setLoader(false);
        const checkInternetStatus = async () => {
            const isConnected = await checkInternet()
            if (isConnected) {
                getSummeryHandler();
            }
        };
        checkInternetStatus()
    }

    const getSummeryHandler = async () => {
        setLoader(true)
        try {
            const response = await getDashboardSummery(`?userId=${user?.id}`)
            const { data = {} } = response;
             if (data?.code == HttpStatusCode.OK) {   
                setSummery(data.data);
                console.log(data.data);
                
            }
        }
        catch (error) {
            console.error(error)
        }
        finally{
            setLoader(false)
        }
    }
    return {getSummery, summery}
}


export default useSummery
