import { useQuery } from "@tanstack/react-query";
import { fetchVendor } from "../../services/Vendors/vendorApi";

export const useVendor = (id: string) => {
  const {
    data: vendor,
    isLoading,
    isError,
    isSuccess,
    refetch,
  } = useQuery(["vendor", id], () => fetchVendor(id), {
    onSuccess(data) {},
  });
  return {
    vendor,
    isLoading,
    isError,
    isSuccess,
    refetch,
  };
};
