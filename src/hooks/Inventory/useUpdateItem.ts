import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { updateItem } from "../../services/Inventory/inventoryApi";
import { useApiToast } from "../ApiResponseMessage/useToast";
export const useUpdateItem = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { showSuccessToast, showErrorToast } = useApiToast();

  const { mutate, isLoading, isError, error, data, isSuccess } = useMutation(
    updateItem,
    {
      onSettled(data, error) {
        if (data) {
          showSuccessToast("Item Updated Successfuly");
          queryClient.refetchQueries(["items"]);
          navigate("/inventory");
        }
        if (error) {
          showErrorToast(error);
        }
      },
    }
  );
  return { mutate, isSuccess, data, error };
};
