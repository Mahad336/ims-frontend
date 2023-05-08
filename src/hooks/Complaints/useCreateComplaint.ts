import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { createComplaint } from "../../services/Complaints/complaintApi";

export const useCreateComplaint = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isLoading, isError, error, data, isSuccess } = useMutation(
    createComplaint,
    {
      onSuccess: (data) => {
        queryClient.refetchQueries(["complaints"]);
        navigate("/complaints");
      },
    }
  );
  return { mutate, isSuccess, data, error };
};
