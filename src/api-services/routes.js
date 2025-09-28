import AppConstants from "../app-res/AppConstants";
import { PROD_BASE_URL } from '@env';

export const routes = {

    LOGIN_USER: {
        METHOD: AppConstants.API_METHOD.POST,
        URL: PROD_BASE_URL + 'auth/login',
    },
    GET_GOLD_RATE: {
        METHOD: AppConstants.API_METHOD.GET,
        URL: PROD_BASE_URL + 'gold/gold-price?metal=XAU&currency=INR',
    },
    GET_GOLD_RATE_FROM_DATABASE: {
        METHOD: AppConstants.API_METHOD.GET,
        URL: PROD_BASE_URL + 'gold/get-all-get',
    },
    GET_DROPDOWN: {
        METHOD: AppConstants.API_METHOD.GET,
        URL: PROD_BASE_URL + 'diamonds/dropdowns',
    },
    GET_DIMOND_RATE: {
        METHOD: AppConstants.API_METHOD.GET,
        URL: PROD_BASE_URL + 'diamonds/price',
    },
    CREATE_QUOTATION: {
        METHOD: AppConstants.API_METHOD.POST,
        URL: PROD_BASE_URL + 'quotation/submit',
    },
    UPDATE_QUOTATION: {
        METHOD: AppConstants.API_METHOD.PUT,
        URL: PROD_BASE_URL + 'quotation/',
    },
    GET_QUOTATION_HISTORY: {
        METHOD: AppConstants.API_METHOD.GET,
        URL: PROD_BASE_URL + 'quotation/',
    },
    CREATE_ORDER: {
        METHOD: AppConstants.API_METHOD.POST,
        URL: PROD_BASE_URL + 'order/place-order',
    },
    GET_ORDER_HISTORY: {
        METHOD: AppConstants.API_METHOD.GET,
        URL: PROD_BASE_URL + 'order/history/',
    },
    GET_DASHBOARD_SUMMERY: {
        METHOD: AppConstants.API_METHOD.GET,
        URL: PROD_BASE_URL + 'order/summary',
    },
    GET_SIZE_RANGE: {
        METHOD: AppConstants.API_METHOD.GET,
        URL: PROD_BASE_URL + 'diamonds/diamond-sizes?',
    },

};

