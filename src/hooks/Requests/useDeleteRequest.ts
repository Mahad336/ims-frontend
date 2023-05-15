import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteRequest } from "../../services/Requests/requestsApi";
import { useNavigate } from "react-router-dom";
import { useApiToast } from "../ApiResponseMessage/useToast";

export const useDeleteRequest = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { showErrorToast, showSuccessToast } = useApiToast();

  const { mutate, isLoading, isError, error } = useMutation(deleteRequest, {
    onError: (err) => {
      console.error(err);
    },
    onSettled(data, error) {
      if (data) {
        showSuccessToast("Request Deleted Sucessfuly");
        queryClient.refetchQueries(["requests"]);
        navigate("/requests");
      }
      if (error) {
        showErrorToast(error);
      }
    },
  });

  const deleteRequestFn = async (id: string) => {
    await mutate(id);
  };

  return {
    deleteRequest: deleteRequestFn,
    isLoading,
    isError,
    error,
  };
};
