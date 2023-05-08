import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { updateCategory } from "../../services/Categories/categoriesApi";

export const useUpdateCategory = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isLoading, isError, error, data, isSuccess } = useMutation(
    updateCategory,
    {
      onSuccess: (data) => {
        queryClient.refetchQueries(["categories"]);
        queryClient.refetchQueries(["category_stats"]);
        queryClient.refetchQueries(["category"]);
        navigate("/categories");
        console.log(data);
      },
    }
  );
  return { mutate, isSuccess, data, error };
};
