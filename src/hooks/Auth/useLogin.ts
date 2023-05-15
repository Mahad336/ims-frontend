import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserRole } from "../../constant/UserRoles";
import { loginUser } from "../../services/Auth/authApi";
import { useNavigate } from "react-router-dom";
import { useApiToast } from "../ApiResponseMessage/useToast";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { showSuccessToast, showErrorToast } = useApiToast();

  const { mutate, isLoading, isError, error, data, isSuccess } = useMutation(
    loginUser,
    {
      onSettled(data, error) {
        if (data) {
          const role = data?.role?.name;
          queryClient.refetchQueries(["currentUser"]);

          switch (role) {
            case UserRole.SUPER_ADMIN:
              navigate("/superAdmin/dashboard");
              break;
            case UserRole.ADMIN:
              navigate("/admin/dashboard");
              break;
            case UserRole.EMPLOYEE:
              navigate("/employee/dashboard");
              break;
            default:
              break;
          }
        }
        if (error) {
          showErrorToast(error);
        }
      },
    }
  );
  return { mutate, isSuccess, data, error };
};
