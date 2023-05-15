import { useQuery } from "@tanstack/react-query";
import { fetchItem } from "../../services/Inventory/inventoryApi";
import { useApiToast } from "../ApiResponseMessage/useToast";
export const useItem = (id: string) => {
  const { showErrorToast } = useApiToast();
  const {
    data: item,
    isLoading,
    isError,
    isSuccess,
    refetch,
  } = useQuery(["item", id], () => fetchItem(id), {
    onSettled(data, error) {
      if (error) {
        showErrorToast(error);
      }
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
