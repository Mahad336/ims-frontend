import { useMutation } from "@tanstack/react-query";
import { sendResetPasswordEmail } from "../../services/Auth/authApi";
import useOtpEmail from "./useOtpEmail";
import { useNavigate } from "react-router-dom";
import { useApiToast } from "../ApiResponseMessage/useToast";

export const useSendResetPassword = () => {
  const navigate = useNavigate();
  const { setOtpEmail } = useOtpEmail();
  const { showErrorToast, showSuccessToast } = useApiToast();
  const { mutate, isLoading, isError, error, data, isSuccess } = useMutation(
    sendResetPasswordEmail,
    {
      onSettled(data, error, variables) {
        if (data) {
          showSuccessToast("OTP Sent Successfuly");
          setOtpEmail(variables.email);
          setTimeout(() => {
            navigate("/validate-otp");
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
