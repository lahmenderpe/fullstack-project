import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import {
  AuthPage,
  AppPage,
  AllJobsPage,
  ProfilePage,
  AddNewJobPage,
  NotFoundPage,
  AboutPage,
} from "../pages";
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
        >
          <Route index element={<AllJobsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/add-job" element={<AddNewJobPage />} />
        </Route>

        <Route
          path="/auth"
          element={
            <AuthRouter reverse>
              <AuthPage />
            </AuthRouter>
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {path === "/auth" && <Footer />}
    </>
  );
};

export default CustomRouter;
