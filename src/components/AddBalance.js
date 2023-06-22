import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from '../api/axios';
import { ButtonLarge, ButtonSmall, ButtonUtils } from './ButtonElements';
import { Input } from './InputElements';

const PopupBox = styled.div`
  margin: 0 auto;
  padding: 10px 20px;
  /* border-radius: 5px; */
`;

const Box = styled.div`
  margin: 0 auto;
`;

const BoxH2 = styled.h2`
  margin: 20px 0;
  text-align: center;
`;

const BoxUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px 0;
`;

const BoxLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid lightgray;
  padding: 10px 0;
`;

const BoxH3 = styled.h3``;

const BoxSpan = styled.span`
  margin: 3px 0;
`;

const AddBalance = ({ meData, isCancelled }) => {
  const [changeUserBalance, setChangeUserBalance] = useState('');
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    setChangeUserBalance(meData);
  }, [meData, isCancelled]);

  const ChangeBalance = (e) => {
    setBalance(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (changeUserBalance?.balance >= 0) {
      const meInfo = await axios.put(
        '/users/me',
        {
          balance: Number(changeUserBalance?.balance) + Number(balance),
          // balance: balance,
        },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      setChangeUserBalance(meInfo?.data);
      window.location.reload();
    }
  };

  return (
    <PopupBox>
      <Box>
        <BoxH2>My Balance</BoxH2>
        <form onSubmit={handleSubmit}>
          <BoxUl>
            <BoxLi>
              <BoxH3>{meData?.username}</BoxH3>
              <BoxSpan>
                Current Balance: ${meData?.balance.toLocaleString()}
              </BoxSpan>
            </BoxLi>
            <BoxLi>
              <BoxH3>Amount</BoxH3>
              {/* <BoxSpan style={{ fontSize: '11px' }}>
                Up to $5,000 per day
              </BoxSpan> */}
              <BoxSpan>
                <Input
                  type='number'
                  placeholder='Enter the price you want to add'
                  onChange={ChangeBalance}
                  min='0'
                  max='5000'
                  // value={''}
                />
              </BoxSpan>
              <BoxSpan
                style={{
                  fontSize: '11px',
                  marginTop: '-5px',
                  marginLeft: '3px',
                  color: 'gray',
                }}
              >
                Up to $5,000 per day
              </BoxSpan>
            </BoxLi>
          </BoxUl>
          <ButtonLarge
            lightBg={true}
            darkFont={true}
            style={{ marginTop: '15px' }}
          >
            Add Balance
          </ButtonLarge>
        </form>
      </Box>
    </PopupBox>
  );
};

export default AddBalance;
