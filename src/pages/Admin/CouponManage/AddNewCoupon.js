import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import axios from '../../../api/axios';
import { ButtonSmall, ButtonUtils } from '../../../components/ButtonElements';
import { Input } from '../../../components/InputElements';
import {
  BoxBtn,
  BoxH2,
  BoxH3,
  BoxLi,
  BoxListLine,
  BoxSpan,
  BoxUl,
  BoxUserList,
  BoxUsers,
  PopupBox,
} from './CouponStyle';

const AddNewCoupon = ({ meData, coupons }) => {
  const [getUserPk, setGetUserPk] = useState();
  const [getUsername, setGetUsername] = useState();
  const [newCoupone, setNewCoupon] = useState();

  const [addUser, setAddUser] = useState([]);
  const [addCouponName, setAddCouponName] = useState('');
  const [addCouponDes, setAddCouponDes] = useState('');
  const [addDiscount, setAddDiscount] = useState(0);
  const [isNext, setIsNext] = useState(false);

  const [customers, setCustomers] = useState();

  const getCustomers = async () => {
    const userList = await axios.get('/users/', {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    console.log('userList', userList.data);
    setCustomers(userList?.data);
  };

  useEffect(() => {
    getCustomers();
    setNewCoupon(coupons);
    setGetUsername(meData?.username);
    setGetUserPk(meData?.pk);
  }, [coupons]);

  const handleAddNewCoupon = (e) => {
    // setAddUser(e.target.value);
    // setAddCouponName(e.target.value);
    // setAddCouponDes(e.target.value);
    // setAddDiscount(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newCoupon = await axios.post(
      '/coupons/',
      {
        // users: addUser,
        // name: addCouponName,
        // description: addCouponDes,
        // discount_rate: addDiscount,
        users: [6],
        name: 'test coupon',
        description: 'test coupondes',
        discount_rate: 80,
      },
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      }
    );
    console.log('newCoupon', newCoupon?.data);
    window.location.reload();
  };

  return (
    <PopupBox>
      <form onSubmit={handleSubmit}>
        {!isNext && (
          <Box>
            <BoxH2>New Coupon</BoxH2>
            <BoxUl>
              <BoxH3>Add Coupon Information</BoxH3>
              <BoxLi>
                <BoxSpan>
                  <Input
                    type='text'
                    placeholder='Coupon name'
                    onChange={handleAddNewCoupon}
                  />
                </BoxSpan>
                <BoxSpan>
                  <Input
                    type='text'
                    placeholder='Coupon description'
                    onChange={handleAddNewCoupon}
                  />
                </BoxSpan>
                <BoxSpan>
                  <Input
                    type='text'
                    placeholder='Discount rate %'
                    onChange={handleAddNewCoupon}
                  />
                </BoxSpan>
              </BoxLi>
            </BoxUl>
            <BoxBtn className='prev'>
              <ButtonSmall onClick={() => setIsNext(!isNext)}>Next</ButtonSmall>
            </BoxBtn>
          </Box>
        )}
        {isNext && (
          <Box>
            <BoxH2>New Coupon</BoxH2>
            <BoxH3>Select Users</BoxH3>
            <BoxUsers>
              <p>total {customers?.length}</p>
              <BoxUserList>
                {customers?.map((user) => {
                  return (
                    <BoxListLine key={user.pk}>
                      <p>{user.pk}</p>
                      <span>{user.username}</span>
                    </BoxListLine>
                  );
                })}
              </BoxUserList>
            </BoxUsers>
            <BoxBtn className='next'>
              <ButtonSmall onClick={() => setIsNext(!isNext)}>Back</ButtonSmall>
              <ButtonSmall>Create</ButtonSmall>
            </BoxBtn>
          </Box>
        )}
      </form>
    </PopupBox>
  );
};

export default AddNewCoupon;
