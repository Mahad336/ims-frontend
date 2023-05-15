import { useQuery } from "@tanstack/react-query";
import { fetchCategory } from "../../services/Categories/categoriesApi";
import { useToast } from "@chakra-ui/react";
import { AxiosError } from "axios";

export const useCategory = (id: string) => {
  const toast = useToast();
  const {
    data: category,
    isLoading,
    isError,
    isSuccess,
    refetch,
    error,
  } = useQuery(["category", id], () => fetchCategory(id), {
    onError: () => {
      toast({
        title: "Error",
        description:
          (error as AxiosError).response.data["message"] ?? "An Error Occured",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    },
  });
  return {
    category,
    isLoading,
    isError,
    isSuccess,
    refetch,
  };
};
