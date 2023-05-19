import React, { useEffect, useState } from 'react';
import axios from '../../../api/axios';
import Loading from '../../../components/Loading';
import { AdContainer } from '../AdminCommonElements';

const Dashboard = ({ meData }) => {
  // console.log('me', meData);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    setLoading(true);
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 1000));
      setLoading(false);
    };
    loadData();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <AdContainer>
      <h1>Dashboard</h1>
      {/* <div onClick={handleClick}>contents</div> */}
      <div>contents</div>
    </AdContainer>
  );
};

export default Dashboard;
