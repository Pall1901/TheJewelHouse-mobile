// GET Login Request

import Axios, { AxiosError, AxiosResponse } from "axios";

export function postRequest(statusApi: string, data: any): Promise<AxiosResponse<any>> {
    return Axios.post(statusApi, data).then((d: AxiosResponse) => d.data)
}

export function postRequestWithHeader(statusApi: string, data: any, header : any): Promise<AxiosResponse<any>> {
    return Axios.post(statusApi, data, header).then((d: AxiosResponse) => d.data)
}

export function putRequestWithHeader(statusApi: string, data: any, header : any): Promise<AxiosResponse<any>> {
    return Axios.put(statusApi, data, header).then((d: AxiosResponse) => d.data)
}

export function getRequest(statusApi: string, header: any): Promise<AxiosResponse<any>> {
    
    return Axios.get(statusApi, header).then((d: AxiosResponse) => d.data).catch((e: AxiosError) => e.response?.data);
}
