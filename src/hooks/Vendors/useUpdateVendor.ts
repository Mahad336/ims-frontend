import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { updateVendor } from "../../services/Vendors/vendorApi";
export const useUpdateVendor = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isLoading, isError, error, data, isSuccess } = useMutation(
    updateVendor,
    {
      onSuccess: (data) => {
        queryClient.refetchQueries(["vendors"]);
        navigate("/vendors");
      },
    }
  );
  return { mutate, isSuccess, data, error };
};
