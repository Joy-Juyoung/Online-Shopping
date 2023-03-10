import styled, { css }  from 'styled-components';
import { Link } from 'react-router-dom';


export const HeaderContainer = styled.div`
  max-width: 1280px;
  color: #0a0f18;
  position: sticky;
  margin: 0 auto;
  /* @media screen and (min-width: 576px) {
    max-width: 375px; */
  }

`;

export const HeaderWrapper = styled.div`
  margin: 0 auto;

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
  align-items: left;

`;
export const ModalBtn = styled.button`
    width:200px;
    height: 35px;
    border: none;
    display: flex;
    cursor: pointer;
    background-color: #F5F5F5;

`;

export const SearchIcon = styled.div`
 cursor: pointer;
`;

export const MiddleSide = styled.div`
    width: 100%;
    display: flex;
    cursor: pointer;
`;
export const MidLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 35px;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
`;

export const RightSide = styled.div`
    width: 100%;
    display: flex;
    align-items: right;

`;

export const RightIcon = styled.div`
    margin-left: 10px;
    align-items: center;
    cursor: pointer;
`;

export const FaLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
`;

export const CartLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
`;

export const PermLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
`;

export const HeaderDown = styled.div`
    padding-top:20px;
    /* padding-left: 125px; */
    align-items: center;
    display: flex;
`;

export const DropdownContainer = styled.div`
  position: relative;
  text-align: center;
  
`;

export const DropdownButton = styled.div`
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    margin-right  : 50px;
     cursor: pointer;
`;

export const Menu = styled.div`
  position: absolute;
  left: 50%;
  width: 150px;
  text-align: center;
  opacity: 0;
  visibility: hidden;
  transform: translate(100% );
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  z-index: 9;
  background-color: white;

  &:after {
    content: "";
    height: 0;
    width: 0;
    position: absolute;
     transform: translate(-50%, -50%);
     left: 50%;

  }

  ${({ isDropped }) =>
    isDropped &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translate(-75%, 0);
      left: 50%;
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

export const Li = styled.li`
font-family: 'Roboto', sans-serif;
`;



