import { Route, Routes } from "react-router-dom";
import withAuth from "./components/HOC/withAuth";
import MainPage from "./pages/MainPage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";

const Router = () => {
  const AuthTodoPage = withAuth(MainPage);

  return (
    <Routes>
      <Route path="signup" element={<SignupPage />} />
      <Route path="signin" element={<SigninPage />} />
      <Route path="todo" element={<AuthTodoPage />} />
    </Routes>
  );
};

export default Router;
