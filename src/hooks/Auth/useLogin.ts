import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUser } from "../../services/Auth/authApi";

export const useLogin = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isError, error, data, isSuccess } = useMutation(
    loginUser,
    {
      onSuccess: () => {
        queryClient.refetchQueries(["currentUser"]);
        queryClient.refetchQueries(["complaints"]);
        queryClient.refetchQueries(["requests"]);
        queryClient.refetchQueries(["organizations"]);
      },
    }
  );
  return { mutate, isSuccess, data, error };
};
