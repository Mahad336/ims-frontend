import { useMutation } from "@tanstack/react-query";
import { updatePassword } from "../../services/Auth/authApi";
import { useNavigate } from "react-router-dom";

export const useUpdatePassword = () => {
  const navigate = useNavigate();
  const { mutate, isLoading, isError, error, data, isSuccess } = useMutation(
    updatePassword,
    {
      onSuccess: (data, variables) => {
        setTimeout(() => {
          navigate("/");
        }, 1500);
      },
    }
  );
  return { mutate, isSuccess, data, error };
};
