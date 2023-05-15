import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { createItem } from "../../services/Inventory/inventoryApi";
export const useCreateItem = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isLoading, isError, error, data, isSuccess } = useMutation(
    createItem,
    {
      onSuccess: (data) => {
        queryClient.refetchQueries(["items"]);
        navigate("/inventory");
      },
    }
  );
  return { mutate, isSuccess, data, error };
};
