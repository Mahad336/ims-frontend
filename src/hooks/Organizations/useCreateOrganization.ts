import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { CreateOrganization } from "../../services/Organizations/organizationApi";

export const useCreateOrganization = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isLoading, isError, error, data, isSuccess } = useMutation(
    CreateOrganization,
    {
      onSuccess: (data) => {
        queryClient.refetchQueries(["organizations"]);
        navigate("/organizations");
      },
    }
  );
  return { mutate, isSuccess, data, error };
};
