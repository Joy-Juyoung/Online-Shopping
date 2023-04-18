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
  const [orderStatus, setOrderStatus] = useState(null);
  const [orderPk, setOrderPk] = useState([]);
  const [orderItems, setOrderItems] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErMsg] = useState('');
  const [soldItems, setSoldItems] = useState([]);

  const getOrders = async () => {
    try {
      const order = await axios.get('/orders/', {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });
      setOrderStatus(order?.data);
      // setOrderPk(orderStatus?.pk);
      setLoading(false);
    } catch (err) {
      if (err.response?.status === 400) {
        setLoading(false);
        setIsEmpty(!isEmpty);
      } else {
        console.log('Error page or empty page');
        setErMsg('Error page or empty page');
      }
    }
  };

  console.log('orderStatus', orderStatus);

  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    getOrders();
  }, []);

  const getOrdersById = () => {
    orderStatus?.map((i) => {
      axios
        .get(`/orders/${i.pk}`, {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        })
        .then((res) => {
          setOrderItems(res.data);
          console.log('ordered', orderItems.total);
        });
    });
  };

  console.log('ordered out', orderItems);

  useEffect(() => {
    getOrdersById();
    // setOrderItems(orderItems);
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
        <h1>My Orders</h1>
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
              <ListTotal>Total {orderStatus?.length}</ListTotal>
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
                {/* <OrderListEmpty>Table</OrderListEmpty>
                <OrderListTable></OrderListTable> */}
                {orderStatus?.map((order) => {
                  return (
                    <ul key={order?.pk}>
                      {/* {orderItems && <li>{orderItems?.pk}</li>} */}
                      {/* {order?.pk === orderStatus.pk && (
                        )} */}
                      {/* <li>{order?.soldProduct?.length}</li> */}
                      {orderItems?.soldProduct?.map((sold) => {
                        return (
                          <li>
                            <div>{sold.pk}</div>
                          </li>
                        );
                      })}
                      <li>{order?.total_price}</li>
                    </ul>
                  );
                })}
              </>
            )}
          </OrderList>
        </OrderWrap>
      </OrderWrapper>
    </OrderContainer>
  );
};

export default OrderPage;
