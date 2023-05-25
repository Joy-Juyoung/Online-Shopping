import styled from 'styled-components';

export const PopupBox = styled.div`
  margin: 0 auto;
  padding: 10px 20px;
  /* border-radius: 5px; */

  /* background: #fff;
  width: 400px !important; */
`;

export const Box = styled.div`
  margin: 0 auto;
`;

export const BoxH2 = styled.h2`
  margin: 20px 0;
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
  /* justify-content: space-between; */

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
  /* padding: 0 10px; */
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

// ---NExt

export const BoxCategory = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: flex-start; */
  margin: 20px 0;
  /* padding: 0; */
`;

export const BoxTable = styled.table`
  margin: 10px 0;
  font-size: 14px;
  /* text-align: center; */
  border: 1px solid #000;
  border-radius: 10px;
  padding: 5px;

  /* height: 125px;
  overflow-y: scroll; */
`;

export const BoxTr = styled.tr`
  /* padding: 0; */

  th {
    /* padding-bottom: 5px; */
    text-align: left;
    padding-left: 10px;
    inline-size: 20px;
    /* writing-mode: horizontal-tb; */
    /* width: 20px; */
  }

  td {
    /* padding-bottom: 5px; */
    /* padding: 3px 0; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    &:hover {
      background: #000;
      color: #fff;
      border-radius: 10px;
      cursor: pointer;
    }
  }
`;
