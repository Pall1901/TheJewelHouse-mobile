import AppConstants from "../app-res/AppConstants";
import { PROD_BASE_URL } from '@env';

console.log('API Base URL:', PROD_BASE_URL);


export const routes = {
    
    LOGIN_USER: {
        METHOD: AppConstants.API_METHOD.POST,
        URL: PROD_BASE_URL+'auth/login',
    },
  
};

