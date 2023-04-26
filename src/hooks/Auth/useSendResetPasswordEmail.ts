import { useMutation } from "@tanstack/react-query";
import { sendResetPasswordEmail } from "../../services/Auth/authApi";
import useOtpEmail from "./useOtpEmail";
import { useNavigate } from "react-router-dom";

export const useSendResetPassword = () => {
  const navigate = useNavigate();
  const { setOtpEmail } = useOtpEmail();
  const { mutate, isLoading, isError, error, data, isSuccess } = useMutation(
    sendResetPasswordEmail,
    {
      onSuccess: (data, variables) => {
        setOtpEmail(variables.email);
        setTimeout(() => {
          navigate("/validate-otp");
        }, 1500);
      },
    }
  );
  return { mutate, isSuccess, data, error };
};
