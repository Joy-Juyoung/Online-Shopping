import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AdIconDelete = styled.div`
  /* margin-right: 10px; */
  cursor: pointer;
`;

// ---modal
export const PopupBox = styled.div`
  margin: 10px auto;
  padding: 0 10px;
  /* border-radius: 5px; */

  /* background: #fff;
  width: 400px !important; */
`;

export const Box = styled.div`
  margin: 0 auto;
`;

export const BoxH2 = styled.h2`
  margin-bottom: 20px 0;
  text-align: center;
`;

export const BoxUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px 0;
`;

export const BoxUsers = styled.div`
  margin: 10px 0 20px;
`;

export const BoxH3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-size: 15px;
  }

  p {
    font-size: 11px;
  }
`;

export const BoxSuccess = styled.div`
  color: #009605;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  margin-right: 10px;
  margin-top: -10px;
`;

export const BoxNotice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: 14px;
  }

  p {
    font-size: 11px;
  }
`;

export const BoxUserList = styled.div`
  height: 200px;
  overflow-y: scroll;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  padding: 5px 0;
`;

export const BoxListLine = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  cursor: pointer;
  font-size: 14px;

  p {
    margin: 0 10px;
  }

  &:hover {
    background: lightgray;
  }
`;

export const BoxListSelecteLine = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;

  p {
    margin: 0 10px;
  }
`;

export const BoxLi = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 0;
`;

export const BoxSpan = styled.span`
  margin: 3px 0;
`;

export const BoxBtn = styled.div`
  display: flex;
  align-items: center;

  &.prev {
    justify-content: flex-end;
  }

  &.next {
    justify-content: space-between;
  }
`;

export const AddNextBtn = styled.div`
  width: auto;
  min-width: 130px;
  height: 44px;
  border-radius: 6px;
  background: #fff;
  color: #0a0f18;
  padding: 0 16px;
  font-size: 16px;
  outline: none;
  border: 1px solid #a3a9b3;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    font-weight: 600;
  }
`;

// ---Next

export const BoxCategoryH3 = styled.div`
  display: flex;
  align-items: center;
`;

export const BoxCategory = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 20px 0;
  border-bottom: 1px solid lightgray;

  height: 263px;
  overflow-y: scroll;
`;

export const BoxCatList = styled.div`
  padding: 5px;

  display: flex;
  align-items: center;
  text-align: center;

  border-top: 1px solid lightgray;
`;

export const BoxCatParents = styled.div`
  flex: 1;
  font-size: 13px;
  text-align: left;
`;

export const BoxCatChild = styled.div`
  padding-right: 5px;
  flex: 3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  font-size: 13px;

  p {
    padding: 3px 0;
    margin: 3px 0;
    border: 1px solid #000;
    border-radius: 10px;

    &:hover {
      background: #000;
      color: #fff;
      border: 1px solid #000;
      border-radius: 10px;
      cursor: pointer;
    }
  }
`;

// ---overview

export const AdOrderOverview = styled.div`
  width: 100%;
`;

export const AdViewCount = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  margin: 40px auto;
`;

// export const AdCountWrap = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;

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

  &.total {
    color: #93334b;
    border: 2px solid #e05076;
    border-left: 10px solid #e05076;
  }

  &.pending {
    color: #b74a01;
    border: 2px solid #f2b155;
    border-left: 10px solid #f2b155;
  }

  &.inprogress {
    color: #005260;
    border: 2px solid #61b9ff;
    border-left: 10px solid #61b9ff;
  }
`;

export const AdCountText = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  text-align: center;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 35px;
    padding: 0;
    /* margin-top: -10px; */
  }

  p {
    margin-top: -5px;
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

export const AdItemByCatList = styled.div`
  /* width: 100%;
  height: 250px; */
  height: 210px;
  border: 2px solid #61b9ff;
  border-radius: 20px;
  margin: 20px 0;
`;

export const AdViewList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
`;

export const AdViewStatus = styled.div`
  height: 250px;
  border-radius: 20px;
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.1);
  position: relative;
  margin-top: 20px;

  &.pending {
    color: #b74a01;
    border: 1px solid #f2b155;
  }

  &.inprogress {
    color: #005260;
    border: 1px solid #61b9ff;
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
  }

  th {
    border-bottom: 1px solid lightgray;
    padding-bottom: 5px;
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
