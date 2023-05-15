import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { updateRequest } from "../../services/Requests/requestsApi";
import { useApiToast } from "../ApiResponseMessage/useToast";

export const useUpdateRequest = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { showSuccessToast, showErrorToast } = useApiToast();

  const { mutate, isLoading, isError, error, data, isSuccess } = useMutation(
    updateRequest,
    {
      onSettled: (data, error) => {
        if (data) {
          showSuccessToast("Request Updated Successfuly");
          queryClient.refetchQueries(["requests"]);
          queryClient.refetchQueries(["request"]);
          navigate("/requests");
        }
        if (error) {
          showErrorToast(error);
        }
      },
    }
  );
  return { mutate, isSuccess, data, error };
};
