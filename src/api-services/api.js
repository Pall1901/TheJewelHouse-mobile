import apiClient from './axios';
import { routes } from './routes';

export const login = (requestBody = undefined) =>
  apiClient({
    method: routes.LOGIN_USER.METHOD,
    url: routes.LOGIN_USER.URL,
    data: requestBody,
  });

