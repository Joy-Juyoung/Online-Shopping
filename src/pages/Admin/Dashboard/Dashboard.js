import React from 'react';
import axios from '../../../api/axios';
import { AdContainer } from '../AdminCommonElements';

const Dashboard = ({ meData }) => {
  console.log('me', meData);

  // const handleClick = async () => {
  //   const welcomeCoupon = await axios.post(
  //     '/coupons/',
  //     {
  //       users: [6],
  //       name: '20% Welcome Coupon',
  //       description: 'Your First Coupon',
  //       discount_rate: 20,
  //     },
  //     {
  //       headers: { 'Content-Type': 'application/json' },
  //       withCredentials: true,
  //     }
  //   );

  //   console.log('welcomeCoupon', welcomeCoupon);
  // };

  return (
    <AdContainer>
      <h1>Dashboard</h1>
      {/* <div onClick={handleClick}>contents</div> */}
      <div>contents</div>
    </AdContainer>
  );
};

export default Dashboard;
