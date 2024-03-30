import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AuthPage, AppPage } from "../pages";
import { Footer, Header } from "../components";
import AuthRouter from "./AuthRouter";

const CustomRouter = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <AuthRouter>
              <AppPage />
            </AuthRouter>
          }
        />
        <Route
          path="/auth"
          element={
            <AuthRouter reverse>
              <AuthPage />
            </AuthRouter>
          }
        />
      </Routes>
      {path === "/auth" && <Footer />}
    </>
  );
};

export default CustomRouter;
