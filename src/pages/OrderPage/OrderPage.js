import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';
import { ButtonUtils } from '../../components/ButtonElements';
import { PesnalContainer, PesnalWrapper } from '../CommonElements';
import {
  ListTotal,
  ListView,
  OrderContainer,
  OrderEachStatus,
  OrderList,
  OrderListEmpty,
  OrderListTable,
  OrderListTop,
  OrderMenuByStatus,
  OrderWrap,
  OrderWrapper,
} from './OrderElements';
import Loading from '../../components/Loading';

const OrderPage = () => {
  const [total, setTotal] = useState(0);
  const [orderItems, setOrderItems] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErMsg] = useState('');

  const getOrders = async () => {
    try {
      const order = await axios.get('wishlists/', {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });
      setOrderItems(order?.data);
      setLoading(false);
    } catch (err) {
      if (err.response?.status === 400) {
        // console.log('400 error');
        setLoading(false);
        setIsEmpty(!isEmpty);
      } else {
        console.log('Error page or empty page');
        setErMsg('Error page or empty page');
      }
    }
  };

  console.log('orderItems', orderItems);

  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    getOrders();
    // setLoading(false);
  }, []);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <OrderContainer>
      <OrderWrapper>
        <h1>My Profile</h1>
        <OrderWrap>
          <OrderMenuByStatus>
            <ButtonUtils>All</ButtonUtils>
            <ButtonUtils>Order Placed</ButtonUtils>
            <ButtonUtils>Dispatched</ButtonUtils>
            <ButtonUtils>Dekivered</ButtonUtils>
            <ButtonUtils>Cancel/Refund</ButtonUtils>
          </OrderMenuByStatus>
          <OrderList>
            <OrderListTop>
              <ListTotal>Total {total}</ListTotal>
              <ListView>
                <option value='Year 1'>Year 1</option>
                <option value='Week 1'>Week 1</option>
                <option value='Month 1'>Month 1</option>
                <option value='Month 3'>Month 3</option>
                <option value='Month 4'>Month 4</option>
              </ListView>
            </OrderListTop>
            {isEmpty ? (
              <OrderListEmpty>No orders found.</OrderListEmpty>
            ) : (
              <>
                <OrderListEmpty>Table</OrderListEmpty>
                {/* <OrderListTable></OrderListTable> */}
              </>
            )}
          </OrderList>
        </OrderWrap>
      </OrderWrapper>
    </OrderContainer>
  );
};

export default OrderPage;
