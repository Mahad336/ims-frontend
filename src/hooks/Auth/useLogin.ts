import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUser } from "../../services/Auth/authApi";
//import { useFetchUsers } from "../Users/useFetchUsers";

export const useLogin = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isError, error, data, isSuccess } = useMutation(
    loginUser,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["currentUser"]);
      },
    }
  );
  return { mutate, isSuccess, data, error };
};
