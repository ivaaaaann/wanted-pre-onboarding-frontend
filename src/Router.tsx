import { Route, Routes } from "react-router-dom";
import SignupPage from "./pages/SignupPage";

const Router = () => {
  return (
    <Routes>
      <Route path="signup" element={<SignupPage />} />
    </Routes>
  );
};

export default Router;
