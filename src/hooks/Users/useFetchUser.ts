import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../../services/Users/userApi";

export const useUser = (id: string) => {
  const {
    data: user,
    isLoading,
    isError,
    isSuccess,
    refetch,
  } = useQuery(["user", id], () => fetchUser(id), {
    onSuccess(data) {},
  });
  return {
    user,
    isLoading,
    isError,
    isSuccess,
    refetch,
  };
};
