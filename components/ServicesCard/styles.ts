import styled from "styled-components";

export const CardGrid = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  margin-bottom: 24px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  z-index: 1;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    height: 200px;
  }

  @media screen and (min-width: 1024px) {
    &:first-child {
      height: 640px;
      min-width: 100%;
      max-width: 541px;
      padding-bottom: 0;
      grid-area: "a";
      margin-right: 30px;
    }
    &:nth-child(2) {
      position: absolute;
      top: 0;
      right: 0;
      width: 50%;
      max-width: 541px;
      height: 308px;
      grid-area: "b";
    }
    &:nth-child(3) {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 50%;
      max-width: 541px;
      height: 308px;
      grid-area: "c";
    }
  }
`;

export const CardFlex = styled.div`
  position: relative;
  width: 100%;
  max-width: 689px;
  height: 250px;
  margin-bottom: 24px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  z-index: 1;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    height: 200px;
  }

  @media screen and (min-width: 1024px) {
    width: 48%;
    max-width: 541px;
    height: 308px;
  }
`;

export const CardBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.2s ease-in-out;
  z-index: 2;

  &:hover {
    background-color: rgba(231, 129, 107, 0.7);
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

export const CardText = styled.div`
  height: auto;
  width: auto;
  text-align: center;
  z-index: 4;
`;

export const CardTitle = styled.p`
  margin-bottom: 12px;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #ffffff;
`;

export const CardLink = styled.a`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 5px;
  text-transform: uppercase;
  vertical-align: middle;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    position: relative;
    left: 15px;
    color: #e7816b;
  }
`;
