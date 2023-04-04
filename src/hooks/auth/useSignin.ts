import { useState } from "react";
import AuthRepositoryImpl from "../../repositories/auth/AuthRepositoryImpl";
import { useNavigate } from "react-router-dom";
import LocalStorage from "../../libs/storage/LocalStorage";
import { ACCESS_TOKEN_KEY } from "../../constants/token/token.constant";

const useSignin = () => {
  const navigate = useNavigate();

  const [signinData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const onChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitData = async () => {
    try {
      const { email, password } = signinData;

      const data = await AuthRepositoryImpl.postSignin({ email, password });

      LocalStorage.set(ACCESS_TOKEN_KEY, data.access_token);

      window.alert("로그인 성공");

      navigate("/todo");
    } catch (error) {
      window.alert("에러가 발생하였습니다.");
    }
  };

  return {
    signinData,
    onChangeData,
    onSubmitData,
  };
};

export default useSignin;
