import useSignin from "../../hooks/auth/useSignin";
import useValidation from "../../hooks/util/useValidation";
import Button from "../common/Button";
import TextInput from "../common/TextInput";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();

  const { signinData, onChangeData, onSubmitData } = useSignin();

  const { isValid, validator } = useValidation();

  validator([signinData.email !== "" && signinData.password !== ""]);

  return (
    <S.Container>
      <S.Wrap>
        <TextInput.LabelWrap>
          <TextInput.Label>이메일</TextInput.Label>
          <TextInput
            placeholder="이메일을 입력해주세요"
            data-testid="email-input"
            name="email"
            value={signinData.email}
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
            value={signinData.password}
            onChange={onChangeData}
          />
        </TextInput.LabelWrap>
        <S.GuideText>
          계정이 없으신가요?
          <strong onClick={() => navigate("/signup")}>회원가입</strong>
        </S.GuideText>
        <Button
          buttonType="SUBMIT"
          customStyle={{ width: 360, marginTop: 30 }}
          data-testid="signin-button"
          disabled={!isValid}
          onClick={onSubmitData}
        >
          로그인
        </Button>
      </S.Wrap>
    </S.Container>
  );
};

export default Signin;
