import axiosConfig from "../../utils/axiosConfig";
import axiosMultiPartConfig from "../../utils/axiosMultiPartConfig";

export const fetchUsers = async () => {
  const result = await axiosConfig.get("/user");
  return result.data;
};

export const fetchUser = async (id) => {
  const result = await axiosConfig.get("/user/" + id);
  return result.data;
};

export const deleteUser = async (id) => {
  const result = await axiosConfig.delete("/user/" + id);
  return result.data;
};

export const updateUser = async ({ id, userData }) => {
  const result = await axiosConfig.patch("/user/" + id, userData);
  return result.data;
};

export const CreateUser = async (userData) => {
  const result = await axiosMultiPartConfig.post("/user", userData);
  return result.data;
};
