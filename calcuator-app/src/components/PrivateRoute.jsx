import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const PrivateRoute = ({ children }) => {
  const token = sessionStorage.getItem("token");
  const context = useContext(UserContext);
  if (!token || !context) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
