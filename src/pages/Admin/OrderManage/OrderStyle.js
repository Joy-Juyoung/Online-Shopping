import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

export const Thead = styled.thead``;

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

    svg {
      margin-left: 2px;
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

  &:hover {
    background: ${({ active }) => (active ? '#0a0f18' : '')};
    color: ${({ active }) => (active ? '#fff' : '')};
  }
`;

export const DeliveredToggle = styled.div`
  display: flex;
  align-items: center;
`;

export const DeliveredCheck = styled.div``;

export const DeliveredInput = styled.input`
  display: none;
`;

export const DeliveredLabel = styled.label`
  width: 62px;
  height: 26px;
  background: #c24d4d;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
`;

export const DeliveredSlider = styled.div`
  width: 25px;
  height: 22px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  /* left: 2px; */
  right: 2px;

  transition: all 0.2s ease;
`;

// --------------------
export const AdOrderOverview = styled.div`
  /* margin-top: 40px; */
  width: 100%;
`;

export const AdViewCount = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: space-evenly; */
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  margin: 40px auto;
`;

export const AdCount = styled.div`
  width: 100%;
  height: 80px;

  /* background: #fff; */
  /* color: #fff; */
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px 0 10px;

  box-shadow: 4px 4px 6px 0 rgba(0, 0, 0, 0.1);

  /* color: #21201e;
  border: 2px solid #21201e;
  border-left: 10px solid #21201e; */

  &.total {
    color: #93334b;
    border: 2px solid #e05076;
    border-left: 10px solid #e05076;
  }

  &.pending {
    color: #b74a01;
    border: 2px solid #f2b155;
    border-left: 10px solid #f2b155;
    /* opacity: 0.7; */
  }

  &.inprogress {
    color: #005260;
    border: 2px solid #61b9ff;
    border-left: 10px solid #61b9ff;
    /* opacity: 0.7; */
  }

  &.delivered {
    color: #006b21;
    border: 2px solid #73b748;
    border-left: 10px solid #73b748;
    /* opacity: 0.7; */
  }

  &.cancel {
    color: #82591c;
    border: 2px solid #ad8260;
    border-left: 10px solid #ad8260;
    /* opacity: 0.7; */
  }
`;

export const AdCountText = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 13px;

  p {
    margin-top: -10px;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 35px;
    padding: 0;
    margin-top: -10px;
  }
`;

export const AdCountIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* font-size: 13px; */

  svg {
    margin: 0 auto;
  }
`;

export const AdViewList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px 20px;
`;

export const AdViewStatus = styled.div`
  height: 220px;
  border-radius: 20px;
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.1);
  position: relative;

  &.pending {
    color: #b74a01;
    border: 1px solid #f2b155;
  }

  &.inprogress {
    color: #005260;
    border: 1px solid #61b9ff;
  }

  &.delivered {
    color: #006b21;
    border: 1px solid #73b748;
  }

  &.cancel {
    color: #82591c;
    border: 1px solid #ad8260;
  }
`;

export const AdStatus = styled.div`
  table {
    width: 100%;
    padding: 15px;
    font-size: 14px;
    text-align: center;
  }

  tr {
    /* padding: 10px 0; */
  }

  th {
    border-bottom: 1px solid lightgray;
    /* font-size: 14px; */
    padding-bottom: 5px;
    /* margin-bottom: 10px; */
  }

  td {
    padding-top: 3px;
  }
`;

export const ViewAllBtn = styled(Link)`
  text-decoration: none;
  position: absolute;
  bottom: 15px;
  right: 20px;
  display: flex;
  align-items: center;
  font-size: 13px;
  /* background: #e9e7e7; */
  padding: 3px 10px;
  border-radius: 10px;
  cursor: pointer;
  color: #fff;

  &:visited {
    color: #fff;
  }

  svg {
    margin-left: 5px;
  }

  &.pending {
    background: #f2b155;
    border: 1px solid #f2b155;
  }

  &.inprogress {
    background: #61b9ff;
    border: 1px solid #61b9ff;
  }

  &.delivered {
    background: #73b748;
    border: 1px solid #73b748;
  }

  &.cancel {
    background: #ad8260;
    border: 1px solid #ad8260;
  }

  &:hover {
    background: #fff;
    &.pending {
      color: #b74a01;
      border: 1px solid #f2b155;
    }

    &.inprogress {
      color: #005260;
      border: 1px solid #61b9ff;
    }

    &.delivered {
      color: #006b21;
      border: 1px solid #73b748;
    }

    &.cancel {
      color: #82591c;
      border: 1px solid #ad8260;
    }
  }
`;

export const EmptyList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 15px;
  opacity: 0.6;
`;
