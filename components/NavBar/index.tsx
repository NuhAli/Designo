import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

const Container = styled.div`
  width: 100%;
  height: 96px;
  background-color: white;
  padding: 35px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  svg {
    color: black;
    font-size: 1.7rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    margin-left: 1rem;
    color: #333136;
    font-weight: 700;
    font-size: 24px;
    line-height: 26.88;
    letter-spacing: 5px;
  }
`;

const LogoIcon = styled.div`
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

export const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
        <LogoIcon />
          <p>DESIGNO</p>
        </Logo>
        <FaBars />
      </Wrapper>
    </Container>
  );
};

export default NavBar;
