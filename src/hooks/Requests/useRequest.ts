import { useQuery } from "@tanstack/react-query";
import { fetchRequest } from "../../services/Requests/requestsApi";
import { useApiToast } from "../ApiResponseMessage/useToast";

export const useRequest = (id: string) => {
  const { showErrorToast } = useApiToast();
  const {
    data: request,
    isLoading,
    isError,
    isSuccess,
    refetch,
  } = useQuery(["request", id], () => fetchRequest(id), {
    onSettled(data, error) {
      if (error) {
        showErrorToast(error);
      }
    },
  });
  return {
    request,
    isLoading,
    isError,
    isSuccess,
    refetch,
  };
};
