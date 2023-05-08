import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteComplaint } from "../../services/Complaints/complaintApi";

export const useDeleteComplaint = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isError, error } = useMutation(deleteComplaint, {
    onSuccess: () => {
      // Invalidate and refetch vendor queries
      queryClient.refetchQueries(["complaints"]);
    },
    onError: (err) => {
      console.error(err);
    },
  });

  const deleteComplaintFn = async (id: string) => {
    await mutate(id);
  };

  return {
    deleteComplaint: deleteComplaintFn,
    isLoading,
    isError,
    error,
  };
};
