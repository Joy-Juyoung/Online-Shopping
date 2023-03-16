import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  max-width: 1250px;
  width: 100%;
  color: #0a0f18;
  /* position: sticky; */
  margin: 0 auto;
  padding: 0 20px;
  z-index: 100;
  /* @media screen and (min-width: 576px) {
    max-width: 375px; */
  /* } */
`;

export const HeaderWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  position: sticky;
  flex-direction: column;
  justify-content: center;
  /* position: fixed; */
  z-index: 50;
`;

export const HeaderUp = styled.div`
  padding-top: 20px;
  /* padding-left: 10px;
    padding-right: 10px; */
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

export const HeaderDown = styled.div`
  padding-top: 20px;
  /* padding-left: 125px; */
  display: flex;
  align-items: center;
`;

export const DropdownContainer = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 20px;
`;

export const DropdownButton = styled.div`
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  margin-right: 50px;
  cursor: pointer;
`;

export const Menu = styled.div`
  position: absolute;
  width: 100%;
  /* text-align: center; */
  opacity: 0;
  visibility: hidden;
  background-color: white;
  color: black;
  &:after {
    content: '';
    height: 0;
    width: 0;
    position: absolute;
  }

  ${({ isDropped }) =>
    isDropped &&
    css`
      /* text-align: left; */
      opacity: 1;
      visibility: visible;
      border-top: 3px solid red;
      margin-top: 20px;
      width: 100%;
      color: black;
    `};
`;

export const Ul = styled.ul`
  & > li {

    margin-bottom: 20px;
  }

  & > li:first-of-type {
    margin-top: 10px;
  }

  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const TopWrapper = styled.div`
  width: 100%;
  /* display: flex; */
  align-items: center;
  justify-content: start;
  margin: 0 auto;
`;

export const FreeInfo = styled.div`
  width: 100%;
  min-height: 40px;
  display: grid;
  -webkit-box-align: center;
  align-items: center;
  grid-template-columns: 100%;
  padding: 3px 12px;
  background-color: rgb(10, 15, 24);
  box-sizing: border-box;
`;

export const FreeInfoTitle = styled.div`
  position: relative;
  grid-row-start: 1;
  grid-column-start: 1;
  height: auto;
  transition-property: z-index;
  display: block;
  animation: 0.5s linear 1s 1 normal both running lbWRkT;
  transition-delay: 1s;
  /* z-index: 1; */
  p {
    /* max-width: 1250px; */
    margin: 0px auto;
    font-size: 16px;
    line-height: 24px;
    display: block;
    font-weight: 400;
    color: #ffffff;
    text-align: center;
    word-break: keep-all;
  }
`;

export const Li = styled.li``;
