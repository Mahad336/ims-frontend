import { useQuery } from "@tanstack/react-query";
import { fetchRequest } from "../../services/Requests/requestsApi";

export const useRequest = (id: string) => {
  const {
    data: request,
    isLoading,
    isError,
    isSuccess,
    refetch,
  } = useQuery(["request", id], () => fetchRequest(id), {
    onSuccess(data) {},
  });
  return {
    request,
    isLoading,
    isError,
    isSuccess,
    refetch,
  };
};
