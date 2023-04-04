import axios from "axios";
import {
  AuthRepository,
  PostSigninParam,
  PostSigninResponse,
  PostSignupParam,
} from "./AuthRepository";
import config from "../../config/config.json";

class AuthRepositoryImpl implements AuthRepository {
  public async postSignin({
    email,
    password,
  }: PostSigninParam): Promise<PostSigninResponse> {
    const { data } = await axios.post(`${config.SERVER}/auth/signin`, {
      email,
      password,
    });

    return data;
  }

  public async postSignup({ email, password }: PostSignupParam): Promise<void> {
    await axios.post(`${config.SERVER}/auth/signup`, { email, password });
  }
}

export default new AuthRepositoryImpl();
