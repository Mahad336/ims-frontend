import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoutes() {
  const requireAuth = "getEmailToken()";
  return requireAuth ? <Outlet /> : <Navigate to="login" />;
}
