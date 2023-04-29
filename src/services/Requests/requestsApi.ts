import axiosConfig from "../../utils/axiosConfig";

export const fetchRequests = async (type?: string) => {
  const result = await axiosConfig.get("/request", { params: { type } });
  return result.data;
};
