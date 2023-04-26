import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

const useOtpEmail = () => {
  const [email, setEmail] = useState(null);
  const queryClient = useQueryClient();

  const setEmailAddress = (email: string) => {
    setEmail(email);
    queryClient.setQueryData(["otpEmail"], email);
  };

  const { data: emailData } = useQuery(["otpEmail"], () => setEmail, {
    enabled: false,
    initialData: email,
  });

  return {
    otpEmail: emailData,
    setOtpEmail: setEmailAddress,
  };
};

export default useOtpEmail;
