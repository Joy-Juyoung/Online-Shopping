import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SideContainer = styled.div``;

export const SideHeader = styled.div``;

export const SideNav = styled.div`
  height: 80vh;
  width: 250px;
  display: flex;
  align-items: center;
  transition: 350ms;
  font-size: 2rem;
`;

export const SideShow = styled.div`
  /* background-color: #16171b; */
  /* background: #23282c; */
  background: #21201e;
  width: 250px;
  height: 80vh;
  display: flex;
  flex-direction: column;
`;

export const SideLink = styled.div`
  /* padding: 35px 0px; */
  /* margin: 30px 0 30px 20px; */
  /* margin: 30px 20px; */
  display: flex;
  /* justify-content: flex-start; */
  align-items: center;
  color: #fff;
  /* span {
    padding: 0 8px;
  } */
  h1 {
    margin: 35px 0 20px 32px;
    font-size: 24px;
  }
`;

export const SideShowUl = styled.ul``;

// export const SideShowLi = styled.li`
//   display: flex;
//   align-items: center;
//   padding: 8px 0px 8px 16px;
//   list-style: none;
//   height: 60px;
//   width: 100%;

//   a {
//     text-decoration: none;
//     color: #f5f5f5;
//     font-size: 18px;
//     width: 95%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     padding: 0 16px;
//     border-radius: 4px;

//     &:hover {
//       background: #292a2c;
//     }
//   }
// `;

export const AdSide = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

// export const AdLeftSide = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
// `;

export const AdLeftIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const AdRightSide = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;

  /* background: #ffae00;
  color: #21201e;
  border-radius: 10px;
  padding: 10px 15px; */
`;

export const AdUserIcon = styled.div`
  /* background: #21201e; */
  /* color: #21201e;
  text-decoration: none; */
  border-radius: 10px;
  /* padding: 10px 15px; */
  margin-right: 10px;

  /* &:hover {
    background: #ffae00;
    color: #21201e;
  } */
`;

export const AdUserLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  background: #fffff7;
  color: #21201e;
  border: 2px solid #ffae00;

  padding: 10px 15px;
  border-radius: 10px;

  &:hover {
    background: #21201e;
    color: #ffae00;
    border: 2px solid #21201e;
  }
`;

export const AdInfoIcon = styled.div`
  display: flex;
  align-items: center;
  background: #ffae00;
  color: #21201e;
  border-radius: 10px;
  padding: 10px 15px;
  border: 2px solid #ffae00;
  cursor: pointer;
`;

export const AdRightIcon = styled.div`
  display: flex;
  align-items: center;
  /* cursor: default; */
`;

export const AdPermLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-left: 10px;
  color: #21201e;
  /* cursor: pointer; */
`;

// export const SideHideLink = styled(Link)`
//   padding: 20px 0px 30px;
//   display: flex;
//   justify-content: center;
// `;

// export const SideHide = styled.div`
//   width: 80px;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;

//   background-color: #000;
// `;

// export const SideHideUl = styled.ul`
// `;

// export const SideHideLi = styled.li`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 0 8px;
//   list-style: none;
//   height: 60px;

//   svg {
//     font-size: 2em;
//   }

//   a {
//     text-decoration: none;
//     color: #f5f5f5;
//     font-size: 18px;
//     width: 95%;
//     height: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     border-radius: 4px;

//     &:hover {
//       background: #292a2c;
//     }
//   }
// `;
