import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  width: 100vw;
  height: 714px;
  max-width: 1110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 120px;
  }

  @media screen and (min-width: 1024px) {
    &:nth-child(even) {
      flex-direction: row-reverse;
    }

    &:nth-child(odd) {
      flex-direction: row;
    }

    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
  }
`;

export const CardImage = styled.div`
  position: relative;
  width: 100%;
  height: 320px;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    height: 326px;
    margin-bottom: 30px;
    border-radius: 8px;
  }

  @media screen and (min-width: 1024px) {
    width: 29%;
    height: 326px;
    margin-bottom: 0;
  }
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  width: auto;

  @media screen and (min-width: 768px) {
    top: -260px;
    left: 0;
  }
`

export const CardTextContainer = styled.div`
  width: 100%;
  height: 394px;
  position: relative;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #fdf3f0;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    height: 326px;
    border-radius: 8px;
    align-items: flex-start;
    padding: 88px 75px;
  }

  @media screen and (min-width: 1024px) {
    width: 69%;
    height: 326px;
  }
`;

export const Row = styled.div`
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    width: 255px;
  }
`;

export const DetailRow = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-start;
    width: auto;
    height: auto;
  }
`;

export const CardTitle = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 36px;
  text-align: center;
  color: #e7816b;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    text-align: left;
  }
`;

export const CardSubTitle = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: #333136;
  margin: 0;
  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

export const CardText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: #333136;
  margin: 0;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;
