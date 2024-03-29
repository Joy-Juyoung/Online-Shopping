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
  ActivityInfo,
  ActivityInfoWrap,
  MainAvatar,
  BasicInfoEach,
  EditInfoEach,
} from './UserAccountElements';
import { ProductsListContainer } from '../ProductPage/ProductListElements';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ButtonUtils } from '../../components/ButtonElements';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PesnalWrapper } from '../CommonElements';
import Loading from '../../components/Loading';
import axios from '../../api/axios';
import Avatar, { ConfigProvider } from 'react-avatar';

const UserAccountPage = ({ meData }) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [changeUserInfo, setChangeUserInfo] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [reviews, setReviews] = useState([]);

  console.log('meData', meData);

  const getReviews = async () => {
    const reviewsList = await axios.get('/reviews/', {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    // console.log('reviewsList', reviewsList?.data);
    setReviews(
      reviewsList?.data.filter((rf) => rf?.user?.username === meData?.username)
    );
  };

  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 1000));
      setLoading(false);
    };
    loadData();
    getReviews();
  }, []);

  useEffect(() => {
    setChangeUserInfo(meData);
    setName(meData?.name);
    setAddress(meData?.address);
    setPhone(meData?.phone_number);
  }, [meData]);

  const handleInputChange = (e) => {
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
      setIsEdit(false);
      window.location.reload();
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
    <ProductsListContainer>
      <PesnalWrapper>
        <h1>My Profile</h1>
        <AccountForm onSubmit={handleSubmit}>
          <AccountInput>
            <BasicInfo>
              {/* <h2>User Information</h2> */}
              <MainAvatar>
                <ConfigProvider colors={['red', 'grey', 'green']}>
                  <Avatar name={meData?.username} round={true} size={200} />
                </ConfigProvider>
              </MainAvatar>
              <MainAvatar>
                <BasicInfoEach>
                  <AccountInputTitle>User ID</AccountInputTitle>
                  <p>{changeUserInfo?.username}</p>
                </BasicInfoEach>
                <BasicInfoEach>
                  <AccountInputTitle>Email</AccountInputTitle>
                  <p>{changeUserInfo?.email}</p>
                </BasicInfoEach>
              </MainAvatar>
            </BasicInfo>

            <>
              {!isEdit ? (
                <LeftInfo>
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
                </LeftInfo>
              ) : (
                <LeftInfo>
                  <ShippingInfo>
                    <h2>Personal Information</h2>
                    <ButtonUtils>Save</ButtonUtils>
                  </ShippingInfo>

                  <EditInfoEach>
                    <AccountInputLabel htmlFor='name'>Name</AccountInputLabel>
                    <InputEdit>
                      <Input
                        type='text'
                        value={name || ''}
                        id='name'
                        onChange={handleInputChange}
                      />
                    </InputEdit>
                  </EditInfoEach>
                  <EditInfoEach>
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
                  </EditInfoEach>
                  <EditInfoEach>
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
                  </EditInfoEach>
                </LeftInfo>
              )}
              {/* <DelBtn>
                <button onClick={handleDeleteUser}>Delete Account</button>
              </DelBtn> */}
            </>
          </AccountInput>
          <ActivityInfo>
            <h3>My Activities</h3>
            <ActivityInfoWrap>
              <p>
                <strong
                  style={{
                    fontSize: '48px',
                    marginRight: '5px',
                  }}
                >
                  {reviews.length}
                </strong>
                Reviews
              </p>
              <Link to='/myReviews'>
                <ArrowForwardIosIcon style={{ cursor: 'pointer' }} />
              </Link>
            </ActivityInfoWrap>
            {/* {reviews.map((review) => {
              return (
                <div key={review.product}>
                  <div>{review.Product_Name}</div>
                </div>
              );
            })} */}
          </ActivityInfo>
        </AccountForm>
      </PesnalWrapper>
    </ProductsListContainer>
  );
};

export default UserAccountPage;
