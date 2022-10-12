import styled from "styled-components";

export const FormBackground = styled.div`
  width: 100vw;
  max-width: 1110px;
  position: relative;
  height: auto;
  background-color: #e7816b;
  padding: 72px 24px 0 24px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 1;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 100%;
    border-radius: 8px;
    padding: 71px 58px;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    height: 480px;
    padding-top: 58px;
    padding-left: 95px;
    margin-bottom: 50px;
  }
`;

export const FormIntroduction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 3;

  @media screen and (min-width: 768px) {
    text-align: left;
    align-items: flex-start;
  }

  @media screen and (min-width: 1024px) {
    height: 100%;
    justify-content: center;
  }
`;

export const FormTitle = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 36px;
  text-align: center;
  color: #ffffff;
  z-index: 3;
  @media screen and (min-width: 768px) {
    text-align: left;
  }
  @media screen and (min-width: 1024px) {
    margin: 0;
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 48px;
    color: #ffffff;
  }
`;

export const FormText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: #ffffff;
  @media screen and (min-width: 768px) {
    text-align: left;
  }
  @media screen and (min-width: 1024px) {
    width: 450px;
    font-size: 16px;
    line-height: 26px;
    color: #ffffff;
  }
`;

export const Form = styled.form`
  width: 100%;
  height: auto;
  margin-top: 48px;
  @media screen and (min-width: 1024px) {
    width: 380px;
    margin-top: 0;
    display: flex;
    flex-direction: column;
    margin: 0
  }
`;

export const FormInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  padding-left: 11px;
  padding-bottom: 11px;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 26px;
  color: white;
  mix-blend-mode: normal;

  border-bottom: 1px solid white;
  margin-bottom: 25px;
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const FormTextInput = styled.input`
  position: relative;
  width: 100%;
  height: 100px;
  border: none;
  outline: none;
  background-color: transparent;
  padding-left: 11px;
  padding-bottom: 11px;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 26px;
  color: white;
  mix-blend-mode: normal;
  border-bottom: 1px solid white;
  margin-bottom: 1rem;
  &::placeholder {
    position: absolute;
    color: rgba(255, 255, 255, 0.5);
  }

  @media screen and (min-width: 1024px) {
    height: 50px;
  }
`;

export const FormButton = styled.div`
  height: 56px;
  width: 152px;
  margin: 40px auto 40px auto;
  border-radius: 8px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #333136;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  @media screen and (min-width: 768px) {
    margin-right: 0;
  }

  @media screen and (min-width: 1024px) {
    margin: auto 0 0 auto;
  }

  &:hover {
    background-color: #FFAD9B;
    color: white;
  }
`;

export const Image = styled.img`
  width: auto;
  height: auto;
  position: absolute;
  top: 10px;
  left: -105px;

  @media screen and (min-width: 768px) {
    top: -100px;
   left: -60px;
  }
`
