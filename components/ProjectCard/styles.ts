import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  height: 478px;
  background: #fdf3f0;
  border-radius: 15px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #e7816b;
    p {
      color: white;
    }

    h2 {
      color: white;
    }
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    height: 310px;
    width: 100%;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: column;
    width: 100%;
    height: 478px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    width: 350px;
    height: 478px;
  }
`;

export const CardImage = styled.div`
  width: 100%;
  height: 70%;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 50%;
    height: 100%;
  }
  @media screen and (min-width: 1024px) {
    width: 100%;
    height: 70%;
  }
`;

export const CardText = styled.div`
  width: 100%;
  height: 30%;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 50%;
    height: 100%;
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
    height: 30%;
  }
`;

export const CardTitle = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  letter-spacing: 5px;
  color: #e7816b;
  text-transform: uppercase;
  margin: 0;
`;

export const CardDescription = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: #333136;
  margin-bottom: 0px;
`;
