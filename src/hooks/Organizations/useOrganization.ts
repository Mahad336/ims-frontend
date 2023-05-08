import { useQuery } from "@tanstack/react-query";
import { fetchOrganization } from "../../services/Organizations/organizationApi";

export const useOrganization = (id: string) => {
  const {
    data: organization,
    isLoading,
    isError,
    isSuccess,
    refetch,
  } = useQuery(["organization", id], () => fetchOrganization(id), {
    onSuccess(data) {},
  });
  return {
    organization,
    isLoading,
    isError,
    isSuccess,
    refetch,
  };
};
