import { useQuery } from "@tanstack/react-query";
import { fetchCategoryStats } from "../../services/Categories/categoryStatsApi";

export const useCategoryStats = () => {
  const {
    data: categoryTableStats,
    isLoading,
    isError,
    isSuccess,
    refetch,
  } = useQuery(["category_stats"], fetchCategoryStats);
  return {
    categoryTableStats,
    isLoading,
    isError,
    isSuccess,
    refetch,
  };
};
