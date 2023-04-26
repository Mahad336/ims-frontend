import axiosConfig from "../../utils/axiosConfig";

export const fetchOrganizations = async () => {
  const result = await axiosConfig.get("/organization");
  return result.data;
};
