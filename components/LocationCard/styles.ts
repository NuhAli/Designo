import styled from "styled-components";

export const Card = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 58px;

  @media screen and (min-width: 1024px) {
    width: 350px
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
  transform: matrix(-1, 0, 0, 1, 0, 1);
  border-radius: 100%;
`;

export const CardText = styled.div`
  margin-top: 32px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CardTitle = styled.p`
  font-family: "Jost";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  letter-spacing: 5px;
  color: #333136;
  margin: 0;
`;

export const CardButton = styled.div`
  width: 152px;
  height: 56px;
  background-color: #e7816b;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  margin-top: 32px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ffffff;
`;