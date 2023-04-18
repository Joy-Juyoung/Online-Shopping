import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DropAccountContainer = styled.div`
  margin: 0 auto;
  /* color: #0a0f18; */
`;

export const DropAccountCoverTop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 115px;
  background-color: transparent;
  z-index: 2;
`;

export const DropAccountCoverMain = styled.div`
  position: fixed;
  top: 112px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
`;

export const DropAccountWrap = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  display: flex;

  justify-content: flex-end;
`;

export const DropUl = styled.ul`
  position: fixed;
  top: 60px;
  width: 250px;
  border: 1px solid rgba(0, 0, 0, 0.04);
  border-radius: 7px;
  box-shadow: 0 8px 15px 0 rgba(0, 0, 0, 0.4);
  z-index: 3;
  font-size: 14px;

  animation: rotateMenu 400ms ease-in-out forwards;
  transform-origin: top center;

  @keyframes rotateMenu {
    0% {
      transform: rotateX(-90deg);
    }
    70% {
      transform: rotateX(20deg);
    }
    100% {
      transform: rotateX(0deg);
    }
  }
  list-style: none;
  margin: 0;
  background: #fff;
`;

export const DropUlWrap = styled.div`
  margin-bottom: 15px;
`;

export const DropLi = styled.li`
  padding: 10px;
  margin: 10px;

  &:hover {
    cursor: pointer;
    background: #e4e4e4;
    border-radius: 5px;
  }
`;

export const ProfileWrap = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 400;
`;

export const LinkAccount = styled(Link)`
  text-decoration: none;
  color: black;

  &:visited {
    text-decoration: none;
  }
`;
