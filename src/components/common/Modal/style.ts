import styled from "styled-components";
import { palette } from "../../../styles/palette";

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.15);
  top: 0px;
  left: 0px;
  position: absolute;
  z-index: 1;
`;

export const Container = styled.div`
  width: 568px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  border-radius: 15px;
  z-index: 2;
`;

export const Title = styled.h2`
  color: black;
  font-size: 30px;
  font-weight: bold;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin-top: auto;
  column-gap: 16px;

  button {
    width: 80px;
    height: 45px;
    font-size: 14px;
    border-radius: 5px;
    background: none;
    cursor: pointer;
  }

  .submit {
    border: 1px solid ${palette.main};
    color: ${palette.main};

    &:hover {
      background-color: ${palette.main};
      color: white;
    }
  }

  .cancel {
    border: 1px solid ${palette.gray[200]};
    color: ${palette.gray[200]};

    &:hover {
      background-color: ${palette.gray[200]};
      color: white;
    }
  }
`;
