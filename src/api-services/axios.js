import axios from 'axios';
import { PROD_BASE_URL } from '@env';
import { HttpStatusCode, MessageType } from '../utils/enums';
import { showToastMessage } from '../utils/Helper';

const ongoingRequests = {};
const someThingWrong = 'Something went wrong, try after sometime.';

export const apiClient = axios.create({
  baseURL: PROD_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
  },
});

console.log('API Base URL:', PROD_BASE_URL);

// Request interceptor
apiClient.interceptors.request.use(
  async (config) => {
    printErrorLog('Request config ===>', config);

    const requestKey = `${config.method}_${config.url}`;
    
    // Cancel ongoing duplicate requests
    if (ongoingRequests[requestKey]) {
      ongoingRequests[requestKey].cancel('Duplicate request');
    }

    const source = axios.CancelToken.source();
    config.cancelToken = source.token;
    ongoingRequests[requestKey] = source;

    // === Future token logic ===
    // const state = store.getState();
    // const tokens = state.UserReducer.tokens;
    // if (tokens?.access?.token) {
    //   config.headers.Authorization = `Bearer ${tokens.access.token}`;
    // }

    return config;
  },
  (error) => {
    const { response = {} } = error;
    const { status } = response;

    if (
      status >= HttpStatusCode.InternalServerError &&
      status <= HttpStatusCode.NetworkAuthenticationRequired
    ) {
      showToastMessage(someThingWrong);
      return Promise.reject({ code: status, message: someThingWrong });
    }

    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response = {}) => {
    const requestKey = `${response.config.method}_${response.config.url}`;
    delete ongoingRequests[requestKey];
    return response;
  },
  (error) => {
    const requestKey = `${error.config?.method}_${error.config?.url}`;
    delete ongoingRequests[requestKey];

    const { response = {} } = error;
    const { data = {}, status } = response;

    if (status === HttpStatusCode.Unauthorized) {
      // store.dispatch(resetUser());
      showToastMessage(data.message, MessageType.DANGER);
    } else if (
      status >= HttpStatusCode.InternalServerError &&
      status <= HttpStatusCode.NetworkAuthenticationRequired
    ) {
      showToastMessage(someThingWrong, MessageType.DANGER);
      data.code = status;
      data.message = someThingWrong;
    } else if (status === HttpStatusCode.NotFound) {
      data.code = HttpStatusCode.NotFound;
      data.message = 'No record found';
    }

    return Promise.reject(data);
  }
);

// Utility logger
const printErrorLog = (key, value) => {
  console.log(key, value || '');
};

export default apiClient;
