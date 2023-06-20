import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import axios from '../../api/axios';
import styled from 'styled-components';

const ModalBackDrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  overflow: hidden;
`;

const ModalContent = styled.div`
  width: 380px;
  min-height: 150px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
`;

const AddCouponContainer = styled.div`
  width: 340px;
`;
const AddTopWrapper  = styled.div`
text-align:right;
`;

const AddMidWrapper = styled.div`
    display: flex;
    margin-bottom: 30px;
    p{
        display: flex;
        margin: 0 auto;
        /* display: flex; */
        text-align: center;
        font-size:25px;
    }
`;

const AddBottomWrapper = styled.div`
   
`;

const ButtonLarge = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 6px;
  background: ${({ lightBg }) => (lightBg ? '#fff' : '#0A0F18')};
  color: ${({ darkFont }) => (darkFont ? '#0A0F18' : '#fff')};
  /* font-weight: ${({ fontStrong }) => (fontStrong ? 'bold' : 'normal')}; */
  /* font-weight: ${({ fontStrong }) => (fontStrong ? 'bold' : 'normal')}; */
  padding: 0;
  font-size: 16px;
  outline: none;
  border: ${({ borderColor }) =>
    borderColor ? '1px solid #0a0f18' : '1px solid #a3a9b3'};
  text-align: center;
  cursor: pointer;

  &:hover {
    font-weight: 600;
  }
`;

const AddToCoupon = ({onClose, meData}) => {

    console.log('pk', meData.data);
    const handleAddToCoupon = async (e) => {
        // e.preventDefault();
        // const addToCoupon = await axios.post(
        //   '/coupons/',
        //   {
        //     users: meData.pk,
        //     name: "50",
        //     description: "50%off",
        //     discount_rate:50,
        //   },
        //   {
        //     headers: { 'Content-Type': 'application/json' },
        //     withCredentials: true,
        //   }
        // );
        // console.log('test', addToCoupon.data);
        // onClose();
      };

  return (
    <ModalBackDrop>
        <ModalContent>
            <form 
                onSubmit={handleAddToCoupon}
            >
                <AddCouponContainer>
                    <AddTopWrapper>
                        <div onClick={onClose}>
                            <CloseIcon fontSize='medium' />
                        </div>
                    </AddTopWrapper>
                    <AddMidWrapper>
                        <p>Success!!</p>
                    </AddMidWrapper>
                    <AddBottomWrapper>
                        <ButtonLarge>
                            Continue shopping
                        </ButtonLarge>
                    </AddBottomWrapper>
                </AddCouponContainer>
            </form>
        </ModalContent>
    </ModalBackDrop>
  )
}

export default AddToCoupon;