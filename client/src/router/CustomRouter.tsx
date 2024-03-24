import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage, AppPage } from "../pages";
import AuthRouter from "./AuthRouter";

const CustomRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <AuthRouter>
              <AppPage />
            </AuthRouter>
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default CustomRouter;
