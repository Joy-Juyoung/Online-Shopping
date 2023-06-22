// import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import axios from '../../../api/axios';
import { ButtonSmall, ButtonUtils } from '../../../components/ButtonElements';
import { Input } from '../../../components/InputElements';
import { VerificationMsg } from '../../LoginPage/LoginElements';
import {
  AddNextBtn,
  Box,
  BoxBtn,
  BoxH2,
  BoxH3,
  BoxLi,
  BoxListLine,
  BoxListSelecteLine,
  BoxNotice,
  BoxSpan,
  BoxSuccess,
  BoxUl,
  BoxUserList,
  BoxUsers,
  PopupBox,
} from './CouponStyle';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const AddNewCoupon = ({ coupons }) => {
  const [newCoupon, setNewCoupon] = useState();

  const [checkedUser, setCheckedUser] = useState('');
  const [addUser, setAddUser] = useState('');
  const [addedUsers, setAddedUsers] = useState('');
  const [addCouponStart, setAddCouponStart] = useState();
  const [addCouponEnd, setAddCouponEnd] = useState();

  const [addCouponName, setAddCouponName] = useState('');
  const [addCouponDesc, setAddCouponDesc] = useState('');
  const [addDiscount, setAddDiscount] = useState(0);
  const [isNext, setIsNext] = useState(false);
  // const [validNext, setValidNext] = useState(false);
  const [duration, setDuration] = useState(false);

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
    // setNewCoupon(coupons);
    setDuration(false);
    setIsNext(false);
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

  const handleValidNext = () => {
    if (!addCouponName || !addCouponDesc || !addDiscount) {
      setIsNext(false);
    } else {
      setIsNext(true);
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

  useEffect(() => {
    if (addUser) {
      // const dupItems = addUser?.filter((item) => customers?.pk?.includes(item));
      // const dupItems = addUser?.filter((item) => customers?.includes(item));
      // const dupItems = customers?.filter((item) =>
      //   addUser?.includes(item?.pk.toString())
      // );
      // const output = [
      //   ...addUser?.filter((item) => !dupItems?.includes(item)),
      //   ...customers?.filter((item) => !dupItems?.includes(item)),
      // ];
      // console.log('dupItems', dupItems);
      // console.log(output);
      setAddedUsers(
        customers?.filter((item) => addUser?.includes(item?.pk.toString()))
      );
    }
  }, [addUser]);

  console.log('addedUsers', addedUsers);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (addedUsers?.length === 0) {
      console.log('Please select the users');
      setDuration(false);
    } else {
      const newAdded = await axios.post(
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
      // console.log('newCoupon', newAdded?.data);
      setNewCoupon(newAdded?.data);
      setDuration(true);
      handleDefault(newAdded?.data?.pk);
    }
  };

  const handleDefault = async (pk) => {
    var month = '' + (new Date().getMonth() + 1);
    var day = '' + new Date().getDate();
    var endDay = '' + (new Date().getDate() + 5);
    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2 || endDay.length < 2) {
      day = '0' + day;
      endDay = '0' + endDay;
    }
    const tempDate = new Date();
    const defaultStart = tempDate.getFullYear() + '-' + month + '-' + day;
    const defaultEnd = tempDate.getFullYear() + '-' + month + '-' + endDay;
    const newCp = await axios.put(
      `/coupons/${pk}`,
      {
        start_date: defaultStart,
        end_date: defaultEnd,
      },
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      }
    );
    console.log('newCsss', newCp?.data);
  };

  const handleAddDate = (e) => {
    console.log(e.target.value);
    if (e.target.id === 'couponStart') {
      setAddCouponStart(e.target.value);
    }
    if (e.target.id === 'couponEnd') {
      setAddCouponEnd(e.target.value);
    }
  };

  // console.log('new Date()', new Date() + 1);

  // const today = new Date();
  // const tomorrow = new Date(today);

  const handleUpdate = async () => {
    setAddCouponStart(addCouponStart);
    setAddCouponEnd(addCouponEnd);

    const newCp = await axios.put(
      `/coupons/${newCoupon?.pk}`,
      {
        start_date: addCouponStart,
        end_date: addCouponEnd,
      },
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      }
    );

    console.log('newCoupon', newCp?.data);
    window.location.reload();
  };

  return (
    <PopupBox>
      <form onSubmit={handleSubmit}>
        {!isNext && !duration && (
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
                    value={addCouponName || ''}
                    onChange={handleAddNewCoupon}
                  />
                </BoxSpan>
                <BoxSpan>
                  <Input
                    type='text'
                    placeholder='Coupon description'
                    id='couponDesc'
                    value={addCouponDesc || ''}
                    onChange={handleAddNewCoupon}
                  />
                </BoxSpan>
                <BoxSpan>
                  <Input
                    type='number'
                    placeholder='Discount rate %'
                    id='couponRate'
                    value={addDiscount || ''}
                    onChange={handleAddNewCoupon}
                    min='0'
                  />
                </BoxSpan>
              </BoxLi>
            </BoxUl>

            <VerificationMsg
              id='uidnote'
              style={{
                display:
                  !addCouponName || !addCouponDesc || !addDiscount
                    ? 'flex'
                    : 'none',
                marginBottom: '20px',
              }}
            >
              <ErrorOutlineIcon fontSize='small' style={{ color: 'red' }} />
              <span>Please fill in all the field.</span>
            </VerificationMsg>
            <BoxBtn className='prev'>
              <AddNextBtn onClick={handleValidNext}>Next</AddNextBtn>
            </BoxBtn>
          </Box>
        )}
        {isNext && !duration && (
          <Box>
            <BoxH2>New Coupon</BoxH2>
            <BoxUsers>
              <BoxH3>
                <h3>Users</h3>
                <p>total {customers?.length}</p>
              </BoxH3>

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
                      <p>{user.pk}.</p>
                      <span>{user.username}</span>
                    </BoxListLine>
                  );
                })}
              </BoxUserList>
            </BoxUsers>
            <BoxUsers>
              <BoxH3>
                <h3>Selected Users</h3>
                <p>total {addedUsers?.length}</p>
              </BoxH3>
              <BoxUserList>
                {addedUsers &&
                  addedUsers?.map((added, index) => {
                    return (
                      <BoxListSelecteLine key={added.pk}>
                        <p>{added.pk}.</p>
                        <span>{added.username}</span>
                      </BoxListSelecteLine>
                    );
                  })}
                {addedUsers?.length === 0 && (
                  <BoxListSelecteLine>
                    <p>Please select the users from above</p>
                  </BoxListSelecteLine>
                )}
              </BoxUserList>
            </BoxUsers>
            <VerificationMsg
              id='uidnote'
              style={{
                display: addedUsers?.length === 0 ? 'flex' : 'none',
                marginBottom: '20px',
              }}
            >
              <ErrorOutlineIcon fontSize='small' style={{ color: 'red' }} />
              <span>Please select the users.</span>
            </VerificationMsg>
            <BoxBtn className='next'>
              <AddNextBtn onClick={() => setIsNext(!isNext)}>Back</AddNextBtn>
              <ButtonSmall>Create</ButtonSmall>
            </BoxBtn>
          </Box>
        )}
      </form>
      {duration && (
        <Box>
          <BoxH2>
            <BoxSuccess>
              <CheckCircleOutlineIcon color='success' sx={{ fontSize: 50 }} />
              SUCCESSFULLY ADDED NEW COUPON!
            </BoxSuccess>
          </BoxH2>
          <BoxUl>
            <BoxNotice>
              Please select a date if you want to set the activation date for
              the coupon you added.
              <p>*Default date: from today to 5 days later</p>
            </BoxNotice>
            <BoxLi>
              <BoxSpan>
                <Input type='date' id='couponStart' onChange={handleAddDate} />
              </BoxSpan>
              <BoxSpan>
                <Input type='date' id='couponEnd' onChange={handleAddDate} />
              </BoxSpan>
            </BoxLi>
          </BoxUl>

          <BoxBtn className='prev'>
            <AddNextBtn onClick={handleUpdate}>Update</AddNextBtn>
          </BoxBtn>
        </Box>
      )}
    </PopupBox>
  );
};

export default AddNewCoupon;
