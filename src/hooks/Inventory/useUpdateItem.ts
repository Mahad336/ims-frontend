import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { updateItem } from "../../services/Inventory/inventoryApi";
export const useUpdateItem = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isLoading, isError, error, data, isSuccess } = useMutation(
    updateItem,
    {
      onSuccess: (data) => {
        queryClient.refetchQueries(["items"]);
        navigate("/inventory");
        console.log("succccccccessss");
      },
    }
  );
  return { mutate, isSuccess, data, error };
};
