import React, { useEffect, useState } from 'react';
import { AdContainer } from '../AdminCommonElements';

const ItemManage = ({ catData }) => {
  // const [loading, setLoading] = useState(false);
  // const [orders, setOrders] = useState();

  // const [pendingList, setPendingList] = useState();
  // const [inprogressList, setInprogressList] = useState();

  // const [products, setProducts] = useState();

  // const getProducts = async () => {
  //   const itemList = await axios.get('/products/', {
  //     headers: { 'Content-Type': 'application/json' },
  //     withCredentials: true,
  //   });
  //   // console.log('itemList', itemList.data);
  //   setProducts(itemList?.data);
  //   setLoading(false);
  // };

  // console.log('catData', catData);

  // const getOrders = async () => {
  //   const orderList = await axios.get('/orders/', {
  //     headers: { 'Content-Type': 'application/json' },
  //     withCredentials: true,
  //   });
  //   console.log('orederList', orderList.data);
  //   setOrders(orderList?.data);
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   setLoading(true);
  //   getOrders();
  //   getProducts();
  // }, [catData]);

  // useEffect(() => {
  //   setPendingList(orders?.filter((po) => po?.status === 'pending'));
  //   setInprogressList(orders?.filter((po) => po?.status === 'inprogress'));
  // }, [orders]);

  // if (loading)
  //   return (
  //     <div>
  //       <Loading />
  //     </div>
  //   );
  return (
    <AdContainer>
      {/* <h1>Orders</h1>
      <AdOrderOverview>
        <AdViewCount>
          <AdCountWrap>
            <AdCount className='total'>
              <AdCountIcon>
                <ShoppingBagIcon sx={{ fontSize: 35 }} />
                <p>Total</p>
              </AdCountIcon>
              <AdCountText>
                <span>{orders?.length}</span>
              </AdCountText>
            </AdCount>
            <AdCount className='pending'>
              <AdCountIcon>
                <PendingActionsIcon sx={{ fontSize: 35 }} />
                <p>Pending</p>
              </AdCountIcon>
              <AdCountText>
                <span>{pendingList?.length}</span>
              </AdCountText>
            </AdCount>
            <AdCount className='inprogress'>
              <AdCountIcon>
                <RotateRightIcon sx={{ fontSize: 35 }} />
                <p>Inprogress</p>
              </AdCountIcon>
              <AdCountText>
                <span>{inprogressList?.length}</span>
              </AdCountText>
            </AdCount>
          </AdCountWrap>
          <AdItemByCatList></AdItemByCatList>
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
                    {pendingList?.slice(0, 20).map((pl) => {
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
                    {inprogressList?.slice(0, 20).map((il) => {
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
        </AdViewList>
      </AdOrderOverview> */}
    </AdContainer>
  );
};

export default ItemManage;
