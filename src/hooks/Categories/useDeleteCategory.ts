import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCategory } from "../../services/Categories/categoriesApi";
import { useNavigate } from "react-router-dom";
import { useApiToast } from "../ApiResponseMessage/useToast";

export const useDeleteCategory = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { showSuccessToast, showErrorToast } = useApiToast();

  const { mutate, isLoading, isError, error } = useMutation(deleteCategory, {
    onSettled(data, error) {
      if (data) {
        showSuccessToast("Category Deleted Successfuly");
        queryClient.refetchQueries(["categories"]);
        queryClient.refetchQueries(["category_stats"]);
        navigate("/categories");
      }
      if (error) {
        showErrorToast(error);
      }
    },
  });

  const deleteCategoryFn = async (id: string) => {
    mutate(id);
  };

  return {
    deleteCategory: deleteCategoryFn,
    isLoading,
    isError,
    error,
  };
};
