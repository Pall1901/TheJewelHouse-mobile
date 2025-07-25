import apiClient from './axios';
import { routes } from './routes';

export const login = (requestBody) =>
  apiClient({
    method: routes.LOGIN_USER.METHOD,
    url: routes.LOGIN_USER.URL,
    data: requestBody,
  });

export const getGoldRate = (requestBody) =>
  apiClient({
    method: routes.GET_GOLD_RATE.METHOD,
    url: routes.GET_GOLD_RATE.URL,
    data: requestBody,
  });

export const getDropdown = (requestBody) =>
  apiClient({
    method: routes.GET_DROPDOWN.METHOD,
    url: routes.GET_DROPDOWN.URL,
    data: requestBody,
  });
export const getDiamondRate = (params = '', requestBody) =>
  apiClient({
    method: routes.GET_DIMOND_RATE.METHOD,
    url: routes.GET_DIMOND_RATE.URL + params,
    data: requestBody,
  });
export const createQuotation = (requestBody) =>
  apiClient({
    method: routes.CREATE_QUOTATION.METHOD,
    url: routes.CREATE_QUOTATION.URL,
    data: requestBody,
  });

  export const getQuotationHistoryList = (params = '', requestBody) =>
  apiClient({
    method: routes.GET_QUOTATION_HISTORY.METHOD,
    url: routes.GET_QUOTATION_HISTORY.URL + params,
    data: requestBody,
  });

  export const createOrder = (requestBody) =>
  apiClient({
    method: routes.CREATE_ORDER.METHOD,
    url: routes.CREATE_ORDER.URL,
    data: requestBody,
  });

