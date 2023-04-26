import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../../services/Auth/authApi";
import { useNavigate } from "react-router-dom";
import { useOrganization } from "../Organizations/useOrganization";

const useLogout = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  return useMutation(logout, {
    onSuccess: () => {
      //Invalidate the user query cache
      queryClient.setQueryData(["currentUser"], null);
      queryClient.setQueryData(["complaint"], null);
      // queryClient.setQueryData(["organization"], null);
      navigate("/");

      // Redirect to login page or do anything you want after successful logout

      // e.g. navigate('/login')
    },
  });
};

export default useLogout;
