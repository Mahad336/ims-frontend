import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../../services/Categories/categoriesApi";
export const useCategories = () => {
  const {
    data: categories,
    isLoading,
    isError,
    isSuccess,
    refetch,
  } = useQuery(["categories"], fetchCategories);
  return {
    categories,
    isLoading,
    isError,
    isSuccess,
    refetch,
  };
};
