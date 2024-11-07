import { ApiResponse } from "@/types";
import axios, { AxiosRequestConfig } from "axios";

export async function axiosGet<T = any>(url: string, config?: AxiosRequestConfig) {
    const authScheme = localStorage.getItem("authScheme");
    const token = localStorage.getItem("token");

    const response = await axios.get<ApiResponse<T>>(url, {
        ...config,
        ...(authScheme && token && {
            headers: {
                "Authorization": `${authScheme} ${token}`
            }
        })
    });
    return response.data.data;
}

export async function axiosPost<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    const authScheme = localStorage.getItem("authScheme");
    const token = localStorage.getItem("token");

    const response = await axios.post<ApiResponse<T>>(url, data, {
        ...config,
        ...(authScheme && token && {
            headers: {
                "Authorization": `${authScheme} ${token}`
            }
        })
    });
    return response.data.data;
}

export async function axiosPut<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    const authScheme = localStorage.getItem("authScheme");
    const token = localStorage.getItem("token");

    const response = await axios.put<ApiResponse<T>>(url, data, {
        ...config,
        ...(authScheme && token && {
            headers: {
                "Authorization": `${authScheme} ${token}`
            }
        })
    });
    return response.data.data;
}

export async function axiosDelete<T = any>(url: string, config?: AxiosRequestConfig) {
    const authScheme = localStorage.getItem("authScheme");
    const token = localStorage.getItem("token");
    
    const response = await axios.delete<ApiResponse<T>>(url, {
        ...config,
        ...(authScheme && token && {
            headers: {
                "Authorization": `${authScheme} ${token}`
            }
        })
    });
    return response.data.data;
}
