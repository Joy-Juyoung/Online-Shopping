import React from 'react';
import Smaile from '../asset/smaile.svg';
import Donuts from '../asset/donuts.svg';
import SettingsIcon from '@mui/icons-material/Settings';

import styled from 'styled-components';
import { MainContainer } from './HeroPage/HeroElements';

const EmptyContainer = styled.div`
  height: 100vh;
  position: relative;

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 80px auto;
    font-size: 50px;
    /* background: #ffae00; */
    /* z-index: 3; */
  }
`;

const EmptyWrap = styled.div`
  margin-top: -100px;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

const EmptyImg = styled.img`
  height: 500px;
`;

const emptyPage = () => {
  return (
    <EmptyContainer>
      <h1>
        {/* <SettingsIcon /> */}
        Sorry, This Service Is Coming Soon!
      </h1>
      <EmptyWrap>
        <EmptyImg src={Smaile} alt='Smaile' />
      </EmptyWrap>
    </EmptyContainer>
  );
};

export default emptyPage;
