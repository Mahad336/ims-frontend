import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { UserRole, UserRoleId } from "../../constant/UserRoles";
import { updateUser } from "../../services/Users/userApi";
import { useApiToast } from "../ApiResponseMessage/useToast";
import { useAuth } from "../Auth/useAuth";

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { showSuccessToast, showErrorToast } = useApiToast();

  const { mutate, isLoading, isError, error, data, isSuccess } = useMutation(
    updateUser,
    {
      onSettled(data, error) {
        if (data) {
          showSuccessToast("User Updated Successfuly");
          queryClient.refetchQueries(["users"]);
          navigate(
            user?.roleId === UserRoleId.SUPER_ADMIN ? "/admins" : "/employees"
          );
        }
        if (error) {
          showErrorToast(error);
        }
      },
    }
  );
  return { mutate, isSuccess, data, error };
};
