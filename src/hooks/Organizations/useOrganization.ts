import { useQuery } from "@tanstack/react-query";
import { fetchOrganizations } from "../../services/Organizations/organizationApi";

export const useOrganization = () => {
  const {
    data: organizations,
    isLoading,
    isError,
    isSuccess,
    refetch,
  } = useQuery("organizations", fetchOrganizations);
  return {
    organizations,
    isLoading,
    isError,
    isSuccess,
    refetch,
  };
};
