import { useMutation, useQueryClient } from "react-query";
import { loginUser } from "../../services/Auth/authApi";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError, error, data, isSuccess } = useMutation(
    loginUser,
    {
      onSuccess: () => {
        queryClient.invalidateQueries("currentUser");
      },
    }
  );
  return { mutate, isSuccess, data, error };
};
