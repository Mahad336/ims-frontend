import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "../../services/Users/userApi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/useAuth";
import { UserRole, UserRoleId } from "../../constant/UserRoles";
import { useApiToast } from "../ApiResponseMessage/useToast";

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { showErrorToast, showSuccessToast } = useApiToast();
  const { user: currentUser } = useAuth();

  const { mutate, isLoading, isError, error } = useMutation(deleteUser, {
    onSettled(data, error) {
      if (data && currentUser) {
        showSuccessToast("User Updated Successfuly");
        queryClient.refetchQueries(["users"]);
        navigate(
          currentUser?.roleId === UserRoleId.SUPER_ADMIN
            ? "/admins"
            : "/employees"
        );
      }
      if (error) {
        showErrorToast(error);
      }
    },
  });

  const deleteUserFn = async (id: string) => {
    mutate(id);
  };

  return {
    deleteUser: deleteUserFn,
    isLoading,
    isError,
    error,
  };
};
