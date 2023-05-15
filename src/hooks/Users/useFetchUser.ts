import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../../services/Users/userApi";
import { useToast } from "@chakra-ui/react";
import { AxiosError } from "axios";
import { useEffect } from "react";

export const useUser = (id: string) => {
  const toast = useToast();
  const {
    data: user,
    isLoading,
    isError,
    isSuccess,
    refetch,
    error,
  } = useQuery(["user", id], () => fetchUser(id), {
    onSettled(data, error) {
      if (error) {
        toast({
          title: "Error",
          description:
            (error as AxiosError).response?.data["message"] ??
            "An Error Occured",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    },
  });

  return {
    user,
    isLoading,
    isError,
    isSuccess,
    refetch,
  };
};
