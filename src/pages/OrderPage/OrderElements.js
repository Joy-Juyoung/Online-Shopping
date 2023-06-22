import styled from 'styled-components';

export const OrderContainer = styled.div`
  /* max-width: 1280px; */
  /* height: 100%; */
  /* height: 70vh; */
  margin: 0 auto;
  font-size: 14px;
  color: #0a0f18;
  margin-bottom: 40px;

  h1 {
    text-align: center;
    margin: 40px auto;
  }

  a {
    text-decoration: none;
    color: #0a0f18;

    &:visited {
      text-decoration: none;
      color: #0a0f18;
    }
  }

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
  /* margin-bottom: 5em; */
`;

export const OrderMenuBy = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OrderMenuByStatus = styled.div`
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
  padding: 5px 20px;
`;

export const ListTotal = styled.div`
  /* padding: 0 20px; */
  font-size: 12px;
`;

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

export const OrderListWrap = styled.div`
  width: 100%;
`;

export const Table = styled.table`
  width: 100%;
  text-align: center;
  /* margin-bottom: 10em; */
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody`
  tr:nth-child(odd) {
    background-color: #f7f7f7;
  }
  tr:nth-child(even) {
    background-color: #fff;
  }
`;

export const Tr = styled.tr``;

export const Th = styled.th`
  padding: 10px;

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      cursor: pointer;
    }
  }
`;

export const Td = styled.td`
  padding: 10px;
  position: relative;

  a {
    text-decoration: none;
    color: #0a0f18;
    text-align: center;
    /* padding-top: 5px; */
    display: flex;
    align-items: center;
    justify-content: center;

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

export const StatusBox = styled.div`
  border-radius: 5px;
  border: none;
  padding: 5px 0;
  font-weight: 600;
  font-size: 12px;
`;

export const NotificationStatus = styled.div`
  font-size: 12px;
  color: #626972;
`;

export const LoadMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
