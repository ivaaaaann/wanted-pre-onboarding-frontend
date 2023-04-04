import Button from "../common/Button";
import TextInput from "../common/TextInput";
import * as S from "./style";

const Signup = () => {
  return (
    <S.Container>
      <S.Wrap>
        <TextInput.LabelWrap>
          <TextInput.Label>이메일</TextInput.Label>
          <TextInput
            placeholder="이메일을 입력해주세요"
            data-testid="email-input"
          />
        </TextInput.LabelWrap>
        <TextInput.LabelWrap>
          <TextInput.Label>비밀번호</TextInput.Label>
          <TextInput
            placeholder="이메일을 입력해주세요"
            data-testid="password-input"
            type="password"
          />
        </TextInput.LabelWrap>
        <Button
          buttonType="SUBMIT"
          customStyle={{ width: 360, marginTop: 30 }}
          data-testid="signup-button"
        >
          회원가입
        </Button>
      </S.Wrap>
    </S.Container>
  );
};

export default Signup;
