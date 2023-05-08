import { useQuery } from "@tanstack/react-query";
import { fetchCategory } from "../../services/Categories/categoriesApi";

export const useCategory = (id: string) => {
  const {
    data: category,
    isLoading,
    isError,
    isSuccess,
    refetch,
  } = useQuery(["category", id], () => fetchCategory(id), {
    onSuccess(data) {},
  });
  return {
    category,
    isLoading,
    isError,
    isSuccess,
    refetch,
  };
};
