import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: auto;
  background-color: #1d1c1e;
  display: flex;
  justify-content: center;
  padding: 253px 24px 64px 24px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1110px;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Logo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: "logo";
  justify-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  p {
    margin-left: 1rem;
    color: white;
    font-weight: 700;
    font-size: 24px;
    text-transform: uppercase;
    line-height: 26.88px;
    letter-spacing: 5px;
  }
  @media screen and (min-width: 768px) {
    border: none;
    width: 50%;
    justify-content: flex-start;
    padding-bottom: 1rem;
  }
`;

export const LogoIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: conic-gradient(
    from 90deg at 50% 50%,
    rgba(231, 129, 107, 0.0001) 0deg,
    #e7816b 359.74deg,
    rgba(231, 129, 107, 0.0001) 360deg
  );
  transform: matrix(0, -1, -1, 0, 0, 0);
`;

export const LogoBorder = styled.div`
  width: 100%;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.2);
  grid-area: "border";
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const FooterList = styled.ul`
  margin-top: 2rem;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  list-style: none;
  height: auto;
  width: auto;
  text-align: center;
  grid-area: "links";

  @media screen and (min-width: 768px) {
    justify-content: flex-end;
    flex-direction: row;
    width: 50%;
    margin: 0;
    padding-bottom: 1rem;
  }
`;

export const FooterListLink = styled.li`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 2px;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    color: #e7816b;
  }
  &:nth-child(2) {
    margin: 24px;
  }
`;

export const AdressArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  grid-area: "address";
  @media screen and (min-width: 768px) {
    width: 223px;
    text-align: left;
    align-items: flex-start;
  }
`;

export const ContactArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  grid-area: "contact";

  @media screen and (min-width: 768px) {
    width: 223px;
    text-align: left;
    align-items: flex-start;
  }

  @media screen and (min-width: 1440px) {
   margin-left: 8rem;
  }
`;

export const SocialsArea = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  grid-area: "socials";

  img{ 
    margin-right: 1rem;

    &:last-child {
        margin-right: 0;
    }
  }
  @media screen and (min-width: 768px) {
    align-items: flex-end;
  }

  @media screen and (min-width: 1440px) {
   margin-left: auto;
  }
`;

export const InfoText = styled.p`
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.5;
  margin: 0;

  &:nth-child(2) {
    margin: 10px 0;
  }
`;

export const RowTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const RowBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    justify-content: flex-start;
  }
`;