import axios, { AxiosInstance } from "axios";

const axiosConfig: AxiosInstance = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
});

axiosConfig.defaults.headers.post["Content-Type"] = "application/json";

export default axiosConfig;
