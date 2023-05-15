import { useToast, UseToastOptions } from "@chakra-ui/react";
import { AxiosError } from "axios";

export const useApiToast = () => {
  const toast = useToast();

  const showToast = (options: UseToastOptions) => {
    toast({
      position: "bottom",
      isClosable: true,
      ...options,
    });
  };

  const showSuccessToast = (message?: string) => {
    showToast({
      title: "Success",
      description: message,
      duration: 500,
      status: "success",
    });
  };

  const showErrorToast = (error) => {
    const errorMessage =
      error?.response?.data?.message ?? "Something went wrong.";

    showToast({
      title: "Error",
      description: errorMessage,
      duration: 2000,
      status: "error",
    });
  };

  return {
    showSuccessToast,
    showErrorToast,
  };
};
