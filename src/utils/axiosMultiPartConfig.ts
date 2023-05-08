import axios, { AxiosInstance } from "axios";

const axiosMultiPartConfig: AxiosInstance = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
});

axiosMultiPartConfig.defaults.headers.post["Content-Type"] =
  "multipart/form-data";

export default axiosMultiPartConfig;
