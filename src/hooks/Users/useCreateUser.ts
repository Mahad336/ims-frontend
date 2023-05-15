import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { UserRole, UserRoleId } from "../../constant/UserRoles";
import { CreateUser } from "../../services/Users/userApi";
import { useApiToast } from "../ApiResponseMessage/useToast";

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { showErrorToast, showSuccessToast } = useApiToast();

  const { mutate, isLoading, isError, error, data, isSuccess } = useMutation(
    CreateUser,
    {
      onSettled(data, error) {
        if (data) {
          showSuccessToast("User Created Successfuly");
          queryClient.refetchQueries(["users"]);
          navigate(
            data?.roleId === UserRoleId.ADMIN ? "/admins" : "/employees"
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
