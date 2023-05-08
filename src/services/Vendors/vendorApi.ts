import axiosConfig from "../../utils/axiosConfig";

export const fetchVendors = async () => {
  const result = await axiosConfig.get("/vendor");
  return result.data;
};

export const fetchVendor = async (id) => {
  const result = await axiosConfig.get("/vendor/" + id);
  return result.data;
};

export const updateVendor = async ({ id, data }) => {
  const result = await axiosConfig.patch("/vendor/" + id, data);
  return result.data;
};

export const deleteVendor = async (id) => {
  const result = await axiosConfig.delete("/vendor/" + id);
  return result.data;
};

export const CreateVendor = async (vendorData) => {
  const result = await axiosConfig.post("/vendor", vendorData);
  return result.data;
};
