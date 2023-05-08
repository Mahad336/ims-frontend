import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteRequest } from "../../services/Requests/requestsApi";
import { useNavigate } from "react-router-dom";

export const useDeleteRequest = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isLoading, isError, error } = useMutation(deleteRequest, {
    onSuccess: () => {
      // Invalidate and refetch vendor queries
      navigate("/requests");
      queryClient.refetchQueries(["requests"]);
    },
    onError: (err) => {
      console.error(err);
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
