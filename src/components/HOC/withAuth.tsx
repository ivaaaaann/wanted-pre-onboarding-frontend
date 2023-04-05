import { ComponentType } from "react";
import { ACCESS_TOKEN_KEY } from "../../constants/token/token.constant";
import LocalStorage from "../../libs/storage/LocalStorage";

const withAuth = (AuthComponent: ComponentType) => {
  const AuthCheck = () => {
    if (LocalStorage.get(ACCESS_TOKEN_KEY) === null) {
      window.alert("토큰이 존재하지 않습니다.");
      window.location.href = "/signin";
      return <></>;
    }

    return <AuthComponent />;
  };

  return AuthCheck;
};

export default withAuth;
