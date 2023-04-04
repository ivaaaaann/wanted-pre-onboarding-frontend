import styled, { css } from "styled-components";
import { palette } from "../../../styles/palette";
import { ButtonType } from "./types";

export const Button = styled.button<{
  buttonType: ButtonType;
  disabled?: boolean;
}>`
  width: 130px;
  height: 50px;
  border-radius: 5px;
  border: 0px;
  cursor: pointer;
  font-size: 18px;

  ${({ buttonType }) =>
    buttonType === "SUBMIT"
      ? css`
          background-color: ${palette.main};
          color: white;
        `
      : css`
          border: 1px solid ${palette.gray[200]};
          color: ${palette.gray[200]};
        `}

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 80%;
      cursor: default;
    `}
`;
