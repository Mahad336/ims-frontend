import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../../services/Users/userApi";
import { useAuth } from "../Auth/useAuth";

export const useFetchUsers = () => {
  const { user } = useAuth();
  const {
    data: users,
    isLoading,
    isError,
    isSuccess,
    refetch,
  } = useQuery(["users", user?.id], fetchUsers, { enabled: !!user?.id });
  return {
    users,
    isLoading,
    isError,
    isSuccess,
    refetch,
  };
};
