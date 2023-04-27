import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PaymentContainer = styled.div`
  width: 100%;
  /* height: 70vh; */
  margin: 0 auto;
  color: #0a0f18;
  h1 {
    text-align: center;
    margin: 40px auto;
  }

  a {
    text-decoration: none;

    &:visited {
      text-decoration: none;
      color: #0a0f18;
    }
  }
`;

export const PaymentWrapper = styled.div`
  margin-bottom: 40px;
  padding: 0 10px;
  /* display: flex;
  justify-content: center; */
`;

export const PaymentBodyWrap = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    display: block;
  }
`;

export const PaymentLeftInfo = styled.div`
  flex: 2;
  margin-right: 50px;

  @media screen and (max-width: 1024px) {
    display: block;
    margin: 0 auto;
  }
`;

export const PaymentStatusInfo = styled.div`
  margin: 30px 0;
  font-weight: 600;

  span {
    font-size: 18px;
    border-radius: 5px;
    margin-left: 10px;
    padding: 5px 10px;
  }
`;

export const PaymentPsersonalInfo = styled.div`
  margin: 30px 0;
  padding: 30px 0 0;
  border-top: 0.5px solid lightgray;
`;

export const PaymentListTitle = styled.h2`
  margin: 0 0 20px;
  font-weight: 600;
  font-size: 18px;

  span {
    margin-left: 10px;
    color: #7a808b;
  }
`;

export const PaymentInfoDetails = styled.div`
  margin-bottom: 20px;

  h3 {
    margin-bottom: 5px;
    font-weight: 600;
    font-size: 16px;
  }
`;

export const PaymentListWrap = styled.div`
  border-top: 0.5px solid lightgray;
  padding: 30px 0;
`;

// -----total
export const PaymentRightInfo = styled.div`
  flex: 1;
  margin: 30px 0;

  @media screen and (max-width: 1024px) {
    border-top: 0.5px solid lightgray;
    padding-top: 20px;
  }
`;

export const PaymentRightTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    display: flex;
    align-items: center;
  }
`;

export const TotalTitle = styled.h2`
  font-weight: 600;
  font-size: 18px;
`;

export const PaymentSummaryInfo = styled.div`
  /* display: block; */
  margin: 20px 0;
`;

export const ItemSummary = styled.dl`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  font-size: 14px;
  /* color: #bcbaba; */
`;

export const ItemTotalPrice = styled.dl`
  font-size: 16px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const ExtraInfo = styled.ul`
  list-style: none;

  li {
    font-size: 12px;
    color: #626972;
  }
`;

export const PaymentCheckout = styled.div`
  p {
    font-size: 12px;
    color: #626972;
    text-align: center;
    margin: 40px 0;
  }
`;

// -------------

export const Table = styled.table`
  width: 100%;
  margin-bottom: 5em;
  font-size: 13px;
  text-align: center;

  tbody:nth-child(odd) {
    background-color: #fff;
  }
  tbody:nth-child(even) {
    background-color: #f7f7f7;
  }
`;

export const Thead = styled.thead`
  /* text-align: left; */
  /* font-size: 13px; */
`;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  padding: 10px;
`;

export const Td = styled.td`
  padding: 10px;

  a {
    text-decoration: none;
    color: #0a0f18;
    padding: 0;
    /* display: flex;
    align-items: center;
    justify-content: center; */

    svg {
      margin-left: 2px;
      /* color: gray; */
    }

    &:visited {
      color: #0a0f18;
    }

    &:hover {
      color: blue;
    }
  }
`;

export const ReviewBtn = styled.button`
  color: ${({ active }) => (active ? '#0a0f18' : '')};
  background: ${({ active }) => (active ? '#fff' : '')};
  border: ${({ active }) => (active ? 'none' : '')};
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  /* font-size: 13px; */

  &:hover {
    background: ${({ active }) => (active ? '#0a0f18' : '')};
    color: ${({ active }) => (active ? '#fff' : '')};
  }
`;
