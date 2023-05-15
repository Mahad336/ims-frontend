import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteItem } from "../../services/Inventory/inventoryApi";
import { useNavigate } from "react-router-dom";
import { useApiToast } from "../ApiResponseMessage/useToast";

export const useDeleteItem = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { showSuccessToast, showErrorToast } = useApiToast();

  const { mutate, isLoading, isError, error } = useMutation(deleteItem, {
    onSuccess: () => {
      // Invalidate and refetch vendor queries
      navigate("/inventory");
      queryClient.refetchQueries(["items"]);
    },
    onSettled(data, error) {
      if (data) {
        showSuccessToast("Item Deleted Successfuly");
      }
      if (error) {
        showErrorToast(error);
      }
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
