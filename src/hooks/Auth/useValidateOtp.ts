import { useMutation } from "@tanstack/react-query";
import { validateOtp } from "../../services/Auth/authApi";
import { useNavigate } from "react-router-dom";

export const useValidateOtp = () => {
  const navigate = useNavigate();
  const { mutate, isLoading, isError, error, data, isSuccess } = useMutation(
    validateOtp,
    {
      onSuccess: (data, variables) => {
        setTimeout(() => {
          navigate("/reset-password");
        }, 1500);
      },
    }
  );
  return { mutate, isSuccess, data, error };
};
