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

  console.log('account me', meData);
  // const [meAccunt = meData, setMeAccunt] = useState();
  // const handleDeleteAccount = () => {
  //   // alert('Do you want to delete this account?');
  //   console.log('Make delete confirm modal');

  // };
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [changeUserInfo, setChangeUserInfo] = useState();
  const [isEdit, setIsEdit] = useState(false);

  // const putUser = async () => {
  //   try {
  //     const meInfo = await axios.put('/users/me', {
  //       headers: { 'Content-Type': 'application/json' },
  //       withCredentials: true,
  //     });
  //     console.log('changeUserInfo', meInfo?.data);
  //     setChangeUserInfo(meInfo?.data);
  //     // setLoading(false);
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  // useEffect(() => {

  // }, [username, name, email, address, phone]);

  // const handleNameChange = (evnt) => {
  //   setName(evnt.target.value);
  // };

  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 1000));
      setLoading(false);
    };
    loadData();
    setChangeUserInfo(meData);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('name', name);
    // try {
    setLoading(true);
    const meInfo = await axios.put(
      '/users/me',
      {
        // username: username,
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

    console.log('changeUserInfo', meInfo?.data);
    setChangeUserInfo(meInfo?.data);

    if (meInfo?.data.error) {
      setLoading(false);
      console.log('EDIT FAILD');
      // errRef.current.focus();
    } else {
      // setSuccess(true);
      // setUsername(username);
      setEmail(email);
      setName(name);
      setAddress(address);
      setPhone(phone);

      setLoading(false);
    }
  };

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
            <AccountInputLabel htmlFor='name'>Name</AccountInputLabel>
            {!isEdit ? (
              <InputEdit>
                <Input
                  borderNone={true}
                  borderBottom={true}
                  type='text'
                  value={name}
                  id='name'
                  disabled
                />
                <EditBtn style={{ marginLeft: '-50px' }} onClick={handleEdit}>
                  Edit
                </EditBtn>
              </InputEdit>
            ) : (
              <InputEdit>
                <Input
                  // borderNone={true}
                  // borderBottom={true}
                  type='text'
                  value={name}
                  id='name'
                  // disabled
                  onChange={(e) => setName(e.target.value)}
                />
                <EditBtn
                  style={{ marginLeft: '-50px' }}
                  // type='submit'
                  onClick={handleEdit}
                >
                  Save
                </EditBtn>
              </InputEdit>
            )}

            <ShippingInfo>Shipping Information</ShippingInfo>

            <AccountInputLabel htmlFor='address'>Address</AccountInputLabel>
            <InputEdit>
              <Input
                borderNone={true}
                borderBottom={true}
                type='text'
                value={meData.address}
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
                value={meData.phone_numbe}
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
