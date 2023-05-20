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
  ViewAllBtn,
} from './OrderStyle';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

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

    // setPendingList(orders?.filter((po) => po?.status === 'pending'));
    // setInprogressList(orders?.filter((po) => po?.status === 'inprogress'));
    // setCancelList(orders?.filter((po) => po?.status === 'cancelled'));
    // setDeliveredList(orders?.filter((po) => po?.status === 'delivered'));
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

  console.log('pendingList', pendingList);
  console.log('inprogresList', inprogressList);
  console.log('deliveredList', deliveredList);
  console.log('cancelList', cancelList);

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
            <AdStatus>
              <table>
                <tr>
                  <th>No.</th>
                  <th>USER</th>
                  <th>QTY</th>
                  <th>TOTAL</th>
                  <th>DATE</th>
                </tr>
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
              </table>
              <ViewAllBtn className='pending'>
                View All <KeyboardDoubleArrowRightIcon sx={{ fontSize: 15 }} />
              </ViewAllBtn>
            </AdStatus>
          </AdViewStatus>
          <AdViewStatus className='inprogress'>
            <AdStatus>
              <table>
                <tr>
                  <th>No.</th>
                  <th>USER</th>
                  <th>QTY</th>
                  <th>TOTAL</th>
                  <th>DATE</th>
                </tr>
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
              </table>
              <ViewAllBtn className='inprogress'>
                View All <KeyboardDoubleArrowRightIcon sx={{ fontSize: 15 }} />
              </ViewAllBtn>
            </AdStatus>
          </AdViewStatus>
          <AdViewStatus className='delivered'>
            <AdStatus>
              <table>
                <tr>
                  <th>No.</th>
                  <th>USER</th>
                  <th>QTY</th>
                  <th>TOTAL</th>
                  <th>DATE</th>
                </tr>
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
              </table>
              <ViewAllBtn className='delivered'>
                View All <KeyboardDoubleArrowRightIcon sx={{ fontSize: 15 }} />
              </ViewAllBtn>
            </AdStatus>
          </AdViewStatus>
          <AdViewStatus className='cancel'>
            <AdStatus>
              <table>
                <tr>
                  <th>No.</th>
                  <th>USER</th>
                  <th>QTY</th>
                  <th>TOTAL</th>
                  <th>DATE</th>
                </tr>
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
              </table>
              <ViewAllBtn className='cancel'>
                View All <KeyboardDoubleArrowRightIcon sx={{ fontSize: 15 }} />
              </ViewAllBtn>
            </AdStatus>
          </AdViewStatus>
        </AdViewList>
      </AdOrderOverview>
    </AdContainer>
  );
};

export default OrderManage;
