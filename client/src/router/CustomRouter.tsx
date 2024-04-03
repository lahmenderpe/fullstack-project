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
  FilterPage,
  AddNewJobPage,
  NotFoundPage,
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
          <Route path="/filter" element={<FilterPage />} />
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
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {path === "/auth" && <Footer />}
    </>
  );
};

export default CustomRouter;
