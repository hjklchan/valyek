import axios, { InternalAxiosRequestConfig, AxiosRequestConfig, AxiosResponse, AxiosError, } from "axios";
import { ResponseType } from "./index.d";

// create axios instance
const instance = axios.create();

// request interceptor
instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        return config;
    },
    (error: any) => {
        console.log("request", error)
        Promise.reject(error)
    },
);

// response interceptor
instance.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error: AxiosError<ResponseType<any>>) => {
        // Handle server network error
        if (error.code === AxiosError.ERR_NETWORK) {
        }
        // Handle app error
        if (error.response != undefined) {
            let { data, status } = error.response;
        }
        Promise.reject(error);
    }
);

// httpGet is GET method
export const httpGet = <T>(url: string, config?: AxiosRequestConfig) =>
    instance.get<ResponseType<T>>(url, config);

// httpPost is POST method
export const httpPost = <T>(url: string, data: any, config?: AxiosRequestConfig) =>
    instance.post<ResponseType<T>>(url, data, config);

// httpPut is PUT method
export const httpPut = <T>(url: string, data: any, config?: AxiosRequestConfig) =>
    instance.put<ResponseType<T>>(url, data, config);

// httpDelete is DELETE method
export const httpDelete = <T>(url: string, config?: AxiosRequestConfig) =>
    instance.delete<ResponseType<T>>(url, config);
