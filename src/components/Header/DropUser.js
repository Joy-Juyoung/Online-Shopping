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
import Modal from '../Modal';
import AddBalance from '../AddBalance';

const DropUser = ({ meData, shown, setIsAdminBoard, isAdminBoard }) => {
  return (
    <DropAccountContainer>
      <DropAccountCoverTop></DropAccountCoverTop>
      <DropAccountCoverMain>
        <DropAccountWrap>
          <DropUl>
            <DropUlWrap>
              <LinkAccount to='/userAccount'>
                <DropLi>
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
              <LinkAccount>
                <DropLi onClick={shown}>My Balances</DropLi>
              </LinkAccount>
              <LinkAccount to='/coupon'>
                <DropLi>My Coupons</DropLi>
              </LinkAccount>
              {meData?.type === 'admin_user' && (
                <LinkAccount to='/admin' onClick={() => setIsAdminBoard(true)}>
                  <DropLi>Go to Admin Board</DropLi>
                </LinkAccount>
              )}
            </DropUlWrap>
          </DropUl>
        </DropAccountWrap>
      </DropAccountCoverMain>
    </DropAccountContainer>
  );
};

export default DropUser;
