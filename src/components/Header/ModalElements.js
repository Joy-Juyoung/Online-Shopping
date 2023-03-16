import styled  from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';




export const ModalContainer = styled.div`
  min-width: 1280px;
  height: 1000%;
  background-color: #a9a9a9;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 101;
  /* opacity:0.5 ; */

`;

export const ModalWrapper = styled.div`
  min-width: 1280px;
  /* height: 50%; */
  background-color: white;
  /* display: flex;
  flex-direction: column; */
  /* padding: 25px; */
  z-index: 102;
`;
export const ModalTopWrapper = styled.div`
  /* display: flex; */
  
`;
// export const SearchIptWrapper = styled.div`
//   /* display: flex;
//   justify-content: center; */
// `;

export const SearchModalIpt = styled.input`
  margin-right: 50px;

  
`;

// export const CloseButtonWrapper = styled.div`
//   /* display: flex;
//   justify-content: flex-end; */
// `;

export const CloseModalButton = styled(CloseIcon)`
  /* background-color: transparent; */
  border: none;
  font-size: 25px;
  cursor: pointer;

`;
export const ModalContent = styled.div`
  /* display: flex;
  flex-direction: column; */
  /* justify-content: center;
  align-items: center;  */
  /* line-height: 1.8; */
  

  /* p {
    margin-bottom: 1rem;
  } */
`;
// export const Background = styled.div`
//   /* width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.8);
//   position: fixed;
//   display: flex;
//   justify-content: center;
//   align-items: center; */
//   /* z-index: 999; */
// `;

// export const ModalWrapper = styled.div`
//   /* width: 800px;
//   height: 500px;
//   background: #fff;
//   color: #000; */
//   /* display: flex; */
//   /* position: relative;
//   z-index: 999; 
//   border-radius: 10px; */
// `;

// export const ModalSearch = styled.div`
//     /* margin:0 auto;
//     align-items: center;
//     justify-content: center; */
//     /* background: gray; */
// `;
// export const ModalInput = styled.input`
//   /* width: 500px;
//   height: 30px;
//   border-radius: 10px;
//   background: gray; */
// `;

// export const ModalContent = styled.div`
//   /* display: flex;
//   flex-direction: column; */
//   /* justify-content: center;
//   align-items: center;  */
//   /* line-height: 1.8; */
  

//   /* p {
//     margin-bottom: 1rem;
//   } */
// `;

// export const CloseModalButton = styled(CloseIcon)`
//   /* cursor: pointer;
//   position: absolute;
//   top: 20px;
//   right: 20px;
//   width: 32px;
//   height: 32px;
//   padding: 0; */
// `;

