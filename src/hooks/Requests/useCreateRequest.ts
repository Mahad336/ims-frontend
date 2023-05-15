import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { createRequest } from "../../services/Requests/requestsApi";
import { useApiToast } from "../ApiResponseMessage/useToast";

export const useCreateRequest = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { showErrorToast, showSuccessToast } = useApiToast();

  const { mutate, isLoading, isError, error, data, isSuccess } = useMutation(
    createRequest,
    {
      onSettled(data, error) {
        if (data) {
          showSuccessToast("Request Created Successfuly");
          queryClient.refetchQueries(["requests"]);
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
