import React from 'react';
import Smaile from '../asset/smaile.svg';
import Donuts from '../asset/donuts.svg';
import SettingsIcon from '@mui/icons-material/Settings';
// import Change from '../asset/change.svg';
import Change from '../asset/time.svg';

import styled from 'styled-components';

const EmptyContainer = styled.div`
  /* height: 100%;
  position: relative; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  /* width: 450px !important; */

  h1 {
    font-size: 30px;
    margin: 0;
  }
`;

const EmptyWrap = styled.div`
  margin-top: 20px;
  /* margin-top: -100px;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%); */

  display: flex;
  align-items: center;
  justify-content: center;
`;

const EmptyImg = styled.img`
  height: 200px;
`;

const Comingsoon = () => {
  return (
    <EmptyContainer>
      <h1>
        {/* <SettingsIcon /> */}
        Sorry, This Service Is Coming Soon!
      </h1>
      <EmptyWrap>
        <EmptyImg src={Change} alt='Change' />
      </EmptyWrap>
    </EmptyContainer>
  );
};

export default Comingsoon;
