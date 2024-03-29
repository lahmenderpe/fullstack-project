import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AuthRouter = ({ children }: { children: React.ReactNode }): any => {
  const location = useLocation();
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/auth"
        state={{ from: location, target: "login" }}
        replace
      />
    );
  }

  return children;
};

export default AuthRouter;
