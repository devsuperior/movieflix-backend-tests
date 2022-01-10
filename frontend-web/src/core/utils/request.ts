import axios, { AxiosRequestConfig } from 'axios';
import { CLIENT_ID, CLIENT_SECRET, getSessionData } from './auth';
import qs from 'qs';

type LoginData = {
    username: string;
    password: string;
}

export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';

export const makeRequest = (params: AxiosRequestConfig) => {
    return axios({
    
        baseURL : BASE_URL,
        ...params
        
    });
}

export const makePrivateRequest = (params: AxiosRequestConfig) => {
    const sessionData = getSessionData();

    const headers = {
        'Authorization': `Bearer ${sessionData.access_token}`
    }

    return makeRequest({ ... params, headers});
}

export const makeLogin = (loginData: LoginData) => {
   const token = `${CLIENT_ID}:${CLIENT_SECRET}`;

   const headers = {
       Authorization: `Basic ${window.btoa(token)}`,
       'Content-Type': 'application/x-www-form-urlencoded'
   }

   const payload = qs.stringify({ ...loginData, grant_type: 'password' });

   return makeRequest({ url: '/oauth/token', data: payload, method: 'POST', headers });
}
