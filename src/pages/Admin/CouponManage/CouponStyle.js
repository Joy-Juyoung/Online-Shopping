import styled from 'styled-components';

export const CouponModalWrap = styled.div`
  width: 100%;
  /* height: 300px; */
  margin: 10px 0;
  /* padding-bottom: 10px 0; */
`;

export const CouponModalTop = styled.div``;

export const CouponContents = styled.div`
  display: flex;
  align-items: center;
  h2 {
    font-size: 22px;
    font-weight: 600;
    margin-right: 10px;
  }

  p {
    font-size: 13px;
  }
`;

export const CouponExDuration = styled.div`
  margin: 5px 0 10px;
  font-size: 13px;
`;

export const CouponModalMain = styled.div`
  font-size: 13px;
  /* width: 100%;
  height: 200px; */
  /* overflow: scroll; */
  /* overflow: auto; */
  margin-bottom: 20px;
`;

export const CouponModalUsers = styled.div`
  border-bottom: 2px solid #000;
  padding: 5px 0;
  /* margin: 5px 0; */
  font-size: 12px;

  strong {
    margin-right: 5px;
    font-size: 13px;
  }
`;

export const CouponModalUsersList = styled.div`
  width: 100%;
  height: 200px;
  /* overflow: auto; */
  overflow-y: scroll;
  /* margin-bottom: 20px; */

  ul {
    display: flex;
    align-items: center;
    border-bottom: 0.5px solid #000;
    padding: 5px 0;
  }
  li {
    list-style: none;
    /* padding: 0 5px; */
    &.num {
      width: 46px;
      text-align: center;
    }
  }
`;

export const CouponModalBottom = styled.div`
  display: flex;
  justify-content: flex-end;
`;

// Add New Coupon Modal
export const PopupBox = styled.div`
  margin: 0 auto;
  padding: 10px 20px;
  /* border-radius: 5px; */
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

export const BoxLi = styled.li`
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
