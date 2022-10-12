import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  width: 100vw;
  max-width: 1110px;
  height: 865px;
  display: flex;
  flex-direction: column;
  background-color: #fdf3f0;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    width: 100%;
    height: 736px;
    margin-top: 120px;
    margin-bottom: 120px;
    border-radius: 8px;
  }

  @media screen and (min-width: 1024px) {
    height: 640px;
    flex-direction: row;
  }
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 280px;
  left: 0;
  height: auto;
  width: auto;

  @media screen and (min-width: 768px) {
    top: 100px;
    left: 100px;
  }
`

export const CardReverse = styled.div`
  position: relative;
  width: 100vw;
  height: 865px;
  max-width: 1110px;
  display: flex;
  flex-direction: column-reverse;
  background-color: #fdf3f0;
  margin-bottom: 310px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 736px;
    border-radius: 8px;
  }

  @media screen and (min-width: 1024px) {
    height: 640px;
    flex-direction: row-reverse;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 320px;
  position: relative;

  @media screen and (min-width: 1024px) {
    height: 640px;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 545px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 80px 24px 105px 24px;

  @media screen and (min-width: 768px) {
    height: 416px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  @media screen and (min-width: 1024px) {
    padding: 154px 96px;
    height: 100%;
    text-align: left;
  }
`;

export const CardTitle = styled.h2`
  font-family: "Jost";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 36px;
  color: #e7816b;
  text-align: center;
  @media screen and (min-width: 1024px) {
    text-align: left;
  }
`;

export const CardDescription = styled.p`
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  color: #333136;
  text-align: center;
  @media screen and (min-width: 1024px) {
    text-align: left;
  }
`;
