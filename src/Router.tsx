import { Route, Routes } from "react-router-dom";
import withAuth from "./components/HOC/withAuth";
import withoutAuth from "./components/HOC/withoutAuth";
import MainPage from "./pages/MainPage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";

const Router = () => {
  const WithAuthTodoPage = withAuth(MainPage);
  const WithoutAuthSignupPage = withoutAuth(SignupPage);
  const WithoutAuthSigninPage = withoutAuth(SigninPage);

  return (
    <Routes>
      <Route path="signup" element={<WithoutAuthSignupPage />} />
      <Route path="signin" element={<WithoutAuthSigninPage />} />
      <Route path="todo" element={<WithAuthTodoPage />} />
      <Route path="todo/:todoid" element={<WithAuthTodoPage />} />
    </Routes>
  );
};

export default Router;
