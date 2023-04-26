import { useQuery } from "@tanstack/react-query";
import { fetchComplaints } from "../../services/Complaints/complaintApi";
import { useAuth } from "../Auth/useAuth";

export const useComplaints = () => {
  const { user } = useAuth();
  const {
    data: complaints,
    isLoading,
    isError,
    isSuccess,
    refetch,
  } = useQuery(["complaint"], fetchComplaints);
  return {
    complaints,
    isLoading,
    isError,
    isSuccess,
    refetch,
  };
};
