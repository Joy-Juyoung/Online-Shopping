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
  padding: 0;
  margin: 30px 0 0;
  /* border-bottom: 1px solid lightgrey; */
`;

export const DropMenu = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const DropMenuList = styled.li`
  /* display: inline-block; */
  position: relative;
`;

export const DropMenuParents = styled.div`
  margin-right: 80px;

  &:hover {
    ul {
      display: block;
      margin-right: 20px;
      /* border-top: 2px solid; */
    }
  }
`;
export const DropdownButton = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 22px;
  border: none;
  outline: none;
  background: none;
  font-weight: 600;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  padding-bottom: 10px;

  &:hover {
    border-bottom: 2px solid;
  }
`;

// export const DropdownButton = styled.button`
//   font-size: 16px;
//   border: none;
//   outline: none;
//   background: none;
//   font-weight: 600;
//   cursor: pointer;
//   border-bottom: 2px solid transparent;
//   padding-bottom: 10px;

//   &:hover {
//     border-bottom: 2px solid;
//   }
// `;

// parents에 hover후, child를 볼 때, 하단바의 색이 유지되게 하는방법?

export const DropMenuChild = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  display: none;
  position: absolute;
  background-color: #fff;
  /* min-width: 100px; */
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
`;

export const DropMenuItem = styled.li`
  width: 200px;
  padding: 20px 15px;
  cursor: pointer;
  

  &:hover {
    background-color: #eee;    

  }
`;

// ---------------------------------

export const TopWrapper = styled.div`
  width: 100vw;
  margin: 10px auto;
  /* background: #0a0f18; */
  background: #0a0f18;
  color: #fff;
  z-index: -100;
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
