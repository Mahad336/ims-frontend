import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { createCategory } from "../../services/Categories/categoriesApi";

export const useCreateCategory = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isLoading, isError, error, data, isSuccess } = useMutation(
    createCategory,
    {
      onSuccess: (data) => {
        queryClient.refetchQueries(["categories"]);
        queryClient.refetchQueries(["category_stats"]);
        navigate("/categories");
      },
    }
  );
  return { mutate, isSuccess, data, error };
};
