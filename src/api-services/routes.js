import AppConstants from "../app-res/AppConstants";
import { PROD_BASE_URL } from '@env';

console.log('API Base URL:', PROD_BASE_URL);


export const routes = {
    
    LOGIN_USER: {
        METHOD: AppConstants.API_METHOD.POST,
        URL: PROD_BASE_URL+'auth/login',
    },
    GET_GOLD_RATE: {
        METHOD: AppConstants.API_METHOD.GET,
        URL: PROD_BASE_URL+'gold/gold-price?metal=XAU&currency=INR',
    },
    GET_DROPDOWN: {
        METHOD: AppConstants.API_METHOD.GET,
        URL: PROD_BASE_URL+'diamonds/dropdowns',
    },
    GET_DIMOND_RATE: {
        METHOD: AppConstants.API_METHOD.GET,
        URL: PROD_BASE_URL+'diamonds/price',
    },
  
};

