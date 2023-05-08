import axiosConfig from "../../utils/axiosConfig";
import axiosMultiPartConfig from "../../utils/axiosMultiPartConfig";

export const fetchOrganizations = async () => {
  const result = await axiosConfig.get("/organization");
  return result.data;
};

export const fetchOrganization = async (id: string) => {
  const result = await axiosConfig.get(`/organization/${id}`);
  return result.data;
};

export const deleteOrganization = async (id: string) => {
  const result = await axiosConfig.delete(`/organization/${id}`);
  return result.data;
};

export const updateOrganization = async ({ id, orgData }) => {
  const result = await axiosMultiPartConfig.patch(
    `/organization/${id}`,
    orgData
  );
  return result.data;
};

export const CreateOrganization = async (orgData) => {
  const result = await axiosMultiPartConfig.post("/organization", orgData);
  return result.data;
};
