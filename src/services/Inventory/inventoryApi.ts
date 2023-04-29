import axiosConfig from "../../utils/axiosConfig";

export const fetchItems = async () => {
  const result = await axiosConfig.get("/item");
  return result.data;
};
