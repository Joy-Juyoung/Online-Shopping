import styled from 'styled-components';

export const OrderContainer = styled.div`
  /* max-width: 1280px; */
  /* height: 100%; */
  height: 70vh;
  margin: 0 auto;
  font-size: 14px;
  color: #0a0f18;

  @media screen and (min-width: 576px) {
    max-width: 55%;
  }
`;

export const OrderWrapper = styled.div`
  margin: 0 auto;

  h1 {
    text-align: center;
    margin: 40px auto;
  }
`;

export const OrderWrap = styled.div`
  margin: 0 auto;
`;

export const OrderMenuByStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    margin: 0 15px;
  }
`;

export const OrderList = styled.div`
  margin-top: 40px;
`;

export const OrderListTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  padding: 10px 0;
`;

export const ListTotal = styled.div``;

export const ListView = styled.select`
  border: none;
`;

export const OrderListEmpty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin: 80px 0; */
  height: 20vh;
  font-weight: 400;
`;

export const OrderListTable = styled.table``;
