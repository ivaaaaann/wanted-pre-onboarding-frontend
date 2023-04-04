import styled from "styled-components";
import { palette } from "../../../styles/palette";

export const Input = styled.input`
  width: 360px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #e1e2e3;
  outline: none;
  color: black;
  font-size: 18px;
  padding: 0px 16px;
  box-sizing: border-box;

  &:focus {
    border: 2px solid ${palette.main};
  }
`;

export const LabelWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const Label = styled.label`
  font-size: 17px;
  color: ${palette.gray[400]};
`;
