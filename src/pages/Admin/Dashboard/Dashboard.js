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
} from './DashboardStyle';
import PersonIcon from '@mui/icons-material/Person';
import PaidIcon from '@mui/icons-material/Paid';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ReceiptIcon from '@mui/icons-material/Receipt';

const Dashboard = ({ meData }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 1000));
      setLoading(false);
    };
    loadData();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <AdContainer>
      <h1>Dashboard</h1>
      <AdDashboardWrap>
        <AdDashboardTop>
          <DashboardTotal>
            <PersonIcon />
            Total Users
          </DashboardTotal>
          <DashboardTotal>
            <ShoppingBasketIcon />
            Total Products
          </DashboardTotal>
          <DashboardTotal>
            <PaidIcon />
            Total Orders
          </DashboardTotal>
          <DashboardTotal>
            <ReceiptIcon />
            Total Sales
            {/* Get Orders -> Get total Price++ (except status Cancelled) */}
          </DashboardTotal>
        </AdDashboardTop>
        <AdDashboardMid>
          <DashboardGraph>Order per Month</DashboardGraph>
          <DashboardGraph>Sales Growth per Month</DashboardGraph>
          {/* Get Orders -> Get total Price++ by created_at per a week */}

          {/* <DashboardGraph>Order per Category</DashboardGraph> */}
          {/* <DashboardGraph>Users Growth per Month</DashboardGraph> */}
        </AdDashboardMid>
        <AdDashboardBot>
          <DashboardList>Order Activity</DashboardList>
          {/* 최근 업데이트된 시간별 Status */}
          <DashboardList>Recent Products</DashboardList>
          {/* 최근 업로드된 아이템 */}
          <DashboardList>Recenter Buyers</DashboardList>
          {/* 최근 오더목록 중 주문한 유저정보 */}
        </AdDashboardBot>
      </AdDashboardWrap>
    </AdContainer>
  );
};

export default Dashboard;
