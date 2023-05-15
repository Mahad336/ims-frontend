import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { updateCategory } from "../../services/Categories/categoriesApi";
import { useToast } from "@chakra-ui/react";
import { AxiosError } from "axios";

export const useUpdateCategory = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const toast = useToast();

  const { mutate, isLoading, isError, error, data, isSuccess } = useMutation(
    updateCategory,
    {
      onSuccess: (data) => {
        queryClient.refetchQueries(["categories"]);
        queryClient.refetchQueries(["category_stats"]);
        queryClient.refetchQueries(["category"]);

        //Message

        toast({
          title: "Success",
          description: "Data updated successfully",
          status: "success",
          duration: 1000,
          isClosable: true,
        });

        navigate("/categories");
      },
      onError: () => {
        toast({
          title: "Error",
          description:
            (error as AxiosError).response.data["message"] ??
            "An Error Occured",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      },
    }
  );
  return { mutate, isSuccess, data, error };
};
