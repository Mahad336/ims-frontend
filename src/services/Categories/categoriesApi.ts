import axiosConfig from "../../utils/axiosConfig";

export const fetchCategories = async () => {
  const result = await axiosConfig.get("/category");
  return result.data;
};

export const fetchCategory = async (id) => {
  const result = await axiosConfig.get("/category/" + id);
  return result.data;
};

export const deleteCategory = async (id) => {
  const result = await axiosConfig.delete("/category/" + id);
  return result.data;
};

export const updateCategory = async ({ id, categoryData }) => {
  const result = await axiosConfig.patch("/category/" + id, categoryData);
  return result.data;
};

export const createCategory = async (categoryData) => {
  const result = await axiosConfig.post("/category", categoryData);
  return result.data;
};
