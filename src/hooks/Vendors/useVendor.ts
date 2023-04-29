import { useQuery } from "@tanstack/react-query";
import { fetchVendors } from "../../services/Vendors/vendorApi";
export const useVendor = () => {
  const {
    data: vendors,
    isLoading,
    isError,
    isSuccess,
    refetch,
  } = useQuery(["vendors"], fetchVendors);
  return {
    vendors,
    isLoading,
    isError,
    isSuccess,
    refetch,
  };
};
