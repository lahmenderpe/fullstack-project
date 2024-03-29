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
  const showHeader = path !== "/auth";

  console.log(showHeader);
  return (
    <>
      {showHeader && <Header />}
      <Routes>
        <Route
          path="/"
          element={
            <AuthRouter>
              <AppPage />
            </AuthRouter>
          }
        />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default CustomRouter;
