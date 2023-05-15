import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteComplaint } from "../../services/Complaints/complaintApi";
import { useApiToast } from "../ApiResponseMessage/useToast";

export const useDeleteComplaint = () => {
  const queryClient = useQueryClient();
  const { showErrorToast, showSuccessToast } = useApiToast();

  const { mutate, isLoading, isError, error } = useMutation(deleteComplaint, {
    onSettled(data, error) {
      queryClient.refetchQueries(["complaints"]);
      if (data) {
        showSuccessToast("Complaint Deleted Successfuly");
      }
      if (error) {
        showErrorToast(error);
      }
    },
  });

  const deleteComplaintFn = async (id: string) => {
    mutate(id);
  };

  return {
    deleteComplaint: deleteComplaintFn,
    isLoading,
    isError,
    error,
  };
};
