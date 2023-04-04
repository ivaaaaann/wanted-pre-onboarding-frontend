import { Route, Routes } from "react-router-dom";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";

const Router = () => {
  return (
    <Routes>
      <Route path="signup" element={<SignupPage />} />
      <Route path="signin" element={<SigninPage />} />
    </Routes>
  );
};

export default Router;
