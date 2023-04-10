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
  RightInfo,
  LeftInfo,
} from './UserAccountElements';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar, { ConfigProvider } from 'react-avatar';
import {
  ButtonHover,
  ButtonLarge,
  ButtonSmall,
  ButtonUtils,
} from '../../components/ButtonElements';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PesnalContainer, PesnalWrapper } from '../CommonElements';
import { InputWrap } from '../LoginPage/LoginElements';
import Loading from '../../components/Loading';
import axios from '../../api/axios';
import { PersonalVideo } from '@material-ui/icons';

const UserAccountPage = ({ meData }) => {
  const [loading, setLoading] = useState(false);

  // console.log('meData', meData);

  // const [email, setEmail] = useState('');
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
    setAddress(meData?.address);
    setPhone(meData?.phone_number);
  }, [meData]);

  const handleInputChange = (e) => {
    // console.log('name', e.target.value);
    var tempChangeUserInfo = changeUserInfo;

    if (e.target.id === 'name') {
      setName(e.target.value);
    }
    if (e.target.id === 'address') {
      setAddress(e.target.value);
    }
    if (e.target.id === 'phone') {
      setPhone(e.target.value);
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
      window.location.reload('/userAccount');
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
            <RightInfo>
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
            </RightInfo>

            <LeftInfo>
              {!isEdit ? (
                <>
                  <ShippingInfo>
                    <div>
                      <span>Personal Information</span>
                      <ExpandMoreIcon />
                    </div>
                    <ButtonUtils>Edit</ButtonUtils>
                  </ShippingInfo>
                  <AccountInputLabel htmlFor='name'>Name</AccountInputLabel>
                  <InputEdit>
                    <Input
                      borderNone={true}
                      borderBottom={true}
                      type='text'
                      value={name}
                      id='name'
                      disabled
                    />
                    {/* <ButtonUtils>Edit</ButtonUtils> */}
                  </InputEdit>
                  <AccountInputLabel htmlFor='address'>
                    Address
                  </AccountInputLabel>
                  <InputEdit>
                    <Input
                      borderNone={true}
                      borderBottom={true}
                      type='text'
                      value={address}
                      id='address'
                      disabled
                    />
                    {/* <ButtonUtils>Edit</ButtonUtils> */}
                  </InputEdit>

                  <AccountInputLabel htmlFor='phone'>
                    Phone numbe
                  </AccountInputLabel>
                  <InputEdit>
                    <Input
                      borderNone={true}
                      borderBottom={true}
                      type='text'
                      value={phone}
                      id='phone'
                      disabled
                    />
                    {/* <ButtonUtils>Edit</ButtonUtils> */}
                  </InputEdit>
                </>
              ) : (
                <>
                  <ShippingInfo>
                    <span>Personal Information</span>
                    <ButtonUtils>Save</ButtonUtils>
                  </ShippingInfo>
                  <AccountInputLabel htmlFor='name'>Name</AccountInputLabel>
                  <InputEdit>
                    <Input
                      type='text'
                      value={name}
                      id='name'
                      onChange={handleInputChange}
                    />
                    {/* <ButtonUtils>Save</ButtonUtils> */}
                  </InputEdit>
                  <AccountInputLabel htmlFor='address'>
                    Address
                  </AccountInputLabel>
                  <InputEdit>
                    <Input
                      type='text'
                      value={address}
                      id='address'
                      onChange={handleInputChange}
                    />
                    {/* <ButtonUtils>Save</ButtonUtils> */}
                  </InputEdit>
                  <AccountInputLabel htmlFor='phone'>
                    Phone numbe
                  </AccountInputLabel>
                  <InputEdit>
                    <Input
                      type='text'
                      value={phone}
                      id='phone'
                      onChange={handleInputChange}
                    />
                    {/* <ButtonUtils>Save</ButtonUtils> */}
                  </InputEdit>
                </>
              )}
            </LeftInfo>
          </AccountInput>
          <DelBtn>
            <button>Delete Account</button>
          </DelBtn>
        </AccountForm>
      </PesnalWrapper>
    </PesnalContainer>
  );
};

export default UserAccountPage;
