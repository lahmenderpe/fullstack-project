import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AuthRouter = ({
  children,
  reverse,
}: {
  children: React.ReactNode;
  reverse?: boolean;
}): any => {
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  const { state } = location;

  if (!isAuthenticated && state?.target !== "login") {
    return <Navigate to="/auth" state={{ target: "login" }} replace />;
  }

  if (reverse && isAuthenticated) {
    return <Navigate to="/" state={{ target: "app" }} replace />;
  }

  return children;
};

export default AuthRouter;
