import { useMutation } from "@tanstack/react-query";
import { validateOtp } from "../../services/Auth/authApi";
import { useNavigate } from "react-router-dom";
import { useApiToast } from "../ApiResponseMessage/useToast";

export const useValidateOtp = () => {
  const navigate = useNavigate();
  const { showErrorToast, showSuccessToast } = useApiToast();
  const { mutate, isLoading, isError, error, data, isSuccess } = useMutation(
    validateOtp,
    {
      onSettled(data, error) {
        if (data) {
          showSuccessToast("OTP verified Successfuly");
          setTimeout(() => {
            navigate("/reset-password");
          }, 1500);
        }
        if (error) {
          showErrorToast(error);
        }
      },
    }
  );
  return { mutate, isSuccess, data, error };
};
