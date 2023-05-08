import { useQuery } from "@tanstack/react-query";
import { fetchItem } from "../../services/Inventory/inventoryApi";
export const useItem = (id: string) => {
  const {
    data: item,
    isLoading,
    isError,
    isSuccess,
    refetch,
  } = useQuery(["item", id], () => fetchItem(id), {
    onSuccess(data) {
      console.log(data);
    },
  });
  return {
    item,
    isLoading,
    isError,
    isSuccess,
    refetch,
  };
};
