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
  OrderListWrap,
  OrderMenuBy,
  OrderMenuByStatus,
  OrderWrap,
  OrderWrapper,
  StatusBox,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from './OrderElements';
import Loading from '../../components/Loading';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from 'styled-components';

const statusKinds = ['All', 'pending', 'inprogress', 'delivered', 'cancelled'];
const OrderPage = () => {
  const [orderStatus, setOrderStatus] = useState(null);
  // const [isEmpty, setIsEmpty] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErMsg] = useState('');
  const [isSelected, setIsSelected] = useState('All');

  const getOrders = async () => {
    try {
      const order = await axios.get('/orders/', {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });
      setOrderStatus(order?.data);
      setLoading(false);
    } catch (err) {
      if (err.response?.status === 400) {
        setLoading(false);
        // setIsEmpty(!isEmpty);
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

  const handleStatusList = (status) => {
    console.log(status);
    if (status === 'pending') {
      setIsSelected('pending');
    }
    if (status === 'inprogress') {
      setIsSelected('inprogress');
    }
    if (status === 'delivered') {
      setIsSelected('delivered');
    }
    if (status === 'cancelled') {
      setIsSelected('cancelled');
    }
    if (status === 'All') {
      setIsSelected('All');
    }

    // e.target.style.backgroundColor = '#000';
  };

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
          <OrderMenuBy>
            {/* update_at 순서대로 sort */}
            {statusKinds.map((status, index) => {
              return (
                <OrderMenuByStatus key={index}>
                  {isSelected === status ? (
                    <ButtonUtils
                      onClick={() => handleStatusList(status)}
                      selected={true}
                    >
                      {status}
                    </ButtonUtils>
                  ) : (
                    <ButtonUtils onClick={() => handleStatusList(status)}>
                      {status}
                    </ButtonUtils>
                  )}
                </OrderMenuByStatus>
              );
            })}
          </OrderMenuBy>
          <OrderList>
            <OrderListTop>
              {isSelected === 'All' && (
                <ListTotal>Total {orderStatus?.length}</ListTotal>
              )}
              <ListView>
                <option value='Year 1'>Year 1</option>
                <option value='Week 1'>Week 1</option>
                <option value='Month 1'>Month 1</option>
                <option value='Month 3'>Month 3</option>
                <option value='Month 4'>Month 4</option>
              </ListView>
            </OrderListTop>
            {orderStatus?.length === 0 ? (
              <OrderListEmpty>No orders found.</OrderListEmpty>
            ) : (
              <OrderListWrap>
                <Table>
                  <Thead>
                    <Tr>
                      <Th>Order No.</Th>
                      <Th>Order Date</Th>
                      <Th>Number of Items</Th>
                      <Th>Order Pice</Th>
                      <Th>Status</Th>
                      <Th></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {orderStatus?.map((order) => {
                      return (
                        <Tr key={order?.pk}>
                          {isSelected === 'All' && (
                            <>
                              <Td>{order.pk}</Td>

                              <Td>
                                {new Date(
                                  order.created_at
                                ).toLocaleDateString()}
                              </Td>
                              <Td>{order.total_products}</Td>
                              <Td>${order.total_price.toLocaleString()}</Td>
                              <Td>
                                {order.status === 'pending' && (
                                  <StatusBox
                                    style={{
                                      background: '#FEF3C7',
                                      color: '#b74a01',
                                    }}
                                  >
                                    {order.status.toUpperCase()}
                                  </StatusBox>
                                )}
                                {order.status === 'inprogress' && (
                                  <StatusBox
                                    style={{
                                      background: '#c2f3fc',
                                      color: '#005260',
                                    }}
                                  >
                                    {order.status.toUpperCase()}
                                  </StatusBox>
                                )}
                                {order.status === 'delivered' && (
                                  <StatusBox
                                    style={{
                                      background: '#c2fcd5',
                                      color: '#006b21',
                                    }}
                                  >
                                    {order.status.toUpperCase()}
                                  </StatusBox>
                                )}
                                {order.status === 'cancelled' && (
                                  <StatusBox
                                    style={{
                                      background: '#FEE2E2',
                                      color: '#7a0000',
                                    }}
                                  >
                                    {order.status.toUpperCase()}
                                  </StatusBox>
                                )}
                              </Td>
                              <Td>
                                <Link to={`/userOrders/${order?.pk}`}>
                                  <ArrowForwardIosIcon fontSize='15px' />
                                </Link>
                              </Td>
                            </>
                          )}
                          {order?.status === isSelected && (
                            <>
                              <Td>{order.pk}</Td>

                              <Td>
                                {new Date(
                                  order.created_at
                                ).toLocaleDateString()}
                              </Td>
                              <Td>{order.total_products}</Td>
                              <Td>${order.total_price.toLocaleString()}</Td>
                              <Td>
                                {order.status === 'pending' && (
                                  <StatusBox
                                    style={{
                                      background: '#FEF3C7',
                                      color: '#b74a01',
                                    }}
                                  >
                                    {order.status.toUpperCase()}
                                  </StatusBox>
                                )}
                                {order.status === 'inprogress' && (
                                  <StatusBox
                                    style={{
                                      background: '#c2fcd5',
                                      color: '#006b21',
                                    }}
                                  >
                                    {order.status.toUpperCase()}
                                  </StatusBox>
                                )}
                                {order.status === 'delivered' && (
                                  <StatusBox
                                    style={{
                                      background: '#c2f3fc',
                                      color: '#005260',
                                    }}
                                  >
                                    {order.status.toUpperCase()}
                                  </StatusBox>
                                )}
                                {order.status === 'cancelled' && (
                                  <StatusBox
                                    style={{
                                      background: '#FEE2E2',
                                      color: '#7a0000',
                                    }}
                                  >
                                    {order.status.toUpperCase()}
                                  </StatusBox>
                                )}
                              </Td>
                              <Td>
                                <Link to={`/userOrders/${order?.pk}`}>
                                  <ArrowForwardIosIcon fontSize='15px' />
                                </Link>
                              </Td>
                            </>
                          )}
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
              </OrderListWrap>
            )}
          </OrderList>
        </OrderWrap>
      </OrderWrapper>
    </OrderContainer>
  );
};

export default OrderPage;
