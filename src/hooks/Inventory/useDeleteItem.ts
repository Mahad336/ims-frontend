import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteItem } from "../../services/Inventory/inventoryApi";
import { useNavigate } from "react-router-dom";

export const useDeleteItem = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isLoading, isError, error } = useMutation(deleteItem, {
    onSuccess: () => {
      // Invalidate and refetch vendor queries
      navigate("/inventory");
      queryClient.refetchQueries(["items"]);
    },
    onError: (err) => {
      console.error(err);
    },
  });

  const deleteItemFn = async (id: string) => {
    await mutate(id);
  };

  return {
    deleteItem: deleteItemFn,
    isLoading,
    isError,
    error,
  };
};
