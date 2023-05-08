import { useQuery } from "@tanstack/react-query";
import { fetchOrganizations } from "../../services/Organizations/organizationApi";
import { useAuth } from "../Auth/useAuth";

export const useOrganizations = () => {
  const { user } = useAuth();
  const {
    data: organizations,
    isLoading,
    isError,
    isSuccess,
    refetch,
  } = useQuery(["organizations", user?.id], fetchOrganizations);
  return {
    organizations,
    isLoading,
    isError,
    isSuccess,
    refetch,
  };
};
