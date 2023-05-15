import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { updateComplaint } from "../../services/Complaints/complaintApi";
import { useApiToast } from "../ApiResponseMessage/useToast";

export const useUpdateComplaint = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { showErrorToast, showSuccessToast } = useApiToast();

  const { mutate, isLoading, isError, error, data, isSuccess } = useMutation(
    updateComplaint,
    {
      onSettled(data, error) {
        if (data) {
          showSuccessToast("Complaint Updated Successfuly");
          queryClient.refetchQueries(["complaints"]);
          queryClient.refetchQueries(["complaint"]);
          navigate("/complaints");
        }
        if (error) {
          showErrorToast(error);
        }
      },
    }
  );
  return { mutate, isSuccess, data, error };
};
