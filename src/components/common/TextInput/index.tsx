import {
  TextInputLabelProps,
  TextInputLabelWrapProps,
  TextInputProps,
} from "./types";
import * as S from "./style";

const TextInput = ({ customStyle, ...attr }: TextInputProps) => {
  return <S.Input style={{...customStyle}} {...attr} />;
};

const TextInputLabelWrap = ({
  children,
  customStyle,
}: TextInputLabelWrapProps) => {
  return <S.LabelWrap style={{ ...customStyle }}>{children}</S.LabelWrap>;
};

const TextInputLabel = ({ children, customStyle }: TextInputLabelProps) => {
  return <S.Label style={{ ...customStyle }}>{children}</S.Label>;
};

export default Object.assign(TextInput, {
  LabelWrap: TextInputLabelWrap,
  Label: TextInputLabel,
});
