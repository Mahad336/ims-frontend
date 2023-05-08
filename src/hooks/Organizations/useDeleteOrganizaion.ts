import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteOrganization } from "../../services/Organizations/organizationApi";
import { useNavigate } from "react-router-dom";

export const useDeleteOrganization = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isLoading, isError, error } = useMutation(
    deleteOrganization,
    {
      onSuccess: () => {
        // Invalidate and refetch vendor queries
        navigate("/organizations");
        queryClient.refetchQueries(["organizations"]);
      },
      onError: (err) => {
        console.error(err);
      },
    }
  );

  const deleteOrganizationFn = async (id: string) => {
    await mutate(id);
  };

  return {
    deleteOrganization: deleteOrganizationFn,
    isLoading,
    isError,
    error,
  };
};
