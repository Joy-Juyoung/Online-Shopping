import React, { useEffect, useState } from 'react';
import { AdContainer } from '../AdminCommonElements';
import axios from '../../../api/axios';
import Loading from '../../../components/Loading';
import {
  AdCount,
  AdCountIcon,
  AdCountText,
  AdGraph,
  AdOrderOverview,
  AdStatus,
  AdViewCount,
  AdViewList,
  AdViewMonthGraph,
  AdViewStatus,
  EmptyList,
  ViewAllBtn,
} from './OrderStyle';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Link } from 'react-router-dom';

const OrderManage = ({ meData }) => {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState();

  const [pendingList, setPendingList] = useState();
  const [inprogressList, setInprogressList] = useState();
  const [deliveredList, setDeliveredList] = useState();
  const [cancelList, setCancelList] = useState();

  const getOrders = async () => {
    const orderList = await axios.get('/orders/', {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    console.log('orederList', orderList.data);
    setOrders(orderList?.data);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getOrders();
  }, [meData]);

  useEffect(() => {
    setPendingList(orders?.filter((po) => po?.status === 'pending'));
    setInprogressList(orders?.filter((po) => po?.status === 'inprogress'));
    setDeliveredList(orders?.filter((po) => po?.status === 'delivered'));
    setCancelList(orders?.filter((po) => po?.status === 'cancelled'));
  }, [orders]);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <AdContainer>
      <h1>Orders</h1>
      <AdOrderOverview>
        <AdViewCount>
          <AdCount className='total'>
            <AdCountIcon>
              <ShoppingBagIcon sx={{ fontSize: 45 }} />
            </AdCountIcon>
            <AdCountText>
              <span>{orders?.length}</span>
              <p>Total</p>
            </AdCountText>
          </AdCount>
          <AdCount className='pending'>
            <AdCountIcon>
              <PendingActionsIcon sx={{ fontSize: 45 }} />
            </AdCountIcon>
            <AdCountText>
              <span>{pendingList?.length}</span>
              <p>Pending</p>
            </AdCountText>
          </AdCount>
          <AdCount className='inprogress'>
            <AdCountIcon>
              <RotateRightIcon sx={{ fontSize: 45 }} />
            </AdCountIcon>
            <AdCountText>
              <span>{inprogressList?.length}</span>
              <p>Inprogress</p>
            </AdCountText>
          </AdCount>
          <AdCount className='delivered'>
            <AdCountIcon>
              <LocalShippingIcon sx={{ fontSize: 45 }} />
            </AdCountIcon>
            <AdCountText>
              <span>{deliveredList?.length}</span>
              <p>Delivered</p>
            </AdCountText>
          </AdCount>
          <AdCount className='cancel'>
            <AdCountIcon>
              <DoNotDisturbAltIcon sx={{ fontSize: 45 }} />
            </AdCountIcon>
            <AdCountText>
              <span>{cancelList?.length}</span>
              <p>Cancelled</p>
            </AdCountText>
          </AdCount>
        </AdViewCount>

        <AdViewList>
          <AdViewStatus className='pending'>
            {pendingList?.length === 0 ? (
              <EmptyList>
                <FormatListBulletedIcon sx={{ fontSize: 45 }} />
                <p>Nothing pending orders</p>
              </EmptyList>
            ) : (
              <AdStatus>
                <table>
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>USER</th>
                      <th>QTY</th>
                      <th>TOTAL</th>
                      <th>DATE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pendingList?.slice(0, 5).map((pl) => {
                      return (
                        <tr key={pl?.pk}>
                          <td style={{ width: '10%' }}>{pl?.pk}</td>
                          <td style={{ width: '20%' }}>{pl?.user?.username}</td>
                          <td style={{ width: '10%' }}>{pl?.total_products}</td>
                          <td style={{ width: '20%' }}>
                            ${pl?.total_price?.toLocaleString()}
                          </td>
                          <td>
                            {new Date(pl?.created_at).toLocaleString('en-ca')}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <ViewAllBtn className='pending' to='/admin/orders/pending'>
                  View All Pending Orders
                  <KeyboardDoubleArrowRightIcon sx={{ fontSize: 15 }} />
                </ViewAllBtn>
              </AdStatus>
            )}
          </AdViewStatus>
          <AdViewStatus className='inprogress'>
            {inprogressList?.length === 0 ? (
              <EmptyList>
                <FormatListBulletedIcon sx={{ fontSize: 45 }} />
                <p>Nothing inprogress orders</p>
              </EmptyList>
            ) : (
              <AdStatus>
                <table>
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>USER</th>
                      <th>QTY</th>
                      <th>TOTAL</th>
                      <th>DATE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inprogressList?.slice(0, 5).map((il) => {
                      return (
                        <tr key={il?.pk}>
                          <td style={{ width: '10%' }}>{il?.pk}</td>
                          <td style={{ width: '20%' }}>{il?.user?.username}</td>
                          <td style={{ width: '10%' }}>{il?.total_products}</td>
                          <td style={{ width: '20%' }}>
                            ${il?.total_price?.toLocaleString()}
                          </td>
                          <td>
                            {new Date(il?.created_at).toLocaleString('en-ca')}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <ViewAllBtn className='inprogress' to='/admin/orders/all'>
                  View All Inprogress orders
                  <KeyboardDoubleArrowRightIcon sx={{ fontSize: 15 }} />
                </ViewAllBtn>
              </AdStatus>
            )}
          </AdViewStatus>
          <AdViewStatus className='delivered'>
            {deliveredList?.length === 0 ? (
              <EmptyList>
                <FormatListBulletedIcon sx={{ fontSize: 45 }} />
                <p>Nothing delivered orders</p>
              </EmptyList>
            ) : (
              <AdStatus>
                <table>
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>USER</th>
                      <th>QTY</th>
                      <th>TOTAL</th>
                      <th>DATE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {deliveredList?.slice(0, 5).map((dl) => {
                      return (
                        <tr key={dl?.pk}>
                          <td style={{ width: '10%' }}>{dl?.pk}</td>
                          <td style={{ width: '20%' }}>{dl?.user?.username}</td>
                          <td style={{ width: '10%' }}>{dl?.total_products}</td>
                          <td style={{ width: '20%' }}>
                            ${dl?.total_price?.toLocaleString()}
                          </td>
                          <td>
                            {new Date(dl?.created_at).toLocaleString('en-ca')}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <ViewAllBtn className='delivered' to='/admin/orders/all'>
                  View All Delivered orders
                  <KeyboardDoubleArrowRightIcon sx={{ fontSize: 15 }} />
                </ViewAllBtn>
              </AdStatus>
            )}
          </AdViewStatus>
          <AdViewStatus className='cancel'>
            {cancelList?.length === 0 ? (
              <EmptyList>
                <FormatListBulletedIcon sx={{ fontSize: 45 }} />
                <p>Nothing cancelled orders</p>
              </EmptyList>
            ) : (
              <AdStatus>
                <table>
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>USER</th>
                      <th>QTY</th>
                      <th>TOTAL</th>
                      <th>DATE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cancelList?.slice(0, 5).map((cl) => {
                      return (
                        <tr key={cl?.pk}>
                          <td style={{ width: '10%' }}>{cl?.pk}</td>
                          <td style={{ width: '20%' }}>{cl?.user?.username}</td>
                          <td style={{ width: '10%' }}>{cl?.total_products}</td>
                          <td style={{ width: '20%' }}>
                            ${cl?.total_price?.toLocaleString()}
                          </td>
                          <td>
                            {new Date(cl?.created_at).toLocaleString('en-ca')}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <ViewAllBtn className='cancel' to='/admin/orders/all'>
                  View All Cancelled orders
                  <KeyboardDoubleArrowRightIcon sx={{ fontSize: 15 }} />
                </ViewAllBtn>
              </AdStatus>
            )}
          </AdViewStatus>
        </AdViewList>
      </AdOrderOverview>
    </AdContainer>
  );
};

export default OrderManage;
