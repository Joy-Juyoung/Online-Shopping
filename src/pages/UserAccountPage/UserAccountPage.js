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
  ShippingInfo,
  EditBtn,
} from './UserAccountElements';

import Avatar, { ConfigProvider } from 'react-avatar';
import {
  ButtonHover,
  ButtonLarge,
  ButtonSmall,
  ButtonUtils,
} from '../../components/ButtonElements';
import { useState, useEffect } from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import { PesnalContainer, PesnalWrapper } from '../CommonElements';
import { InputWrap } from '../LoginPage/LoginElements';
import Loading from '../../components/Loading';
import axios from '../../api/axios';

const UserAccountPage = ({ meData }) => {
  const [loading, setLoading] = useState(false);

  // console.log('meData', meData);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [changeUserInfo, setChangeUserInfo] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 1000));
      setLoading(false);
    };
    loadData();
  }, []);

  useEffect(() => {
    setChangeUserInfo(meData);
    setName(meData?.name);
  }, [meData]);

  const handleInputChange = (e) => {
    console.log('name', e.target.value);
    var tempChangeUserInfo = changeUserInfo;

    if (e.target.id === 'name') {
      setName(e.target.value);
    }
    setChangeUserInfo(tempChangeUserInfo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isEdit) {
      handleEdit();
    } else {
      const meInfo = await axios.put(
        '/users/me',
        {
          username: meData.username,
          email: email,
          name: name,
          address: address,
          phone_number: phone,
        },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      setChangeUserInfo(meInfo?.data);
      console.log('changed Data', meInfo?.data);

      setIsEdit(false);
      window.location.reload();
    }
  };

  console.log('changed', changeUserInfo);

  const handleEdit = () => {
    if (!isEdit) {
      setIsEdit(true);
    } else {
      setIsEdit(false);
    }
  };

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
        <AccountForm onSubmit={handleSubmit}>
          <AccountInput>
            <MainAvatar>
              <ConfigProvider colors={['red', 'grey', 'green']}>
                <Avatar
                  name={changeUserInfo?.username}
                  round={true}
                  size={200}
                />
              </ConfigProvider>
            </MainAvatar>

            <AccountInputLabel htmlFor='username'>
              {/* User Id */}
              User ID
            </AccountInputLabel>
            <Input
              borderNone={true}
              borderBottom={true}
              type='text'
              value={changeUserInfo?.username}
              id='username'
              disabled
            />

            <AccountInputLabel htmlFor='email'>Email</AccountInputLabel>
            <Input
              borderNone={true}
              borderBottom={true}
              type='text'
              value={changeUserInfo?.email || ''}
              id='email'
              disabled
            />
            <AccountInputLabel htmlFor='name'>Name</AccountInputLabel>
            {!isEdit ? (
              <InputEdit>
                <Input
                  borderNone={true}
                  borderBottom={true}
                  type='text'
                  // value={changeUserInfo?.name || ''}
                  value={name}
                  id='name'
                  // onChange={handleNameChange}
                  disabled
                />
                <ButtonUtils style={{ marginLeft: '-50px' }}>Edit</ButtonUtils>
              </InputEdit>
            ) : (
              <InputEdit>
                <Input
                  type='text'
                  // value={changeUserInfo?.name || ''}
                  value={name}
                  id='name'
                  onChange={handleInputChange}
                />
                <ButtonUtils style={{ marginLeft: '-50px' }}>Save</ButtonUtils>
              </InputEdit>
            )}

            <ShippingInfo>Shipping Information</ShippingInfo>

            <AccountInputLabel htmlFor='address'>Address</AccountInputLabel>
            <InputEdit>
              <Input
                borderNone={true}
                borderBottom={true}
                type='text'
                value={changeUserInfo?.address || ''}
                id='address'
                disabled
              />
              <ButtonUtils style={{ marginLeft: '-50px' }} onClick={handleEdit}>
                Edit
              </ButtonUtils>
            </InputEdit>

            <AccountInputLabel htmlFor='phone_numbe'>
              Phone numbe
            </AccountInputLabel>
            <InputEdit>
              <Input
                borderNone={true}
                borderBottom={true}
                type='text'
                value={changeUserInfo?.phone || ''}
                id='phone_numbe'
                disabled
              />
              <ButtonUtils style={{ marginLeft: '-50px' }}>Edit</ButtonUtils>
            </InputEdit>

            <DelBtn>
              {/* <ButtonHover>Delete Account</ButtonHover> */}
              <ButtonUtils>Delete Account</ButtonUtils>
            </DelBtn>
          </AccountInput>
        </AccountForm>
      </PesnalWrapper>
    </PesnalContainer>
  );
};

export default UserAccountPage;
