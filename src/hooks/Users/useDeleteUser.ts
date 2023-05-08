import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "../../services/Users/userApi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/useAuth";
import { UserRole } from "../../constant/UserRoles";

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { user: currentUser } = useAuth();

  const { mutate, isLoading, isError, error } = useMutation(deleteUser, {
    onSuccess: () => {
      // Invalidate and refetch vendor queries
      queryClient.refetchQueries(["users"]);
      navigate(
        currentUser?.role?.name === UserRole.ADMIN ? "/admins" : "/employees"
      );
    },
    onError: (err) => {
      console.error(err);
    },
  });

  const deleteUserFn = async (id: string) => {
    await mutate(id);
  };

  return {
    deleteUser: deleteUserFn,
    isLoading,
    isError,
    error,
  };
};
