import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  height: 843px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: space-between;
  margin-bottom: 120px;
  overflow: hidden;
  background-color: #e7816b;
  z-index: 2;

  @media screen and (min-width: 768px) {
    width: 80%;
    max-width: 1111px;
    height: 843px;
    border-radius: 8px;
    padding: 60px;
  }

  @media screen and (min-width: 1440px) {
    height: 640px;
    border-radius: 8px;
    justify-content: flex-start;
  }
`;

export const CardPattern = styled.img`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 0;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: 3;

  @media screen and (min-width: 768px) {
    left: unset;
    right: -110px;
  }
  @media screen and (min-width: 1440px) {
    right: 0;
  }
`;

export const CardPhone = styled.img`
  position: absolute;
  top: 340px;
  height: 100%;
  z-index: 4;

  @media screen and (min-width: 1440px) {
    height: unset;
    width: auto;
    top: -65px;
    right: 0;
  }
`;

export const CardInformation = styled.div`
  margin: 60px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 5;

  @media screen and (min-width: 768px) {
    margin: 0;
  }

  @media screen and (min-width: 1440px) {
    align-items: flex-start;
    margin: 0;
    width: 540px;
    height: 350px;
  }
`;

export const CardTitle = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 36px;
  text-align: center;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 48px;
  }

  @media screen and (min-width: 1440px) {
    text-align: left;
  }
`;

export const CardBody = styled.p`
  margin: 0 0 24px 0;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    width: 445px;
    font-size: 16px;
    line-height: 26px;
  }

  @media screen and (min-width: 1440px) {
    text-align: left;
  }
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