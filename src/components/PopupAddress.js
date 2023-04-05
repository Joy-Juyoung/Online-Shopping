import React from 'react';
import styled from 'styled-components';
import { ButtonLarge, ButtonSmall, ButtonUtils } from './ButtonElements';

const PopupBox = styled.div`
  position: fixed;
  background: #00000050;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 3;
`;

const Box = styled.div`
  position: relative;
  width: 40%;
  margin: 0 auto;
  height: auto;
  max-height: 70vh;
  margin-top: calc(100vh - 75vh - 20px);
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  border: 1px solid #999;
  overflow: auto;
`;

const BoxH2 = styled.h2`
  text-align: center;
`;

const BoxUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px 0;
`;

const BoxLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid lightgray;
  padding: 10px 0;
`;

const BoxH3 = styled.h3``;

const BoxSpan = styled.span`
  margin: 3px 0;
`;

const CloseIcon = styled.span`
  content: 'x';
  cursor: pointer;
  position: fixed;
  right: calc(32% - 30px);
  top: calc(100vh - 75vh - 30px);
  background: #ededed;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  line-height: 20px;
  text-align: center;
  border: 1px solid #999;
  font-size: 20px;
`;

const PopupAddress = (props, { meData }) => {
  return (
    <PopupBox>
      <Box>
        <CloseIcon onClick={props.handleClose}>x</CloseIcon>
        {/* {props.content} */}
        <BoxH2>My Addresses</BoxH2>
        <BoxUl>
          <BoxLi>
            <BoxH3>Name</BoxH3>
            <BoxSpan>Contact Number</BoxSpan>
            <BoxSpan>Address example</BoxSpan>
            <ButtonUtils style={{ width: '50px', marginTop: '5px' }}>
              Edit
            </ButtonUtils>
          </BoxLi>
          <BoxLi>
            <BoxH3>Name</BoxH3>
            <BoxSpan>Contact Number</BoxSpan>
            <BoxSpan>Address example</BoxSpan>
            <ButtonUtils style={{ width: '50px', marginTop: '5px' }}>
              Edit
            </ButtonUtils>
          </BoxLi>
        </BoxUl>
        <ButtonLarge
          lightBg={true}
          darkFont={true}
          style={{ marginTop: '15px' }}
        >
          Add new address
        </ButtonLarge>
      </Box>
    </PopupBox>
  );
};

export default PopupAddress;
