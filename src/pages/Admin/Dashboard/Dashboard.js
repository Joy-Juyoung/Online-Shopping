import React, { useEffect, useState } from 'react';
import axios from '../../../api/axios';
import Loading from '../../../components/Loading';
import { AdContainer } from '../AdminCommonElements';
import {
  AdDashboardWrap,
  AdDashboardTop,
  DashboardTotal,
  AdDashboardMid,
  DashboardGraph,
  AdDashboardBot,
  DashboardList,
  InfoWrap,
  AdOrderOverview,
  AdCountText,
  AdCountIcon,
  AdCount,
  AdViewCount,
  AdViewList,
  AdViewStatus,
  AdViewListWrap,
  AdStatus,
  ViewAllBtn,
  DashLoader,
  DashListLoader,
} from './DashboardStyle';
import PersonIcon from '@mui/icons-material/Person';
import PaidIcon from '@mui/icons-material/Paid';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ReceiptIcon from '@mui/icons-material/Receipt';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import DountChart from './DountChart';
import { DountInfo, DountWrap } from './DountElements';
import PartLoader from '../../../components/PartLoader';

const Dashboard = ({ meData }) => {
  const [loading, setLoading] = useState(false);
  const [customers, setCustomers] = useState();
  const [products, setProducts] = useState();
  const [orders, setOrders] = useState();
  const [reviews, setReviews] = useState();

  const [pendingList, setPendingList] = useState();
  const [inprogressList, setInprogressList] = useState();
  const [deliveredList, setDeliveredList] = useState();
  const [cancelList, setCancelList] = useState();

  const getReviews = async () => {
    const reviewList = await axios.get('/reviews/', {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    console.log('reviewList', reviewList.data);
    setReviews(reviewList?.data);

    setLoading(false);
  };

  const getProducts = async () => {
    const productsList = await axios.get('/products/', {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    console.log('productsList', productsList.data);
    setProducts(productsList?.data);
    setLoading(false);
  };

  const getCustomers = async () => {
    const userList = await axios.get('/users/', {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    console.log('userList', userList.data);
    setCustomers(userList?.data);
    setLoading(false);
  };

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
    getCustomers();
    getProducts();
    getOrders();
    getReviews();
  }, [meData]);

  useEffect(() => {
    setPendingList(orders?.filter((po) => po?.status === 'pending'));
    setInprogressList(orders?.filter((po) => po?.status === 'inprogress'));
    setDeliveredList(orders?.filter((po) => po?.status === 'delivered'));
    setCancelList(orders?.filter((po) => po?.status === 'cancelled'));
  }, [orders]);

  useEffect(() => {
    setLoading(true);
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 1000));
      setLoading(false);
    };
    loadData();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const totalSales =
    pendingList?.length + inprogressList?.length + deliveredList?.length;
  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <AdContainer>
      <h1>Dashboard</h1>
      <AdOrderOverview>
        <AdViewCount>
          <AdCount className='total'>
            <AdCountIcon>
              <PersonIcon sx={{ fontSize: 45 }} />
            </AdCountIcon>
            <AdCountText>
              <span>
                {customers?.length || (
                  <DashLoader>
                    <PartLoader />
                  </DashLoader>
                )}
              </span>
              <p>Total Users</p>
            </AdCountText>
          </AdCount>
          <AdCount className='pending'>
            <AdCountIcon>
              <ShoppingBasketIcon sx={{ fontSize: 45 }} />
            </AdCountIcon>
            <AdCountText>
              <span>
                {products?.length || (
                  <DashLoader>
                    <PartLoader />
                  </DashLoader>
                )}
              </span>
              <p>Total Products</p>
            </AdCountText>
          </AdCount>
          <AdCount className='inprogress'>
            <AdCountIcon>
              <PaidIcon sx={{ fontSize: 45 }} />
            </AdCountIcon>
            <AdCountText>
              <span>
                {orders?.length || (
                  <DashLoader>
                    <PartLoader />
                  </DashLoader>
                )}
              </span>
              <p>Total Orders</p>
            </AdCountText>
          </AdCount>
          <AdCount className='delivered'>
            <AdCountIcon>
              <ReceiptIcon sx={{ fontSize: 45 }} />
            </AdCountIcon>
            <AdCountText>
              <span>
                {totalSales || (
                  <DashLoader>
                    <PartLoader />
                  </DashLoader>
                )}
              </span>
              <p>Total Sales</p>
            </AdCountText>
          </AdCount>
        </AdViewCount>
        <AdViewList>
          <AdViewListWrap>
            <AdViewStatus className='pending'>
              <DountWrap>
                <DountInfo>
                  <DountChart
                    color='#f2b155'
                    percent={0.43}
                    size='100px'
                    order={orders}
                  />
                  <p>Pending</p>
                </DountInfo>
                <DountInfo>
                  <DountChart
                    color='#61b9ff'
                    percent={0.15}
                    size='100px'
                    order={orders}
                  />
                  <p>Inprogress</p>
                </DountInfo>
              </DountWrap>
              <DountWrap>
                <DountInfo>
                  <DountChart
                    color='#73b748'
                    percent={0.34}
                    size='100px'
                    order={orders}
                  />
                  <p>Delivered</p>
                </DountInfo>
                <DountInfo>
                  <DountChart
                    color='#ad8260'
                    percent={0.08}
                    size='100px'
                    order={orders}
                  />
                  <p>Cancelled</p>
                </DountInfo>
              </DountWrap>
            </AdViewStatus>
            <AdViewStatus className='delivered'>
              <h4>Recent Update Reviews</h4>
              <AdStatus>
                <table>
                  <thead>
                    <tr>
                      <th>NO.</th>
                      <th>PRODUCT NAME</th>
                      <th>USER NAME</th>
                      <th>RATING</th>
                      <th>PAYLOAD</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reviews?.slice(0, 5).map((rv) => {
                      return (
                        <tr key={rv?.pk}>
                          <td>{rv?.pk}</td>
                          <td>
                            {rv?.Product_Name?.length > 10 ? (
                              `${rv?.Product_Name?.substring(0, 10)}...`
                            ) : (
                              <> {rv?.Product_Name}</>
                            )}
                          </td>
                          <td>{rv?.user?.username}</td>
                          <td>{rv?.rating}</td>
                          <td>
                            {rv?.payload?.length > 8 ? (
                              `${rv?.payload?.substring(0, 8)}...`
                            ) : (
                              <> {rv?.payload}</>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </AdStatus>
            </AdViewStatus>
          </AdViewListWrap>
          <AdViewStatus className='inprogress'>
            <h4>Recent Update Products</h4>
            <AdStatus>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>PHOTO</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>SUB CATEGORY</th>
                  </tr>
                </thead>
                <tbody>
                  {products?.slice(0, 10).map((dl) => {
                    return (
                      <tr key={dl?.pk}>
                        <td style={{ width: '10%' }}>{dl?.pk}</td>
                        <td style={{ width: '10%' }}>
                          <img src={dl?.photos[0]?.picture} />
                          {/* {dl?.photos[0]?.picture} */}
                        </td>
                        <td style={{ width: '30%' }}>
                          {dl?.name?.length > 15 ? (
                            `${dl?.name?.substring(0, 15)}...`
                          ) : (
                            <> {dl?.name}</>
                          )}
                        </td>
                        <td style={{ width: '5%' }}>{dl?.price}</td>
                        <td style={{ width: '20%' }}>{dl?.kind?.name}</td>
                      </tr>
                    );
                  }) || (
                    <DashListLoader>
                      <PartLoader />
                    </DashListLoader>
                  )}
                </tbody>
              </table>
            </AdStatus>
          </AdViewStatus>
        </AdViewList>
      </AdOrderOverview>
      {/*      
          <DashboardList>order status circle</DashboardList>
          최근 업데이트된 시간별 Status
          <DashboardList>Recenter review</DashboardList>
           최근 오더목록 중 주문한 유저정보 */}
    </AdContainer>
  );
};

export default Dashboard;
