import { useMutation } from "@tanstack/react-query";
import { updatePassword } from "../../services/Auth/authApi";
import { useNavigate } from "react-router-dom";
import { useApiToast } from "../ApiResponseMessage/useToast";

export const useUpdatePassword = () => {
  const navigate = useNavigate();
  const { showErrorToast, showSuccessToast } = useApiToast();
  const { mutate, isLoading, isError, error, data, isSuccess } = useMutation(
    updatePassword,
    {
      onSettled(data, error) {
        if (data) {
          showSuccessToast(
            "Password Updated Successfuly. Please Login again to continue."
          );
          navigate("/");
        }
        if (error) {
          showErrorToast(error);
        }
      },
    }
  );
  return { mutate, isSuccess, data, error };
};
