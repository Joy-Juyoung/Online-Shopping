import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AdDashboardWrap = styled.div`
  width: 100%;
`;

export const AdDashboardTop = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  margin: 40px auto;
`;

export const DashboardTotal = styled.div`
  width: 100%;
  height: 80px;
  /* 
  background: #fff;
  color: #fff; */
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px 0 10px;

  box-shadow: 4px 4px 6px 0 rgba(0, 0, 0, 0.1);
`;

export const AdDashboardMid = styled.div``;

export const DashboardGraph = styled.div``;

export const AdDashboardBot = styled.div``;

export const DashboardList = styled.div``;
