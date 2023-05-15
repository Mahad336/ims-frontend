import { useQuery } from "@tanstack/react-query";
import { fetchComplaint } from "../../services/Complaints/complaintApi";
import { useApiToast } from "../ApiResponseMessage/useToast";

export const useComplaint = (id: string) => {
  const { showErrorToast } = useApiToast();
  const {
    data: complaint,
    isLoading,
    isError,
    isSuccess,
    refetch,
  } = useQuery(["complaint", id], () => fetchComplaint(id), {
    onSettled(data, error) {
      if (error) {
        showErrorToast(error);
      }
    },
  });
  return {
    complaint,
    isLoading,
    isError,
    isSuccess,
    refetch,
  };
};
