import axios, { AxiosRequestConfig } from "axios";

axios.defaults.headers.common["Content-Type"] =
  "application/x-www-form-urlencoded";

const apiConfig: AxiosRequestConfig = {
  baseURL: "http://localhost:3000",

  headers: { "Content-Type": "application/json" },
};

export default apiConfig;
