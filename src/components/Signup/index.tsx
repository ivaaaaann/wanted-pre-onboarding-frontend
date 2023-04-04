import useSignup from "../../hooks/auth/useSignup";
import useValidation from "../../hooks/util/useValidation";
import Button from "../common/Button";
import TextInput from "../common/TextInput";
import * as S from "./style";

const Signup = () => {
  const { signupData, onChangeData, onSubmitData } = useSignup();

  const { isValid, validator } = useValidation();

  validator([
    signupData.email !== "" || signupData.password !== "",
    signupData.email.includes("@"),
    signupData.password.length >= 8,
  ]);

  return (
    <S.Container>
      <S.Wrap>
        <TextInput.LabelWrap>
          <TextInput.Label>이메일</TextInput.Label>
          <TextInput
            placeholder="이메일을 입력해주세요"
            data-testid="email-input"
            name="email"
            value={signupData.email}
            onChange={onChangeData}
          />
        </TextInput.LabelWrap>
        <TextInput.LabelWrap>
          <TextInput.Label>비밀번호</TextInput.Label>
          <TextInput
            placeholder="이메일을 입력해주세요"
            data-testid="password-input"
            type="password"
            name="password"
            value={signupData.password}
            onChange={onChangeData}
          />
        </TextInput.LabelWrap>
        <Button
          buttonType="SUBMIT"
          customStyle={{ width: 360, marginTop: 30 }}
          data-testid="signup-button"
          disabled={!isValid}
          onClick={onSubmitData}
        >
          회원가입
        </Button>
      </S.Wrap>
    </S.Container>
  );
};

export default Signup;
