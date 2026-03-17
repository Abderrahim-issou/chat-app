import { useEffect } from "react"
import axiosPrivate from "../utils/axiosPrivate"
import useAuth from "./useAuth";
import type { InternalAxiosRequestConfig } from "axios";
import { InternalAxiosRequestConfig as obj }  from "axios";
import type { AxiosResponse } from "axios";
import type { AxiosError } from "axios";
import useRefresh from "./useRefresh";

interface customAxiosRequestConfig extends obj {
    _retry: boolean;
}


const axiosInterceptors = async () => {
    const auth = useAuth();
    const refresh = useRefresh();

    useEffect(() => {

        const requestInterceptor = axiosPrivate.interceptors.request.use((config: InternalAxiosRequestConfig) => {
            const token = auth.data?.token;
            if(!token){
                throw Error('you are not authenticated');
            }
            if(!config.headers['Authorization']){
                config.headers['Authorization'] = `Bearer ${token}`;
            }
            return config;
        },
        (err: AxiosError) => Promise.reject(err));


        const responseInterceptor = axiosPrivate.interceptors.response.use(
        (response: AxiosResponse) => response,
        async (error: AxiosError) => {
            
            const prevRequest = error.config as customAxiosRequestConfig;
            if(error.response?.status === 403 || !prevRequest._retry) {
                prevRequest._retry= true;
                const token = refresh();
                prevRequest.headers['Authorization'] = `Bearer ${token}`;
                return axiosPrivate(prevRequest);
            }
            return Promise.reject(error);
        });

        return () => {
            axiosPrivate.interceptors.request.eject(requestInterceptor);
            axiosPrivate.interceptors.response.eject(responseInterceptor);
        }
    });   
}

export default axiosInterceptors;
