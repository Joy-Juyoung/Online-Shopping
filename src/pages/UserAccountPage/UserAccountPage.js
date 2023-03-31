import React from 'react';
import { Input } from '../../components/InputElements';
import {
  DelBtn,
  MainAvatar,
  MainInfo,
  MainInput,
  MainLeft,
  MainRight,
  AccountForm,
  AccountInput,
  AccountInputLabel,
  InputEdit,
} from './UserAccountElements';

import Avatar, { ConfigProvider } from 'react-avatar';
import {
  ButtonHover,
  ButtonLarge,
  ButtonSmall,
} from '../../components/ButtonElements';
import { useState, useEffect } from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import { PesnalContainer, PesnalWrapper } from '../CommonElements';
import { InputWrap } from '../LoginPage/LoginElements';
import Loading from '../../components/Loading';

const UserAccountPage = ({ meData }) => {
  const [loading, setLoading] = useState(false);

  console.log('account me', meData);
  // const [meAccunt = meData, setMeAccunt] = useState();
  // const handleDeleteAccount = () => {
  //   // alert('Do you want to delete this account?');
  //   console.log('Make delete confirm modal');

  // };

  useEffect(() => {
    setLoading(true);
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 1000));
      setLoading(false);
    };
    loadData();
  }, []);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <PesnalContainer>
      <PesnalWrapper>
        <h1>My Profile</h1>
        <AccountForm>
          <AccountInput>
            <MainAvatar>
              <ConfigProvider colors={['red', 'grey', 'green', 'yellow']}>
                <Avatar name={meData.username} round={true} size={200} />
              </ConfigProvider>
            </MainAvatar>

            <AccountInputLabel htmlFor='username'>
              {/* User Id */}
              Username
            </AccountInputLabel>
            <Input
              borderNone={true}
              borderBottom={true}
              type='text'
              value={meData.username}
              id='username'
              disabled
            />

            <AccountInputLabel htmlFor='email'>Email</AccountInputLabel>
            <Input
              borderNone={true}
              borderBottom={true}
              type='text'
              value={meData.email}
              id='email'
              disabled
            />
            <AccountInputLabel htmlFor='name'>name</AccountInputLabel>
            <InputEdit>
              <Input
                borderNone={true}
                borderBottom={true}
                type='text'
                value={meData.name}
                id='name'
                disabled
              />
              <button>Edit</button>
            </InputEdit>

            <DelBtn>
              {/* <ButtonHover>Delete Account</ButtonHover> */}
              <button>Delete Account</button>
            </DelBtn>
          </AccountInput>
        </AccountForm>
      </PesnalWrapper>
    </PesnalContainer>
  );
};

export default UserAccountPage;
