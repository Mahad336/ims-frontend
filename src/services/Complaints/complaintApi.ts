import axiosConfig from "../../utils/axiosConfig";
import axiosMultiPartConfig from "../../utils/axiosMultiPartConfig";

export const fetchComplaints = async () => {
  const result = await axiosConfig.get("/complaint");
  return result.data;
};

export const fetchComplaint = async (id) => {
  const result = await axiosConfig.get("/complaint/" + id);
  return result.data;
};

export const deleteComplaint = async (id) => {
  const result = await axiosConfig.delete("/complaint/" + id);
  return result.data;
};

export const updateComplaint = async ({ id, complaintData }) => {
  const result = await axiosConfig.patch("/complaint/" + id, complaintData);
  return result.data;
};

export const createComplaint = async (complaintData) => {
  const result = await axiosMultiPartConfig.post("/complaint", complaintData);
  return result.data;
};
