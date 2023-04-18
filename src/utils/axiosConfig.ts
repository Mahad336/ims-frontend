import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
});

instance.defaults.headers.post["Content-Type"] = "application/json";

export default instance;
