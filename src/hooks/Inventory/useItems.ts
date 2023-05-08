import { useQuery } from "@tanstack/react-query";
import { fetchItems } from "../../services/Inventory/inventoryApi";

export const useItems = () => {
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
