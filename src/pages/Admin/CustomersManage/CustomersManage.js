import React, { useEffect, useState } from 'react';
import { AdContainer } from '../AdminCommonElements';
import axios from '../../../api/axios';
import Loading from '../../../components/Loading';

const CustomersManage = ({ meData }) => {
  const [loading, setLoading] = useState(false);
  // const [customers, setCustomers] = useState();

  // const getAllCart = async () => {
  //   const userList = await axios.get('/users/', {
  //     headers: { 'Content-Type': 'application/json' },
  //     withCredentials: true,
  //   });
  //   console.log('userList', userList.data);
  //   setCustomers(userList?.data);
  //   setLoading(false);
  //   // setCheckItems(new Array(cartList?.length).fill(true));
  // };

  // useEffect(() => {
  //   setLoading(true);
  //   getAllCart();
  //   window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  // }, []);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <AdContainer>
      <h1>Customers</h1>
      <div>
        <div>user List</div>
      </div>
    </AdContainer>
  );
};

export default CustomersManage;
