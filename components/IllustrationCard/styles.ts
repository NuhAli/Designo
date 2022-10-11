import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  height: 412px;
  margin-right: 0px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  &:last-child {
    margin-bottom: 0;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    height: auto;
    margin-bottom: 32px;

    &:last-child {
      margin-bottom: 0;
    }
  }
  @media screen and (min-width: 1024px) {
    height: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 30px;

    &:last-child {
      margin-right: 0px;
    }
  }
`;

export const ImageBackground = styled.div`
  position: relative;
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 48px;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
  @media screen and (min-width: 1024px) {
    width: auto;
  }
`;

export const FadedCircle = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 202px;
  width: 202px;
  background: linear-gradient(
    90deg,
    rgba(93, 2, 2, 0.0001) 0%,
    rgba(93, 2, 2, 0.497569) 100%
  );
  mix-blend-mode: normal;
  opacity: 0.2;
  transform: matrix(-1, 0, 0, 1, 0, 0);
  border-radius: 100%;
`;

export const TextContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 0 24px;
  @media screen and (min-width: 768px) {
    width: 60%;
    padding: 0;
  }
  @media screen and (min-width: 1024px) {
    width: auto;
  }
`;

export const CardTitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  letter-spacing: 5px;
  color: #333136;
  margin-top: 0;
  margin-bottom: 1rem;
  @media screen and (min-width: 768px) {
    text-align: left;
  }
  @media screen and (min-width: 1024px) {
    text-align: center;
  }
`;

export const CardDescription = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: #333136;
  margin: 0;
  @media screen and (min-width: 768px) {
    text-align: left;
  }
  @media screen and (min-width: 1024px) {
    text-align: center;
  }
`;