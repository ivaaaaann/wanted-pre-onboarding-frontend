import styled from "styled-components";
import { palette } from "../../styles/palette";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const Wrap = styled.div`
  width: 512px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px 0px;
  box-sizing: border-box;
`;

export const TopWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Date = styled.p`
  font-size: 30px;
  color: ${palette.gray[400]};
`;

export const AddButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: ${palette.main};
  color: white;
  border: 0px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
`;
