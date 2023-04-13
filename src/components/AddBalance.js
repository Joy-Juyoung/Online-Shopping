import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from '../api/axios';
import { ButtonLarge, ButtonSmall, ButtonUtils } from './ButtonElements';
import { Input } from './InputElements';

const PopupBox = styled.div`
  position: fixed;
  background: #fff;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 3;
  overflow: hidden !important;
`;

const Box = styled.div`
  position: relative;
  margin: 20px auto;
  background: #fff;
  padding: 0 40px;
  overflow: hidden !important;
`;

const BoxH2 = styled.h2`
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

const AddBalance = ({ meData }) => {
  const [changeUserBalance, setChangeUserBalance] = useState('');
  const [balance, setBalance] = useState(0);
  const [sumBalance, setSumBalance] = useState(balance);
  const [afterAdd, setAfterAdd] = useState(false);

  useEffect(() => {
    setChangeUserBalance(meData);
  }, [meData]);

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
      // console.log('changed Data', meInfo?.data);
      // window.close('/userBalance');
      window.location.reload();
      // setAfterAdd(!afterAdd);
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
              <BoxH3>Add Balance</BoxH3>
              <BoxSpan>
                <Input
                  type='number'
                  placeholder='Enter the price you want to add'
                  onChange={ChangeBalance}
                  // value={''}
                />
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
