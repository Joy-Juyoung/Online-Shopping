import React, { useState, useRef, useEffect } from 'react';
import {
  LinkAccount,
  DropUl,
  DropLi,
  DropAccountWrap,
  DropAccountContainer,
  DropAccountCoverTop,
  DropAccountCoverMain,
  ProfileWrap,
  DropUlWrap,
} from './DropUserElements';
import Avatar, { ConfigProvider } from 'react-avatar';
import { ButtonUtils } from '../ButtonElements';

const DropUser = ({ meData }) => {
  const handleAddBalance = () => {
    window.open('/userBalance', 'My Balance', 'height=650px,width=680px');
  };

  return (
    // <DropAccountContainer ref={ref}>
    <DropAccountContainer>
      <DropAccountCoverTop></DropAccountCoverTop>
      <DropAccountCoverMain>
        <DropAccountWrap>
          <DropUl>
            <DropUlWrap>
              <LinkAccount to='/userAccount'>
                <DropLi>
                  {/* <ConfigProvider colors={['red', 'grey', 'green']}>
                  <Avatar name={meData.username} round={true} size={30} />
                </ConfigProvider> */}
                  <ProfileWrap>
                    <span>{meData.username}</span>
                    <ButtonUtils>Setting</ButtonUtils>
                  </ProfileWrap>
                </DropLi>
                {/* <DropLi >My Profile</DropLi> */}
              </LinkAccount>
              <LinkAccount to='/userOrders'>
                <DropLi>My Orders</DropLi>
              </LinkAccount>
              <LinkAccount onClick={handleAddBalance}>
                <DropLi>My Balances</DropLi>
              </LinkAccount>
              <LinkAccount to='/testPage'>
                <DropLi>My Coupons</DropLi>
              </LinkAccount>
            </DropUlWrap>
          </DropUl>
        </DropAccountWrap>
      </DropAccountCoverMain>
    </DropAccountContainer>
  );
};

export default DropUser;
