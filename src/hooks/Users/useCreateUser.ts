import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { UserRole } from "../../constant/UserRoles";
import { CreateUser } from "../../services/Users/userApi";

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isLoading, isError, error, data, isSuccess } = useMutation(
    CreateUser,
    {
      onSuccess: (data) => {
        queryClient.refetchQueries(["users"]);
        navigate(
          data?.role?.name === UserRole.ADMIN ? "/admins" : "/employees"
        );

        console.log("succccccccessss", data);
      },
    }
  );
  return { mutate, isSuccess, data, error };
};
