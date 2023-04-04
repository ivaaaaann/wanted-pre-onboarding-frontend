import styled from "styled-components";
import { palette } from "../../styles/palette";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

export const GuideText = styled.p`
  font-size: 15px;
  color: #bcbcbc;

  strong {
    color: ${palette.main};
    cursor: pointer;
  }
`;
