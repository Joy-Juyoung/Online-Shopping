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
} from './DashboardStyle';
import PersonIcon from '@mui/icons-material/Person';
import PaidIcon from '@mui/icons-material/Paid';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ReceiptIcon from '@mui/icons-material/Receipt';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import DountChart from './DountChart';
import { DountInfo, DountWrap } from './DountElements';
import PartLoading from './PartLoading';
import { Skeleton } from '@mui/material';

const Dashboard = ({ meData }) => {
  const [loading, setLoading] = useState(false);
  const [customers, setCustomers] = useState();
  const [products, setProducts] = useState();
  const [orders, setOrders] = useState();
  const [reviews, setReviews] = useState();

  const [loadings, setLoadings] = useState(true);
  const [loadingss, setLoadingss] = useState(true);
  
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadings(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingss(false);
    }, 5600);
    return () => clearTimeout(timer);
  }, []);

  const totalSales = pendingList?.length + inprogressList?.length + deliveredList?.length;

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
              <span>{customers?.length}</span>
              <p>Total Users</p>
            </AdCountText>
          </AdCount>
          <AdCount className='pending'>
            <AdCountIcon>
              <ShoppingBasketIcon sx={{ fontSize: 45 }} />
            </AdCountIcon>
            <AdCountText>
              {loadingss ? (
                    <Skeleton variant='circular' width={53} height={53} />
                    ) : (
                    <span>{products?.length}</span>
                    )}
                    <p>Total Products</p>
            </AdCountText>
          </AdCount>
          <AdCount className='inprogress'>
            <AdCountIcon>
              <PaidIcon sx={{ fontSize: 45 }} />
            </AdCountIcon>
            <AdCountText>
                  {loadings ? (
                    <Skeleton variant='circular' width={53} height={53} />
                  ) : (
                      <span>{orders?.length}</span>
                  )}
                    <p>Total Orders</p>
            </AdCountText>
          </AdCount>
          <AdCount className='delivered'>
            <AdCountIcon>
              <ReceiptIcon sx={{ fontSize: 45 }} />
            </AdCountIcon>
                <AdCountText>
                  {loadings ? (
                    <Skeleton variant="circular" width={53} height={53} />
                  ) : (
                    <span>{totalSales}</span>
                  )}
                    <p>Total Sales</p>
                </AdCountText>
          </AdCount>
        </AdViewCount>
        <AdViewList>
          <AdViewListWrap>
            <AdViewStatus className='pending'>
              <DountWrap>
                <DountInfo>
                  <DountChart color="#f2b155" percent={0.43} size="100px" order={orders}/>
                  <p>Pending</p>
                </DountInfo>
                <DountInfo>
                  <DountChart color="#61b9ff" percent={0.15} size="100px" order={orders}/>
                  <p>Inprogress</p>
                </DountInfo>
              </DountWrap>  
              <DountWrap>
                <DountInfo>
                <DountChart color="#73b748" percent={0.34} size="100px" order={orders}/>
                <p>Delivered</p>
                </DountInfo>
                <DountInfo>
                <DountChart color="#ad8260" percent={0.08} size="100px" order={orders}/>
                <p>Cancelled</p>
                </DountInfo>
              </DountWrap>
            </AdViewStatus>
            <AdViewStatus className='delivered'>
              <h4>Recent Update Reviews</h4>
              <AdStatus>
                <table>
                {loadings ? (
                        <Skeleton variant='rect' width="100%" height={150} />
                        ) : (
                      <>
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
                          <td style={{ width: '5%' }}>{rv?.pk}</td>
                          <td style={{ width: '33%' }}>{rv?.Product_Name}</td>                          
                          <td style={{ width: '22%' }}>{rv?.user?.username}</td>
                          <td style={{ width: '5%' }}>{rv?.rating}</td>
                          <td style={{ width: '10%' }}>{rv?.payload}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                  </>
                    )}
                </table>
              </AdStatus>
            </AdViewStatus>   
          </AdViewListWrap>
          <AdViewStatus className='inprogress'>
            <h4>Recent Update Products</h4>
            <AdStatus>
               <table>
                {loadingss ? (
                        <Skeleton variant='rect' width="100%" height={400} />
                        ) : (
                      <>
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
                                  <img src={dl?.photos[0]?.picture}/>
                                  {/* {dl?.photos[0]?.picture} */}
                                </td>
                                <td style={{ width: '30%' }}>{dl?.name}</td>
                                <td style={{ width: '5%' }}>{dl?.price}</td>
                                <td style={{ width: '20%' }}>{dl?.kind?.name}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </>
                    )}
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
