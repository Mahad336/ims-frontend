import { useQuery } from "react-query";
import { getCurrentUser } from "../../services/Auth/authApi";
import { useCookies } from "react-cookie";

export const useAuth = () => {
  const [{ jwt }] = useCookies();
  const shouldFetchUser = !!jwt;
  const {
    data: user,
    isLoading,
    isError,
    isSuccess,
  } = useQuery(shouldFetchUser && "currentUser", getCurrentUser, {
    enabled: shouldFetchUser,
  });
  return {
    user,
    isLoading: isLoading || !shouldFetchUser,
    isError: isError || !shouldFetchUser,
    isSuccess: isSuccess && shouldFetchUser,
  };
};
