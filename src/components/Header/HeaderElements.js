import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrap = styled.div`
  /* max-width: 1250px; */
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 3;
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

export const ModalBtnWrap = styled.div`
  position: relative;
  display: flex;
  z-index: 2;
  height: auto;
`;

export const ModalBtn = styled.button`
  width: 338px;
  height: 38px;
  border-radius: 6px;
  position: relative;
  font-size: 16px;
  appearance: none;
  border: 0px;
  background: none;
  cursor: pointer;
`;

export const ModalBtnDetail = styled.div`
  display: flex;
  align-items: center;
  height: 38px;
  width: 338px;
  padding: 0px 8px;
  border-radius: 4px;
  box-sizing: border-box;
  background: rgb(242, 244, 247);

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: 8px;
    color: rgb(152, 162, 179);
    font-weight: 400;
    font-size: 16px;
    white-space: nowrap;
  }
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
  font-size: 24px;
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
`;

export const DropMenuWrap = styled.span`
  /* position: fixed;
  top: 120px;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1; */
`;

export const DropMenu = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: inline;
  align-items: center;
`;

export const DropMenuList = styled.li`
  display: inline-block;
  z-index: 3;
  /* transition: 0.3s; */

  &:hover {
    ul {
      display: block;
    }
    span {
      border-bottom: 3px solid #0a0f18;
      padding-bottom: 4px;
      z-index: 4;
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
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  padding-bottom: 10px;
`;

export const DropChildWrap = styled.div`
  position: fixed;
  top: 98px;
  right: 0;
  left: 0;
  background-color: #fff;
  margin: 10px auto;
`;

export const DropMenuChild = styled.ul`
  list-style-type: none;
  display: none;
  /* padding: 10px 0; */
  margin: 0 auto;
  box-shadow: 0 500px 2px 500px rgba(0, 0, 0, 0.4);
  font-size: 14px;
  /* padding-bottom: 10px; */
`;

export const DropMenuItem = styled.li`
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
  width: 100%;
  margin: 0 auto;
  background: #0a0f18;
  color: #fff;
`;

export const FreeInfo = styled.div`
  display: flex;
  padding: 3px 12px;
  background: #0a0f18;
  color: #fff;
  min-height: 34px;
  align-items: center;
  justify-content: center;
`;

export const FreeInfoTitle = styled.p`
  text-align: center;
  font-size: 13px;
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
  margin: 20px 0;

  button {
    cursor: pointer;
    margin: 0 10px;
  }
`;
