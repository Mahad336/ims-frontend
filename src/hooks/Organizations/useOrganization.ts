import { useQuery } from "@tanstack/react-query";
import { fetchOrganizations } from "../../services/Organizations/organizationApi";
import { useAuth } from "../Auth/useAuth";

export const useOrganization = () => {
  const { user } = useAuth();
  const {
    data: organizations,
    isLoading,
    isError,
    isSuccess,
    refetch,
  } = useQuery(["organizations"], fetchOrganizations);
  return {
    organizations,
    isLoading,
    isError,
    isSuccess,
    refetch,
  };
};
