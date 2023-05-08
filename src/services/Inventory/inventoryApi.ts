import axiosConfig from "../../utils/axiosConfig";

export const fetchItems = async () => {
  const result = await axiosConfig.get("/item");
  return result.data;
};

export const fetchItem = async (id) => {
  const result = await axiosConfig.get("/item/" + id);
  return result.data;
};

export const deleteItem = async (id) => {
  const result = await axiosConfig.delete("/item/" + id);
  return result.data;
};

export const createItem = async (itemData) => {
  const result = await axiosConfig.post("/item", itemData);
  return result.data;
};

export const updateItem = async ({ id, itemData }) => {
  const result = await axiosConfig.patch(`/item/${id}`, itemData);
  return result.data;
};
