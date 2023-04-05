import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  /* color: #0a0f18;
  margin: 0 auto;
  padding: 0;
  z-index: 100;
  background: #fff; */
`;

export const HeaderWrap = styled.div`
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 100;
  padding: 0 20px;
`;

export const HeaderWrapper = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background: #fff; */
`;

export const HeaderUp = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: center;
  font-size: 16px;
  top: 0;
`;

export const LeftSide = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  /* justify-content: start; */
`;

export const ModalBtn = styled.button`
  width: 200px;
  height: 35px;
  border: none;
  display: flex;
  cursor: pointer;
  background-color: #f5f5f5;
`;

export const SearchIcon = styled.div`
  cursor: pointer;
`;

export const MiddleSide = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const MidLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 35px;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  & :hover {
    color: gray;
  }
`;

export const RightSide = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const RightIcon = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const FaLink = styled(Link)`
  text-decoration: none;
  color: black;
  cursor: pointer;
  & :hover {
    color: lightgray;
  }
`;

export const CartLink = styled(Link)`
  text-decoration: none;
  color: black;
  cursor: pointer;
  & :hover {
    color: lightgray;
  }
`;

export const PermLink = styled(Link)`
  text-decoration: none;
  color: black;
  cursor: pointer;
  & :hover {
    color: lightgray;
  }
`;

// ------------------------

export const HeaderDown = styled.div`
  width: 100%;
  padding: 20px 0 10px;
  /* margin: 10px 0; */
  /* background: #fff; */
  /* border-bottom: 1px solid lightgrey; */
  /* position: relative; */
`;

export const DropMenuWrap = styled.div`
  /* &:hover {
  position: fixed;
  top: 120px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
  } */
`;

export const DropMenu = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: inline;
  /* display: flex; */
  align-items: center;
  /* justify-content: flex-start; */
`;

export const DropMenuList = styled.li`
  /* display: inline-block; */
  /* position: relative; */
  display: inline-block;
  z-index: 3;

  &:hover {
    ul {
      display: block;
      /* display: inline-block; */
      /* border-top: 1px solid lightgrey; */
    }
  }
`;

export const DropMenuParents = styled.div`
  margin-right: 80px;
`;

export const DropdownButton = styled(Link)`
  text-decoration: none;
  background: none;
  border: none;
  color: black;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  padding-bottom: 8px;

  &:hover {
    margin: 10px auto;
    border-bottom: 3px solid black;
  }
`;

export const DropChildWrap = styled.div`
  position: fixed;
  top: 110px;
  right: 0;
  left: 0;
  background-color: #fff;

  margin: 10px auto;
  border-top: 1px solid lightgrey;
`;

// parents에 hover후, child를 볼 때, 하단바의 색이 유지되게 하는방법?

export const DropMenuChild = styled.ul`
  list-style-type: none;
  display: none;

  padding: 0;

  /* width: 1250px; */
  margin: 0 auto;
  box-shadow: 0 10px 4px 0px rgba(0, 0, 0, 0.4);
`;

export const DropMenuItem = styled.li`
  /* width: 200px; */
  /* margin: 0 auto; */

  width: 1250px;
  margin: 0 auto;
  padding: 20px 15px;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
`;

// ---------------------------------

export const TopWrapper = styled.div`
  width: 100vw;
  margin: 0 auto;
  /* background: #0a0f18; */
  background: #0a0f18;
  color: #fff;
  /* z-index: -100; */
`;

export const FreeInfo = styled.div`
  padding: 3px 12px;
  background: #0a0f18;
  color: #fff;
`;

export const FreeInfoTitle = styled.div`
  text-align: center;
  font-size: 13px;
`;

// ---------------
export const DropAccount = styled.div`
  position: fixed;
  top: 127px;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
`;

export const DropAccountWrap = styled.div`
  position: fixed;
  top: 70px;
  right: 0;
  width: 250px;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.4);
  z-index: 2;
  font-size: 13px;

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
`;

export const DropUl = styled.ul`
  list-style: none;
  margin: 0;
  background: #fff;
`;

export const DropLi = styled.li`
  padding: 10px 15px;

  &:hover {
    cursor: pointer;
    color: #0a0f18;
    background: lightgray;
  }
`;

export const LinkAccount = styled(Link)`
  text-decoration: none;
  color: black;

  &:visited {
    text-decoration: none;
  }
`;

// -------
export const NoUserModal = styled.div``;

export const NoUserContainer = styled.div`
  margin: 0 auto;
  padding: 10px 20px;
`;

export const NoUserContents = styled.div`
  margin: 0 auto;
`;

export const NoUserTitle = styled.h2`
  margin: 20px 0;
  text-align: center;
`;

export const NoUserText = styled.p`
  margin: 5px 0;
  font-size: 14px;
`;

export const NoUserBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* justify-content: space-between; */
  margin: 20px 0;
  /* width: 50%; */

  button {
    cursor: pointer;
    margin: 0 10px;
  }
`;
