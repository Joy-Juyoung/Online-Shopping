import styled from 'styled-components';

export const CouponModalWrap = styled.div`
  width: 100%;
  height: 300px;
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
  button {
    width: 100px !important;
  }
`;
