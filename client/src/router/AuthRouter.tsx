import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AuthRouter = ({ children }: { children: React.ReactNode }): any => {
  const location = useLocation();
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default AuthRouter;
