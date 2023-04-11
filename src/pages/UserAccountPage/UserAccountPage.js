import React from 'react';
import { Input } from '../../components/InputElements';
import {
  DelBtn,
  AccountForm,
  AccountInput,
  AccountInputLabel,
  InputEdit,
  ShippingInfo,
  LeftInfo,
  AccountInputTitle,
  BasicInfo,
  InfoEach,
} from './UserAccountElements';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
import { useNavigate } from 'react-router-dom';

const UserAccountPage = ({ meData }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // console.log('meData', meData);

  // const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [changeUserInfo, setChangeUserInfo] = useState('');
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

  console.log('name', address);

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

  const handleDeleteUser = async () => {
    alert('Are you sure you want to delete this account?');

    axios.delete('/users/me', {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    navigate('/');
    window.location.reload();
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
      window.location.reload('/login');
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
            <BasicInfo>
              <InfoEach>
                <AccountInputTitle>User ID</AccountInputTitle>
                <p>{changeUserInfo?.username}</p>
              </InfoEach>
              <AccountInputTitle>Email</AccountInputTitle>
              <p>{changeUserInfo?.email}</p>
            </BasicInfo>

            <LeftInfo>
              {!isEdit ? (
                <>
                  <ShippingInfo>
                    <h2>Personal Information</h2>
                    <ButtonUtils>Edit</ButtonUtils>
                  </ShippingInfo>
                  <InfoEach>
                    <AccountInputTitle>Name</AccountInputTitle>
                    {name === '' ? (
                      <p className='empty'>Add your name</p>
                    ) : (
                      <p>{name}</p>
                    )}
                  </InfoEach>
                  <InfoEach>
                    <AccountInputTitle>Address</AccountInputTitle>
                    {address === null ? (
                      <p className='empty'>Add your address</p>
                    ) : (
                      <p>{address}</p>
                    )}
                  </InfoEach>
                  <InfoEach>
                    <AccountInputTitle>Phone numbe</AccountInputTitle>
                    {phone === null ? (
                      <p className='empty'>Add your phone</p>
                    ) : (
                      <p>{phone}</p>
                    )}
                  </InfoEach>
                </>
              ) : (
                <>
                  <ShippingInfo>
                    <h2>Personal Information</h2>
                    <ButtonUtils>Save</ButtonUtils>
                  </ShippingInfo>

                  <InfoEach>
                    <AccountInputLabel htmlFor='name'>Name</AccountInputLabel>
                    <InputEdit>
                      <Input
                        type='text'
                        value={name || ''}
                        id='name'
                        onChange={handleInputChange}
                      />
                    </InputEdit>
                  </InfoEach>
                  <InfoEach>
                    <AccountInputLabel htmlFor='address'>
                      Address
                    </AccountInputLabel>
                    <InputEdit>
                      <Input
                        type='text'
                        value={address || ''}
                        id='address'
                        onChange={handleInputChange}
                      />
                    </InputEdit>
                  </InfoEach>
                  <InfoEach>
                    <AccountInputLabel htmlFor='phone'>
                      Phone numbe
                    </AccountInputLabel>
                    <InputEdit>
                      <Input
                        type='text'
                        value={phone || ''}
                        id='phone'
                        onChange={handleInputChange}
                      />
                    </InputEdit>
                  </InfoEach>
                </>
              )}
            </LeftInfo>
          </AccountInput>
          <DelBtn>
            <button onClick={handleDeleteUser}>Delete Account</button>
          </DelBtn>
        </AccountForm>
      </PesnalWrapper>
    </PesnalContainer>
  );
};

export default UserAccountPage;
