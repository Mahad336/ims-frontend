import axiosConfig from "../../utils/axiosConfig";

export const fetchComplaints = async () => {
  const result = await axiosConfig.get("/complaint");
  return result.data;
};
