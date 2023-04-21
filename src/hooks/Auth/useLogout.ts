import { useMutation, useQueryClient } from "react-query";
import { logout } from "../../services/Auth/authApi";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation(logout, {
    onSuccess: () => {
      //Invalidate the user query cache

      queryClient.invalidateQueries("currentUser");
      // Redirect to login page or do anything you want after successful logout

      // e.g. navigate('/login')
      navigate("/");
    },
  });
};

export default useLogout;
