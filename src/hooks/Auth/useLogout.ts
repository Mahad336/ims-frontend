import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../../services/Auth/authApi";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  return useMutation(logout, {
    onSuccess: () => {
      queryClient.clear();
      navigate("/");

      // Redirect to login page or do anything you want after successful logout

      // e.g. navigate('/login')
    },
  });
};

export default useLogout;
