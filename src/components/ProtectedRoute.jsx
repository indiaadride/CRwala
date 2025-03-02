import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ children }) => {
  const isPaymentVerified = Cookies.get("paymentVerified");

  return isPaymentVerified ? children : <Navigate to="/cart" />;
};

export default ProtectedRoute;
