import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const OrderContainer = styled.div`
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

export const OrderWrapper = styled.div`
  margin-bottom: 40px;
  padding: 0 10px;
  /* display: flex;
  justify-content: center; */
`;

export const OrderBodyWrap = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    display: block;
  }
`;

export const OrderLeftInfo = styled.div`
  flex: 2;
  margin-right: 50px;

  @media screen and (max-width: 1024px) {
    display: block;
    margin: 0 auto;
  }
`;

export const OrderPsersonalInfo = styled.div`
  margin: 30px 0;
`;

export const OrderListTitle = styled.h2`
  margin: 0 0 20px;
  font-weight: 600;
  font-size: 18px;

  span {
    margin-left: 10px;
    color: #7a808b;
  }
`;

export const OrderInfoDetails = styled.div`
  margin-bottom: 20px;

  h3 {
    margin-bottom: 5px;
    font-weight: 600;
    font-size: 16px;
  }
`;

export const OrderListWrap = styled.div`
  border-top: 0.5px solid lightgray;
  border-bottom: 0.5px solid lightgray;
  padding: 30px 0;
`;

// -----inside

export const ListsDetails = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

export const ListsImgLink = styled(Link)`
  img {
    width: 100%;
    width: 80px;
  }
`;

export const ListsItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
  font-size: 14px;
`;

export const DetailName = styled(Link)`
  margin-bottom: 4px;
  font-weight: 600;
  cursor: pointer;
`;

export const DetailDescription = styled(Link)`
  cursor: pointer;
`;

export const DetailOption = styled.div`
  /* margin-bottom: 8px; */
  color: #626972;
`;

export const DetailPrice = styled.div`
  margin-top: 5px;
  font-weight: 700;
  font-size: 18px;
`;

export const PaymentMethod = styled.div`
  border: 1px solid lightgray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  margin-bottom: 10px;
  border-radius: 5px;

  img {
    width: 50px;
    object-fit: contain;
  }
  /* 
  input {
    margin-right: 10px;

    &:checked {
      border: 1px solid #0a0f18;
    }

    &:focus {
      border: 1px solid #0a0f18;
    }
  } */
`;

export const MethodRadio = styled.div`
  display: flex;
  align-items: center;

  input {
    margin-right: 10px;
  }
`;

// -----total
export const OrderRightInfo = styled.div`
  flex: 1;
  margin: 30px 0;

  @media screen and (max-width: 1024px) {
    border-top: 0.5px solid lightgray;
    padding-top: 20px;
  }
`;

export const OrderRightTop = styled.div`
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

export const OrderSummaryInfo = styled.div`
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

export const OrderCheckout = styled.div`
  p {
    font-size: 12px;
    color: #626972;
    text-align: center;
    margin: 40px 0;
  }
`;
