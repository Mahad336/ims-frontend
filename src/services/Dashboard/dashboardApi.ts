import axiosConfig from "../../utils/axiosConfig";

export const fetchDashboardStats = async () => {
  const result = await axiosConfig.get("/dashboard");
  return result.data;
};

export const fetchDashboardGraphData = async () => {
  const result = await axiosConfig.get("/dashboard/graph-data");
  return result.data;
};
