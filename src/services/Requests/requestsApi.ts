import axiosConfig from "../../utils/axiosConfig";

export const fetchRequests = async (type?: string) => {
  const result = await axiosConfig.get("/request", { params: { type } });
  return result.data;
};

export const fetchRequest = async (id) => {
  const result = await axiosConfig.get("/request/" + id);
  return result.data;
};

export const deleteRequest = async (id) => {
  const result = await axiosConfig.delete("/request/" + id);
  return result.data;
};

export const updateRequest = async ({ id, requestData }) => {
  const result = await axiosConfig.patch("/request/" + id, requestData);
  return result.data;
};

export const createRequest = async (requestData) => {
  const result = await axiosConfig.post("/request", requestData);
  return result.data;
};
