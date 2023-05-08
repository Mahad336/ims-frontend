import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/Auth/useAuth";
import Navbar from "../Navbar/Navbar";
export default function PrivateRoutes({ roles }) {
  const { user } = useAuth();
  const isAllowed = roles.some((role) => role == user?.role?.name);
  if (user) {
    return isAllowed ? (
      <>
        <Navbar />
        <div className="App">
          <Outlet />
        </div>
      </>
    ) : (
      <Navigate to="login" />
    );
  }
}
