import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { updateComplaint } from "../../services/Complaints/complaintApi";

export const useUpdateComplaint = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isLoading, isError, error, data, isSuccess } = useMutation(
    updateComplaint,
    {
      onSuccess: (data) => {
        queryClient.refetchQueries(["complaints"]);
        queryClient.refetchQueries(["complaint"]);
        navigate("/complaints");
      },
    }
  );
  return { mutate, isSuccess, data, error };
};
