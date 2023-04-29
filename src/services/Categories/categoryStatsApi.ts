import axiosConfig from "../../utils/axiosConfig";

export const fetchCategoryStats = async () => {
  const result = await axiosConfig.get("/category/stats");
  return result.data;
};
