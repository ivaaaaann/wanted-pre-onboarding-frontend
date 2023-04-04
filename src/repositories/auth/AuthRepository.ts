export interface AuthRepository {
  postSignin({ email, password }: PostSigninParam): Promise<PostSigninResponse>;

  postSignup({ email, password }: PostSignupParam): Promise<void>;
}

export interface PostSigninParam {
  email: string;
  password: string;
}

export interface PostSigninResponse {
  access_token: string;
}

export interface PostSignupParam {
  email: string;
  password: string;
}
