import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/Auth/authApi";
import { useCookies } from "react-cookie";

export const useAuth = () => {
  console.log("current suer");
  const {
    data: user,
    isLoading,
    isError,
    isSuccess,
    refetch,
  } = useQuery(["currentUser"], getCurrentUser);
  return {
    user,
    isLoading,
    isError,
    isSuccess,
    refetch,
  };
};
