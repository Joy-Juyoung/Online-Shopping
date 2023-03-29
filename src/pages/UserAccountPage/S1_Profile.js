import React from 'react';
import { Input } from '../../components/InputElements';
import {
  DelBtn,
  MainHeader,
  MainInfo,
  MainInfoBottom,
  MainInfoTop,
  MainLeft,
  MainRight,
} from './UserAccountElements';

import Avatar, { ConfigProvider } from 'react-avatar';
import { ButtonLarge, ButtonSmall } from '../../components/ButtonElements';
import { useState, useEffect } from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

const S1_Profile = ({ meData }) => {
  return (
    <div>
      <MainHeader>
        <h2>MY PROFILE</h2>
      </MainHeader>
      <form>
        <MainInfo>
          <MainInfoTop>
            <MainLeft>
              <ConfigProvider colors={['red', 'grey', 'green', 'yellow']}>
                <Avatar name={meData.username} round={true} size={200} />
              </ConfigProvider>
              {/* <input type='file' /> */}
              {/* <ButtonSmall>Edit</ButtonSmall> */}
            </MainLeft>
            <MainRight>
              <label htmlFor='username'>
                username
                <Input
                  type='text'
                  // placeholder={meData.username}
                  value={meData.username}
                  id='username'
                  disabled
                />
              </label>
              <label htmlFor='email'>
                email
                <Input type='text' value={meData.email} id='email' disabled />
              </label>
              <label htmlFor='name'>
                name
                <Input type='text' value={meData.name} id='name' disabled />
              </label>
            </MainRight>
          </MainInfoTop>
          <MainInfoBottom>
            <label htmlFor='phone'>
              phone
              <Input type='text' value='phone' id='phone' disabled />
            </label>
            <label htmlFor='address1'>
              address1
              <Input type='text' value='address1' id='address1' disabled />
            </label>
            <label htmlFor='address2'>
              address2
              <Input type='text' value='address2' id='address2' disabled />
            </label>
          </MainInfoBottom>

          <DelBtn>
            {/* onClick={handleDeleteAccount} */}
            <ButtonLarge style={{ width: '80%' }}>Delete Account</ButtonLarge>
          </DelBtn>
        </MainInfo>
      </form>
    </div>
  );
};

export default S1_Profile;
