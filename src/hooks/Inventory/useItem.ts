import { useQuery } from "@tanstack/react-query";
import { fetchItems } from "../../services/Inventory/inventoryApi";

export const useItem = () => {
  const {
    data: items,
    isLoading,
    isError,
    isSuccess,
    refetch,
  } = useQuery(["items"], fetchItems);
  return {
    items,
    isLoading,
    isError,
    isSuccess,
    refetch,
  };
};
