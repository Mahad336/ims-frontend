import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { UserRole } from "../../constant/UserRoles";
import { updateUser } from "../../services/Users/userApi";
import { useAuth } from "../Auth/useAuth";

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { user } = useAuth();

  const { mutate, isLoading, isError, error, data, isSuccess } = useMutation(
    updateUser,
    {
      onSuccess: (data) => {
        queryClient.refetchQueries(["users"]);
        navigate(
          user?.role?.name == UserRole.SUPER_ADMIN ? "/admins" : "/employees"
        );
        console.log("succccccccessss", data);
      },
    }
  );
  return { mutate, isSuccess, data, error };
};
