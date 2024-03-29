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

export const PaymentSuccessMsg = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  margin: 50px auto;
  width: 375px;

  div {
    text-align: center;
    width: 100%;
  }

  h1 {
    font-size: 25px;
    margin: 20px 0;
  }
  p {
    text-align: center;
    margin: 20px 0 30px;
    padding: 15px;
    border: 1px solid #009605;
    background: #dff0d7;
    color: #009605;
    font-weight: 600;
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

export const PaymentPsersonalInfo = styled.div`
  margin: 30px 0;
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
    /* width: 100%; */
    width: 80px;
    height: 80px;
    /* object-fit: cover; */
  }
`;

export const ListsItemDetails = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
  font-size: 14px;
`;

export const DetailName = styled.div`
  margin-bottom: 4px;
  font-weight: 600;
  cursor: pointer;
`;

export const DetailDescription = styled.div`
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

export const MethodRadio = styled.div`
  display: flex;
  align-items: center;

  input {
    margin-right: 10px;
  }
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
