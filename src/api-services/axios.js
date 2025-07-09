import axios from 'axios';
import {PROD_BASE_URL, PROD_AUTH_URL} from '@env';
import {store} from '../redux/store';
import {loginUser, resetUser} from '../redux/User/UserActions';
import {HttpStatusCode, MessageType} from '../utils/enums';
import {isDebugMode, showToastMessage} from '../utils/Helper';
import {Platform} from 'react-native';
import { isTokenExpiring } from '../utils/helper/TokenExpiring';

const getToken = () => {
  const state = store.getState();
  return state.UserReducer.tokens;
};

const ongoingRequests = {};
const someThingWrong = 'Something went wrong, try after sometime.';
export const apiClient = axios.create({
  baseURL: PROD_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    platform: Platform.OS,
  },
});
let isRefreshing = false; // Flag to indicate if token refresh is in progress
let requestQueue = []; // Queue to hold requests while token is refreshing

const refreshApi=async(newTokens)=>{
  try {
    // Trigger token refresh
    const response = await axios.post(
      `${PROD_BASE_URL}${PROD_AUTH_URL}mobile/auth/refresh-tokens`,
      {refreshToken: newTokens?.refresh?.token},
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    );

    const {data = {}} = response;
    if (data?.code === HttpStatusCode.OK) {
      const res = data.data;
      const userData = {...res.user, id: res.user['_id']};
      res.user = userData;
      // Update the store with new tokens
      store.dispatch(loginUser(res));
    }

    // Process all queued requests
    printErrorLog('Request Queue ===>', requestQueue);

    setTimeout(() => {
      requestQueue.forEach(({resolve}) => {
        resolve();
      });
      printErrorLog('Reset ===>', requestQueue);
      requestQueue = [];
    }, 100);
  } catch (refreshError) {
    printErrorLog('Refresh error ===>', refreshError);
    store.dispatch(resetUser());
    requestQueue.forEach((_, reject) => reject(refreshError));
    requestQueue = [];
    const error = new Error(refreshError);
      error.code = status;
      return Promise.reject(error);
  } finally {
    isRefreshing = false;
  }
}
apiClient.interceptors.request.use(
  async config => {
    const newTokens = getToken();
    
    if (newTokens?.access?.token && !config.url.includes('/auth/')) {
      // Check if the token is expiring
      if (isTokenExpiring(newTokens?.access?.expires)) {
        if (!isRefreshing) {
          isRefreshing = true;
          requestQueue = [];
          refreshApi(newTokens)
        }
        // Queue the current request while waiting for the token refresh
        return new Promise((resolve, reject) => {
          requestQueue.push({resolve, reject});
        }).then(() => {
          const newTokensLatest = getToken();
          // Attach the new token to the header
          config.headers['Authorization'] = `Bearer ${newTokensLatest?.access?.token}`;
          return config;
        });
      } else {
        // If the token is still valid, attach it directly
        config.headers['Authorization'] = `Bearer ${newTokens?.access?.token}`;
      }
    }
    printErrorLog('config ===>', config);
    return config;
  },
  error => {
    printErrorLog('error ===>', error);
    const {response = {}} = error;
    const {status} = response;
    if (
      status >= HttpStatusCode.InternalServerError &&
      status <= HttpStatusCode.NetworkAuthenticationRequired
    ) {
      showToastMessage(someThingWrong);
      const error = new Error(someThingWrong);
      error.code = status;
      return Promise.reject(error);
    }
    return Promise.reject(new Error(error));
  },
);

apiClient.interceptors.response.use(
  (response = {}) => {
    const requestKey = `${response.config.method}_${response.config.url}`;
    delete ongoingRequests[requestKey];
    return response;
  },
  error => {
    const requestKey = `${error.config.method}_${error.config.url}`;
    delete ongoingRequests[requestKey];
    const {response = {}} = error;
    const {data = {}, status} = response;
    if (
      status == HttpStatusCode.Unauthorized ||
      status == HttpStatusCode.SessionExpired
    ) {
      store.dispatch(resetUser());
      showToastMessage(data.message, MessageType.DANGER);
    } else if (
      status >= HttpStatusCode.InternalServerError &&
      status <= HttpStatusCode.NetworkAuthenticationRequired
    ) {
      printErrorLog('NETWORK ERROR', status);
      showToastMessage(someThingWrong, MessageType.DANGER);
      data.code = status;
      data.message = someThingWrong;
    }
    const errorreject = new Error(data.message);
    errorreject.code = data.code;
      return Promise.reject(errorreject);
  },
);

const printErrorLog = (key, value) => {
  if(isDebugMode){
    if (value) {
      console.log(key, value);
    } else {
      console.log(key);
    }
  }  
};

export default apiClient;
