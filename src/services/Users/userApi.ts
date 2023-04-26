import axiosConfig from "../../utils/axiosConfig";

export const fetchUsers = async () => {
  const result = await axiosConfig.get("/user");
  return result.data;
};
