import { Link } from 'react-router-dom';
import styled from 'styled-components';



export const ModalContainer = styled.div`
  /* position: fixed; */
  /* top: 0;
  bottom: 0;
  left: 0;
  right: 0; */
  /* height: 50vh; */
  /* background-color: rgba(0, 0, 0, 0.4); */
  /* z-index: 2; */
`;

export const ModalContainerSkin = styled.div`
  position: fixed;
  top: 0;
  /* bottom: 0; */
  left: 0;
  right: 0;
  /* height: -50vh; */
  /* background-color: rgba(0, 0, 0, 0.4); */
  background-color: #fff;
  /* background: red; */
  height: 500px;
  z-index: 2;
`;

export const TestModalContainer = styled.div`
  position: fixed;
  /* position: relative; */
  top: 500px;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #fff;
  background-color: rgba(0, 0, 0, 0.4);
  /* z-index: 2; */
  /* height: 50vh; */
`;

export const TestModalWrapper = styled.div`
  /* position: fixed;
  top: 0;
  right: 0;
  left: 0; */
  width: 680px;
  padding: 30px 0;
  margin: 0 auto;
  overflow: hidden auto;
  /* inset: 0px; */
  /* height: 100%; */
  /* box-sizing: border-box; */
`;

export const ModalHeader = styled.header`
  width: 680px;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0px auto 24px;
  background-color: rgb(255, 255, 255);
`;

export const ModalHeaderSearch = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  flex: 1 1 100%;
  height: 38px;
  padding-right: 8px;
  margin: 0px auto;
  border-radius: 4px;
  background-color: rgb(242, 244, 247);
  padding: 0px;
  form {
    width: 100%;
  }
  span {
    position: absolute;
    top: 50%;
    left: -8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(-50%);
  }
`;
export const ModalHeaderInput = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 34px;
  background-color: transparent;
  color: rgb(10, 15, 24);
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  vertical-align: middle;
  outline: none;
  border: 0px;
  border-radius: 0px;
`;

export const ModalCloseBtn = styled.button`
  position: fixed;
  top: 11px;
  right: 16px;
  width: 38px;
  height: 38px;
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px;
  background: none;
  cursor: pointer;
`;

export const ModalBody = styled.div`
  flex-direction: row;
  padding: 0px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  min-height: calc(100% - 78px);
`;

export const SearchResult = styled.article`
  max-width: 325px;
  height: 100%;
  padding: 0px;
  margin: 0px 32px 0px 0px;
  border: 0px;  
  flex: 0 1 auto;
  min-width: 0px;
  width: 100%;
`;
export const ResultHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    h3 {
      font-size: 18px;
    }
`;

export const HeaderDelete = styled.button`
    cursor: pointer;
    border: 0px;
    background: none;
    color: rgb(116, 123, 139);
    font-size: 12px;
`;

export const ResultList = styled.ul`
  counter-reset: item 0;
  list-style: none;
`;

export const ResultDetail = styled.li`
  display: flex;
  overflow: hidden;
  white-space: nowrap;
  justify-content: space-between;
  margin-bottom: 8.5px;
  align-items: center;
  /* margin-bottom: 56px; */
`;

export const DetailDelete = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border: 0px;
  background: none;
  cursor: pointer;
  svg{
    width: 14;
    height: 14;
  }
`;

export const ResultLink = styled(Link)`
  flex: 1 1 0%;
  display: flex;
  align-items: center;
  min-width: 0px;
  font-size: 14px;
  color: rgb(10, 15, 24);
  text-decoration: none;
  cursor: pointer;

  svg{
    margin-right: 8px;
    display: flex;
  align-items: center;
  }
  p {
    display: flex;
    align-items: center;
    font-size: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  span{
    ::before {
      content: "";
      display: inline-block;
      vertical-align: top;
      width: 1px;
      height: 12px;
      margin: 0px 8px;
      background-color: rgb(184, 190, 201);
    }
    display: flex;
    align-items: center;
    font-size: 13px;
    font-weight: 400;
    color: rgb(122, 128, 139);
  }
`;

export const ModalBodyWrap = styled.article`
  flex: 1 1 auto;
  min-width: 0px;
  width: 100%;
  box-sizing: border-box;
`;

export const ModalBodyHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  h3 {
    height: 24px;
    color: rgb(10, 15, 24);
    font-size: 18px;
  }
  button {
    border: none;
    background-color: none;
  }
`;

export const ModalBodyParagraph = styled.ol`
  /* counter-reset: item 0; */
  /* counter-increment: item 1; */
  /* transform-origin: top;
  animation: popularMenu 0.9s ease-in-out 0s forwards running;
  @keyframes popularMenu {
    0% {
      transform: rotateX(-90deg);
    }
    70% {
      transform: rotateX(20deg);
    }
    100% {
      transform: rotateX(0deg);
    }
  } */
`;

export const ModalBodyPList = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  margin-bottom: 10px;

  animation-duration: 0.9s;
  animation-name: slidein;
  animation-iteration-count: 1;
  transition-timing-function: ease;
  @keyframes slidein {
    from {
      opacity:0;
      /* margin-top: 100%; */
      transform: translateY(-200%);
      }
    50% {
      opacity:0.5;
   }
    to {
      opacity:1;
      /* margin-top: 0%; */
      transform: translateY(0%);
      }
  }
  span{
    margin:0px;
    font-weight: bold;
    min-width: 16px;
    /* margin-right: 8px; */
    font-size: 14px;
  }
  p {
    margin-left: 15px;
    width: 100%;
    line-height: 24px;
    font-size: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

// export const TestModalContainer = styled.div`
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     z-index: 100;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//   `;
// export const TestModalWrapper = styled.div`
//     position: fixed;
//     width: 100%;
//     height: 100%;
//     background: rgba(91, 88, 88, 0.5);
//     /* backdrop-filter: blur(10px); */
// `;
// export const TestModalBlock = styled.div`
//     position: absolute;
//     box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16);
//     padding: 1.5rem;
//     background-color: #fff;
//     width: 100%;
//     height: 500%;
//     animation: modal-show 0.5s;
//     @keyframes modal-show {
//         from {
//             opacity: 0;
//         }
//         to {
//             opacity: 1;
//         }
//     }

// `;

// export const TestModalCloseBtn = styled.button`
//     cursor: pointer;
//     background-color: white;
//     color: black;
//     border-style:none;
//     width: 25px;
//     font-size: 30px;
//     position: absolute;
//     right: 2rem;
//     top: 1.5rem;
// `;

// export const TestModalSearch = styled.input`
//     width: 35%;
//     height: 10%;
//     border: none;
//     background-color: #e8e5e5;
//     border-radius: 5px;
//     margin-left:35%;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     padding: 10px;

// `;

// export const TestModalContent = styled.div`
//     margin-top: 25px;
//     margin-left:35%;
// `;