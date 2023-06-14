import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from '../../api/axios';
import { ButtonUtils } from '../../components/ButtonElements';
import { Input } from '../../components/InputElements';
import {
  AccountForm,
  AccountInput,
  AccountInputLabel,
  InputEdit,
  ShippingInfo,
  LeftInfo,
  AccountInputTitle,
  BasicInfo,
  InfoEach,
  ActivityInfo,
  ActivityInfoWrap,
  MainAvatar,
  BasicInfoEach,
  EditInfoEach,
} from '../UserAccountPage/UserAccountElements';

const EditAddress = ({ meData, isEdit, setIsEdit }) => {
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [changeUserInfo, setChangeUserInfo] = useState('');
  // const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    setChangeUserInfo(meData);
    setAddress(meData?.address);
    setPhone(meData?.phone_number);
  }, [meData]);

  const handleInputChange = (e) => {
    var tempChangeUserInfo = changeUserInfo;

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
      // handleEdit();
      setIsEdit(true);
    } else {
      const meInfo = await axios.put(
        '/users/me',
        {
          address: address,
          phone_number: phone,
        },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      setChangeUserInfo(meInfo?.data);
      setIsEdit(false);
      window.location.reload();
    }
  };

  // const handleEdit = () => {
  //   if (!isEdit) {
  //     setIsEdit(true);
  //   } else {
  //     setIsEdit(false);
  //   }
  // };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ShippingInfo>
          <h2>Shopping Address</h2>
          {!isEdit ? (
            <ButtonUtils>Edit</ButtonUtils>
          ) : (
            <ButtonUtils>Save</ButtonUtils>
          )}
        </ShippingInfo>
        {!isEdit ? (
          <>
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
            <EditInfoEach>
              <AccountInputLabel htmlFor='address'>Address</AccountInputLabel>
              <InputEdit>
                <Input
                  type='text'
                  value={address || ''}
                  id='address'
                  onChange={handleInputChange}
                />
              </InputEdit>
            </EditInfoEach>
            <EditInfoEach>
              <AccountInputLabel htmlFor='phone'>Phone numbe</AccountInputLabel>
              <InputEdit>
                <Input
                  type='text'
                  value={phone || ''}
                  id='phone'
                  onChange={handleInputChange}
                />
              </InputEdit>
            </EditInfoEach>
          </>
        )}
      </form>
    </div>
  );
};

export default EditAddress;
