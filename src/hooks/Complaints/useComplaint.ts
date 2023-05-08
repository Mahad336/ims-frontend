import { useQuery } from "@tanstack/react-query";
import { fetchComplaint } from "../../services/Complaints/complaintApi";

export const useComplaint = (id: string) => {
  const {
    data: complaint,
    isLoading,
    isError,
    isSuccess,
    refetch,
  } = useQuery(["complaint", id], () => fetchComplaint(id), {
    onSuccess(data) {},
  });
  return {
    complaint,
    isLoading,
    isError,
    isSuccess,
    refetch,
  };
};
