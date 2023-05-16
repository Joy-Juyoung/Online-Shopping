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

const AddNewCoupon = ({ coupons }) => {
  const [newCoupone, setNewCoupon] = useState();

  const [checkedUser, setCheckedUser] = useState('');
  const [addUser, setAddUser] = useState([]);

  const [addCouponName, setAddCouponName] = useState('');
  const [addCouponDesc, setAddCouponDesc] = useState('');
  const [addDiscount, setAddDiscount] = useState(0);
  const [isNext, setIsNext] = useState(false);
  const [validNext, setValidNext] = useState(false);

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
  }, [coupons]);

  const handleAddNewCoupon = (e) => {
    if (e.target.id === 'couponName') {
      setAddCouponName(e.target.value);
    }
    if (e.target.id === 'couponDesc') {
      setAddCouponDesc(e.target.value);
    }
    if (e.target.id === 'couponRate') {
      setAddDiscount(e.target.value);
    }
  };

  const handleAddNewUser = (e) => {
    setCheckedUser({ ...checkedUser, [e.target.value]: e.target.checked });
  };

  useEffect(() => {
    setAddUser(
      Object.entries(checkedUser)
        .filter(([key, value]) => value)
        .map((added, index) => added[0])
    );
  }, [checkedUser]);

  console.log('added', addUser);
  console.log('checkedUser', checkedUser);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // setValidNext()

    const newCoupon = await axios.post(
      '/coupons/',
      {
        users: addUser,
        name: addCouponName,
        description: addCouponDesc,
        discount_rate: addDiscount,
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
                    id='couponName'
                    onChange={handleAddNewCoupon}
                  />
                </BoxSpan>
                <BoxSpan>
                  <Input
                    type='text'
                    placeholder='Coupon description'
                    id='couponDesc'
                    onChange={handleAddNewCoupon}
                  />
                </BoxSpan>
                <BoxSpan>
                  <Input
                    type='number'
                    placeholder='Discount rate %'
                    id='couponRate'
                    onChange={handleAddNewCoupon}
                  />
                </BoxSpan>
              </BoxLi>
            </BoxUl>
            <BoxBtn className='prev'>
              {/* {!addCouponName || !addCouponDesc || !addDiscount ? (
                <ButtonSmall disabled>Next</ButtonSmall>
              ) : (
                <ButtonSmall onClick={() => setIsNext(!isNext)}>
                  Next
                </ButtonSmall>
              )} */}
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
                      <input
                        type='checkbox'
                        name='couponpUser'
                        id='couponpUser'
                        value={user.pk}
                        onChange={(e) => handleAddNewUser(e)}
                        checked={checkedUser[user?.pk] || ''}
                      />
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
