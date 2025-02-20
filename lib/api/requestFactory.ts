import apiConfig from "./config";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export const API = axios.create(apiConfig);
API.interceptors.request.use(
  (config) => {
    config.params = config.params || {};
    return config;
  },
  (error: AxiosError) => Promise.reject(error.response)
);

API.interceptors.response.use(
  (response) => {
    return {
      data: response.data,
      status: response.status,
    } as AxiosResponse<any>;
  },
  (error: AxiosError) => Promise.reject(error.response)
);

export const requestHandler = async (request: AxiosRequestConfig) => {
  const { data } = await API.request(request);
  return data;
};
