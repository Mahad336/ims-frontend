import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteVendor } from "../../services/Vendors/vendorApi";
import { useNavigate } from "react-router-dom";

export const useDeleteVendor = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isLoading, isError, error } = useMutation(deleteVendor, {
    onSuccess: () => {
      // Invalidate and refetch vendor queries
      queryClient.refetchQueries(["vendors"]);
      navigate("/vendors");
    },
    onError: (err) => {
      console.error(err);
    },
  });

  const deleteVendorFn = async (id: string) => {
    await mutate(id);
  };

  return {
    deleteVendor: deleteVendorFn,
    isLoading,
    isError,
    error,
  };
};
