import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 96px;
  left: 0;
  z-index: 9999;
  overflow: hidden;
`;

export const Menu = styled.ul`
  margin: 0;
  width: 375px;
  height: 235px;
  background: #1d1c1e;
  z-index: 99999999;
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style: none;
`;

export const MenuLink = styled.li`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 25px;
  letter-spacing: 2px;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    color: #e7816b;
  }
`;
