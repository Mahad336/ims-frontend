import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
//import "../../App.css";
export default function PrivateRoutes() {
  const requireAuth = "getEmailToken()";
  return requireAuth ? (
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
