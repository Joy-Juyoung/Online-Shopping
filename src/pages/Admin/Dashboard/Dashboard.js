import React from 'react';
import { AdContainer } from '../AdminCommonElements';

const Dashboard = ({ meData }) => {
  console.log('me', meData);

  return (
    <AdContainer>
      <h1>Dashboard</h1>
      <div>contents</div>
    </AdContainer>
  );
};

export default Dashboard;
