import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 320px;
  background-color: #e7816b;
  margin-bottom: 96px;
  max-width: 1110px;
  position: relative;
  overflow: hidden;
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
  z-index: 3;
`;

export const HeaderTitle = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 36px;
  text-align: center;
  color: #ffffff;
  z-index: 4;
  margin-bottom: 0;

  @media screen and (min-width: 1024px) {
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 48px;
    text-align: center;
    color: #ffffff;
  }
`;

export const HeaderDescription = styled.p`
  margin-top: 1.2rem;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: #ffffff;
  z-index: 3;

  @media screen and (min-width: 768px) {
    width: 60%;
  }

  @media screen and (min-width: 1024px) {
    width: 42%;
    font-size: 16px;
    line-height: 26px;
  }
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  @media screen and (min-width: 768px) {
    top: -120px;
    right: -150px;
  }

  @media screen and (min-width: 1024px) {
    top: -110px;
    right: 1px;
  }
`;
