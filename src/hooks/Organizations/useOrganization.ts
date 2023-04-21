import { useQuery } from "react-query";
import { fetchOrganizations } from "../../services/Organizations/organizationApi";

export const useOrganization = () => {
  const {
    data: organizations,
    isLoading,
    isError,
    isSuccess,
  } = useQuery("organizations", fetchOrganizations);
  return {
    organizations,
    isLoading,
    isError,
    isSuccess,
  };
};
