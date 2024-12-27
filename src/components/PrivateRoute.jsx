import React from "react";
import { Navigate } from "react-router-dom";

// Check if user is authenticated (customize logic as needed)
const isAuthenticated = () => {
  return !!localStorage.getItem("jwtToken"); // Replace with your auth logic
};

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
