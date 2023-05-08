import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { updateOrganization } from "../../services/Organizations/organizationApi";

export const useUpdateOrganization = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isLoading, isError, error, data, isSuccess } = useMutation(
    updateOrganization,
    {
      onSuccess: (data) => {
        queryClient.refetchQueries(["organizations"]);
        navigate("/organizations");
        console.log("succccccccessss");
      },
    }
  );
  return { mutate, isSuccess, data, error };
};
