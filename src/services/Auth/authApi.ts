import axiosConfig from "../../utils/axiosConfig";

export const loginUser = async ({ email, password }) => {
  const result = await axiosConfig.post("/auth/login", { email, password });
  return result.data;
};

export const getCurrentUser = async () => {
  const jwt = document.cookie.includes("jwt");
  if (!jwt) throw new Error("Not Authorized");
  const result = await axiosConfig.get("/auth/current-user");
  return result.data;
};

export const logout = async () => {
  const result = await axiosConfig.post("/auth/logout");
  return result.data;
};

export const sendResetPasswordEmail = async ({ email }) => {
  const result = await axiosConfig.post("/auth/reset-password/generate-otp", {
    email,
  });
  return result.data;
};

export const validateOtp = async ({ email, otp }) => {
  const result = await axiosConfig.post("/auth/reset-password/validate-otp", {
    email,
    otp,
  });
  return result.data;
};

export const updatePassword = async ({ newPassword }) => {
  const result = await axiosConfig.put("/auth/reset-password/update-password", {
    newPassword,
  });
  return result.data;
};
