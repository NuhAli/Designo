import styled from "styled-components";

export const Card = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  text-align: center;
  overflow: hidden;
  top: -85%;
  left: 0;
  right: 0;
  width: 100%;
  height: 379px;
  margin: 0 auto;
  background-color: #e7816b;
  border-radius: 8px;
  z-index: 10;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    height: 292px;
    width: 100%;
    max-width: 1111px;
    top: -220%;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 96px;
  }
`;

export const TextContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding: 0 24px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  text-align: center;
  z-index: 12;

  @media screen and (min-width: 768px) {
    justify-content: center;
  }
  @media screen and (min-width: 1024px) {
    align-items: flex-start;
  }
`;

export const CardTitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 36px;
  text-align: center;
  color: #ffffff;
  margin: 0;

  @media screen and (min-width: 768px) {
    width: 250px;
    margin: 0 auto;
  }
  @media screen and (min-width: 1024px) {
    margin: 0;
    text-align: left;
  }
`;

export const CardDescription = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: #ffffff;
  margin: 12px auto 32px auto;
  z-index: 999;
  @media screen and (min-width: 768px) {
    width: 400px;
  }

  @media screen and (min-width: 1024px) {
    text-align: left;
    width: 420px;
    margin-left: 0;
  }
`;

export const ButtonContainer = styled.div`
  margin: 0 auto;
  z-index: 999;
`;

export const CardButton = styled.div`
  height: 56px;
  width: 152px;
  border-radius: 8px;
  color: #333136;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 1px;
  transition: all 0.1s ease-in-out;
  text-transform: uppercase;
  z-index: 9999;
  cursor: pointer;

  &:hover {
    background: #ffad9b;
    color: white;
  }
`;

export const CardImage = styled.img`
  position: absolute;
  top: -100px;
  left: -240px;

  @media screen and (min-width: 768px) {
    top: -150px;
    left: unset;
  }

  @media screen and (min-width: 1024px) {
    top: -150px;
    right: 0;
  }
`;
