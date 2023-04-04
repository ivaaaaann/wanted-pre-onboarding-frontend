import { ButtonProps } from "./types";
import * as S from "./style";

const Button = ({
  children,
  customStyle,
  buttonType,
  ...attr
}: ButtonProps) => {
  return (
    <S.Button style={{ ...customStyle }} buttonType={buttonType} {...attr}>
      {children}
    </S.Button>
  );
};

export default Button;
