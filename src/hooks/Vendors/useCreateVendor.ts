import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { CreateVendor } from "../../services/Vendors/vendorApi";
export const useCreateVendor = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isLoading, isError, error, data, isSuccess } = useMutation(
    CreateVendor,
    {
      onSuccess: (data) => {
        queryClient.refetchQueries(["vendors"]);
        navigate("/vendors");
      },
    }
  );
  return { mutate, isSuccess, data, error };
};
