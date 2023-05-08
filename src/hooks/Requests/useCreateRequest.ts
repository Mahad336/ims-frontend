import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { createRequest } from "../../services/Requests/requestsApi";

export const useCreateRequest = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isLoading, isError, error, data, isSuccess } = useMutation(
    createRequest,
    {
      onSuccess: (data) => {
        queryClient.refetchQueries(["requests"]);
        navigate("/requests");
        console.log("succccccccessss");
      },
    }
  );
  return { mutate, isSuccess, data, error };
};
