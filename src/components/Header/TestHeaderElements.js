import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DropMenu = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const DropMenuParents = styled.li`
  display: inline-block;
  background-color: #4285f4;
  position: relative;

  &:hover {
    ul {
      display: block;
    }
  }
`;

export const DropMenuChild = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  display: none;
  position: absolute;
  background-color: #fff;
  min-width: 100px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
`;

export const DropMenuItem = styled.li`
  width: 100%;

  text-decoration: none;
  &:hover {
////=======
 // text-decoration:none ;
 // 
 // &:hover, {
//>>>>>>> shop-main
    background-color: #eee;
  }
`;

// export const DropdownContainer = styled.div`
//   position: relative;
//   text-align: center;
//   margin-bottom: 20px;
// `;

// export const DropdownButton = styled.div`
//   font-size: 20px;
//   font-family: 'Roboto', sans-serif;
//   margin-right: 50px;
//   cursor: pointer;
// `;

// export const Menu = styled.div`
//   position: absolute;
//   width: 100%;
//   /* text-align: center; */
//   opacity: 0;
//   visibility: hidden;
//   background-color: white;
//   color: black;
//   &:after {
//     content: '';
//     height: 0;
//     width: 0;
//     position: absolute;
//   }

//   ${({ isDropped }) =>
//     isDropped &&
//     css`
//       /* text-align: left; */
//       opacity: 1;
//       visibility: visible;
//       border-top: 3px solid red;
//       margin-top: 20px;
//       width: 100%;
//       color: black;
//     `};
// `;

// export const Ul = styled.ul`
//   & > li {
//     margin-bottom: 20px;
//   }

//   & > li:first-of-type {
//     margin-top: 10px;
//   }

//   list-style-type: none;
//   padding: 0;
//   margin: 0;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
// `;
