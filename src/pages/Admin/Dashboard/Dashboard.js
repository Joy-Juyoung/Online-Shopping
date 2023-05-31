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
} from './DashboardStyle';
import PersonIcon from '@mui/icons-material/Person';
import PaidIcon from '@mui/icons-material/Paid';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ReceiptIcon from '@mui/icons-material/Receipt';


const Dashboard = ({ meData }) => {
  const [loading, setLoading] = useState(false);
  const [customers, setCustomers] = useState();
  const [products, setProducts] = useState();
  const [orders, setOrders] = useState();
  const [pendingList, setPendingList] = useState();
  const [inprogressList, setInprogressList] = useState();
  const [deliveredList, setDeliveredList] = useState();
  const [cancelList, setCancelList] = useState();


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
              <span>{products?.length}</span>
              <p>Total Products</p>
            </AdCountText>
          </AdCount>
          <AdCount className='inprogress'>
            <AdCountIcon>
              <PaidIcon sx={{ fontSize: 45 }} />
            </AdCountIcon>
            <AdCountText>
              <span>{orders?.length}</span>
              <p>Total Orders</p>
            </AdCountText>
          </AdCount>
          <AdCount className='delivered'>
            <AdCountIcon>
              <ReceiptIcon sx={{ fontSize: 45 }} />
            </AdCountIcon>
            <AdCountText>
              <span>{totalSales}</span>
              <p>Total Sales</p>
            </AdCountText>
          </AdCount>
        </AdViewCount>
        <AdViewList>
          <AdViewStatus className='pending'>

          </AdViewStatus>
        </AdViewList>
      </AdOrderOverview>

      {/* <AdDashboardWrap>        
        <AdDashboardMid>
          <DashboardGraph>Order per Month</DashboardGraph>
          <DashboardGraph>Sales Growth per Month</DashboardGraph> */}
          {/* Get Orders -> Get total Price++ by created_at per a week */}

          {/* <DashboardGraph>Products per Category</DashboardGraph> */}
          {/* <DashboardGraph>Users Growth per Month</DashboardGraph> */}
        {/* </AdDashboardMid>
        <AdDashboardBot> */}
          {/* <DashboardList>Order Activity</DashboardList> */}
          {/* 최근 업데이트된 시간별 Status */}
          {/* <DashboardList>Recent Products</DashboardList> */}
          {/* 최근 업로드된 아이템 */}
          {/* <DashboardList>Recenter Buyers</DashboardList> */}
          {/* 최근 오더목록 중 주문한 유저정보 */}
        {/* </AdDashboardBot>
      </AdDashboardWrap> */}
    </AdContainer>
  );
};

export default Dashboard;
