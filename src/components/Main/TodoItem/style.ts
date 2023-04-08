import styled, { css } from "styled-components";
import { palette } from "../../../styles/palette";

export const Container = styled.li`
  display: flex;
  align-items: center;
  column-gap: 10px;
  margin-top: 30px;
`;

export const CheckBox = styled.input`
  min-width: 35px;
  height: 35px;
  background: none;
  border: 0px;
  appearance: none;
  border-radius: 100%;
  cursor: pointer;
  border: 1px solid #bcbcbc;

  ::after {
    border: 1px solid ${palette.main};
    border-width: 0 4px 4px 0;
    content: "";
    display: none;
    height: 50%;
    left: 35%;
    position: relative;
    top: 16%;
    transform: rotate(45deg);
    width: 20%;
  }

  :checked {
    border: 0px;
  }

  :checked::after {
    display: block;
  }
`;

export const Content = styled.p<{ checked: boolean }>`
  width: 100%;
  color: black;
  font-size: 20px;

  ${({ checked }) =>
    checked &&
    css`
      text-decoration: line-through;
      color: ${palette.gray[300]};
    `}
`;

export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
`;

export const Button = styled.button`
  min-width: 35px;
  height: 35px;
  border-radius: 100%;
  background-color: white;
  border: 0px;
  font-size: 14px;
  color: black;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(80%);
  }
`;
