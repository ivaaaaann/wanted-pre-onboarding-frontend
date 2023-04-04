import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthRepositoryImpl from "../../repositories/auth/AuthRepositoryImpl";

const useSignup = () => {
  const navigate = useNavigate();

  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
  });

  const onChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setSignupData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitData = async () => {
    try {
      const { email, password } = signupData;

      await AuthRepositoryImpl.postSignup({ email, password });

      window.alert("회원가입 성공");

      navigate("/signin");
    } catch (error) {
      window.alert("에러가 발생하였습니다.");
    }
  };

  return {
    signupData,
    onChangeData,
    onSubmitData,
  };
};

export default useSignup;
