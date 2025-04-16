import { Navigate } from "react-router-dom";

export const AdminPrivateRoute = ({ children }) => {
  const isAdminAuthenticated = localStorage.getItem("adminToken");
  return isAdminAuthenticated ? children : <Navigate to="/admin-login" replace />;
};
