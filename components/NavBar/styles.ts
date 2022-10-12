import styled from "styled-components";
import { FaBars,FaTimes } from "react-icons/fa";

export const Container = styled.nav`
  width: 100%;
  height: 96px;
  background-color: white;
  padding: 35px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  @media screen and (min-width: 768px) {
    padding: 64px 40px;
  }
`;

export const Wrapper = styled.div`
  height: 96px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;

  @media screen and (min-width: 1111px) {
    max-width: 1111px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  p {
    margin-left: 1rem;
    color: #333136;
    font-weight: 700;
    font-size: 24px;
    line-height: 26.88;
    letter-spacing: 5px;
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

export const SidebarIconBars = styled(FaBars)`
  color: black;
  font-size: 1.7rem;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const SidebarIconTimes = styled(FaTimes)`
  color: black;
  font-size: 1.7rem;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style-type: none;
  width: auto;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  padding-right: 42px;
  color: #333136;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 2px;
  text-align: left;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: rgb(231,129,107)
  }
  &:last-child {
    padding-right: 0px;
  }
`;
