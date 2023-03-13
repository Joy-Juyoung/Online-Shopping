import styled  from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

export const Background = styled.div`
width: 100%;
height: 100%;
/* background-color: lightgray; */
/* opacity: 0; */
position: fixed;
display: flex;
margin:0 auto;
/* justify-content: center;
align-items: center; */
`;

export const ModalWrapper = styled.div`
  width: 1000px;
  height: 500px;
  background: #FFFFFF;
  color: #000;
  /* position: relative; */
  z-index: 10;
  border-radius: 10px;
  margin:0 auto;
  /* justify-content: center; */
`;

export const ModalSearch = styled.div`
    margin:0 auto;
    align-items: center;
    justify-content: center;
`;
export const ModalInput = styled.input`
  width: 500px;
  height: 30px;
  border-radius: 10px;
  background: #FFFFFF;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center;  */
  line-height: 1.8;
  

  p {
    margin-bottom: 1rem;
  }
`;

export const CloseModalButton = styled(CloseIcon)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

