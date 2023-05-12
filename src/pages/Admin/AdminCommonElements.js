import styled from 'styled-components';

export const AdminGlobal = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0px auto;
  display: flex;
  align-items: center;
  background: #cbccd3;
  /* background: #ffe9c9; */
`;

export const AdminBg = styled.div`
  flex: 1;
  max-width: 1280px;
  min-height: 80vh;
  display: flex;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
  background: #f5f5f5;
  box-shadow: 0 8px 15px 0 rgba(0, 0, 0, 0.3);
`;

export const AdminSideContainer = styled.div`
  margin: 0 auto;
`;

export const AdminContainer = styled.div`
  flex: 1;
  margin: 0px auto;
  padding: 25px 40px;
  color: #0a0f18;
`;

//List Page
export const AdContainer = styled.div`
  margin-top: -46px;

  h1 {
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #cbccd3;
  }
`;

export const AdListTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
`;

export const AdListSearch = styled.div`
  input {
    display: flex;
    align-items: center;
    padding: 5px 15px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
  }
`;

export const AdListUtils = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    margin-left: 5px;
  }
`;

export const AdListMid = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const AdListBottom = styled.div``;

// Table
export const AdTable = styled.table`
  width: 100%;
  height: 100%;
  border-collapse: collapse;
  font-size: 15px;
`;

export const AdTHead = styled.thead`
  text-align: left;
  border-bottom: 2px solid #afafaf;
`;

export const AdTHeadeRow = styled.tr``;

export const AdTHeadCell = styled.th`
  padding: 7px 0;
  &.check {
    padding-left: 15px;
  }
`;

export const AdTBody = styled.tbody`
  border-bottom: 0.5px solid #afafaf;
  height: 55px;
`;

export const AdTBodyRow = styled.tr``;

export const AdTBodyCell = styled.td`
  &.check {
    padding-left: 15px;
    width: 5%;
  }

  &.id {
    width: 5%;
  }

  &.phto {
    width: 10%;
    height: 40px;
  }

  &.name {
    width: 30%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-right: 10px;
  }

  &.price {
    width: 10%;
  }

  &.sub {
    width: 15%;
  }

  &.createAt {
    width: 25%;
  }
`;

export const CheckInput = styled.input`
  display: flex;
  align-items: center;
`;

export const BodyImg = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  display: flex;
  align-items: center;
`;