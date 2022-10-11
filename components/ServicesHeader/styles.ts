import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 320px;
  background-color: #e7816b;
  margin-bottom: 96px;
  max-width: 1110px;

  @media screen and (min-width: 768px) {
    width: 100%;
    border-radius: 8px;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  padding: 0 24px;
`;

export const HeaderTitle = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 36px;
  text-align: center;
  color: #ffffff;

  @media screen and (min-width: 1110px) {
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 48px;
    /* identical to box height, or 100% */

    text-align: center;

    color: #ffffff;
  }
`;

export const HeaderDescription = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    width: 60%;
  }

  @media screen and (min-width: 1110px) {
    width: 35%;
    font-size: 16px;
    line-height: 26px;
  }
`;
