import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isRegistered = localStorage.getItem("isRegistered"); // Check if user registered

  return isRegistered ? children : <Navigate to="/register" />;
};

export default ProtectedRoute;
