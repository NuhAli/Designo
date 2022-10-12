import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  width: 100vw;
  height: 715px;
  max-width: 1111px;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 100%;
    border-radius: 8px;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row-reverse;
    height: 480px;
  }
`;

export const CardImage = styled.div`
  width: 100%;
  height: 320px;
  position: relative;
  @media screen and (min-width: 1024px) {
    flex-direction: row-reverse;
    height: 480px;
    width: 476px;
  }
`;

export const CardBackground = styled.img`
  height: auto;
  width: auto;
  position: absolute;
  top: -150px;
  right: 0;

  @media screen and (min-width: 768px) {
    right: unset;
    left: -100px;
    top: -390px
  }

  @media screen and (min-width: 768px) {
    right: unset;
    left: -70px;
    top: -160px
  }
`;

export const TextContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: auto;
  height: 395px;
  background-color: #e7816b;
  padding: 80px 24px;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    height: 312px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  @media screen and (min-width: 1024px) {
    align-items: flex-start;
    padding-left: 95px;
    border-bottom-right-radius: 0;
    height: 480px;
    width: 640px;
  }
`;

export const CardTitle = styled.h1`
  margin: 0;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 36px;
  text-align: center;
  color: #ffffff;
  z-index: 2;

  @media screen and (min-width: 1024px) {
    text-align: left;
  }
`;

export const CardDescription = styled.p`
  max-width: 458px;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: #ffffff;
  z-index: 2;

  @media screen and (min-width: 1024px) {
    text-align: left;
  }
`;

export const PatternContainer = styled.div`
  position: absolute;
  top: -25%;
  right: 0;
`;
