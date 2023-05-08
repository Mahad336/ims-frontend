import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCategory } from "../../services/Categories/categoriesApi";
import { useNavigate } from "react-router-dom";

export const useDeleteCategory = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isLoading, isError, error } = useMutation(deleteCategory, {
    onSuccess: () => {
      // Invalidate and refetch vendor queries
      navigate("/categories");
      queryClient.refetchQueries(["categories"]);
      queryClient.refetchQueries(["category_stats"]);
    },
    onError: (err) => {
      console.error(err);
    },
  });

  const deleteCategoryFn = async (id: string) => {
    await mutate(id);
  };

  return {
    deleteCategory: deleteCategoryFn,
    isLoading,
    isError,
    error,
  };
};
