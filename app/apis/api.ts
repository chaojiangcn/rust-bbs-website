import Error from 'next/error';
import axiosInstance from './axiosInstance';
// import { toast } from "react-toastify";


// 定义响应数据的类型
interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
}

// GET 请求封装
export const getRequest = async <T, P = {}>(url: string, params: P, headers?:{[key:string]:string}): Promise<ApiResponse<T>> => {
  try {
    const response = await axiosInstance.get<T>(url, { params, headers });
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    };
  } catch (error: any) {
    // toast.error(error.response?.data.message || 'GET request failed');
    // 错误处理
    throw new Error(error.response?.data.message || 'GET request failed');
  }
};

// POST 请求封装
export const postRequest = async <T, D = {}>(url: string, data?: D): Promise<ApiResponse<T>> => {
  try {
    const response = await axiosInstance.post<T>(url, data);
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    };
  } catch (error: any) {
    // toast.error(error.response?.data.message || 'POST request failed');
    // 错误处理
    throw new Error(error.response?.data.message || 'POST request failed');
  }
};

export const putRequest = async <T, D = {}>(url: string, data?: D): Promise<ApiResponse<T>> => {
  try {
    const response = await axiosInstance.put<T>(url, data);
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    };
  } catch (error: any) {
    // toast.error(error.response?.data.message || 'PUT request failed');
    // 错误处理
    throw new Error(error.response?.data.message || 'PUT request failed');
  }
};

// DELETE 请求封装
export const deleteRequest = async <T>(url: string): Promise<ApiResponse<T>> => {
  try {
    const response = await axiosInstance.delete<T>(url);
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    };
  } catch (error: any) {
    // toast.error(error.response?.data.message || 'DELETE request failed');
    // 错误处理
    throw new Error(error.response?.data.message || 'DELETE request failed');
  }
};
