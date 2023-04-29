import axiosConfig from "../../utils/axiosConfig";

export const fetchVendors = async () => {
  const result = await axiosConfig.get("/vendor");
  return result.data;
};
