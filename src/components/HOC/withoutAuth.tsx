import { ComponentType } from "react";
import { ACCESS_TOKEN_KEY } from "../../constants/token/token.constant";
import LocalStorage from "../../libs/storage/LocalStorage";

const withoutAuth = (AuthComponent: ComponentType) => {
  const AuthCheck = () => {
    if (LocalStorage.get(ACCESS_TOKEN_KEY) !== null) {
      window.alert("토큰이 존재합니다.");
      window.location.href = "/todo";
      return <></>;
    }

    return <AuthComponent />;
  };

  return AuthCheck;
};

export default withoutAuth;
