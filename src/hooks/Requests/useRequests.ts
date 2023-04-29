import { useQuery } from "@tanstack/react-query";
import { fetchRequests } from "../../services/Requests/requestsApi";

export const useRequests = (type?: string) => {
  const {
    data: requests,
    isLoading,
    isError,
    isSuccess,
    refetch,
  } = useQuery(["requests", type], () => fetchRequests(type));
  return {
    requests,
    isLoading,
    isError,
    isSuccess,
    refetch,
  };
};
