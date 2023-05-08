import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { updateRequest } from "../../services/Requests/requestsApi";

export const useUpdateRequest = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isLoading, isError, error, data, isSuccess } = useMutation(
    updateRequest,
    {
      onSuccess: (data) => {
        queryClient.refetchQueries(["requests"]);
        queryClient.refetchQueries(["request"]);
        navigate("/requests");
        console.log("succccccccessss");
      },
    }
  );
  return { mutate, isSuccess, data, error };
};
