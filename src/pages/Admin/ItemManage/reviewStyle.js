import styled from 'styled-components';

// export const AdListTop = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin-top: 40px;
// `;

export const AdReviewWrap = styled.div`
  display: flex;
  align-items: center;

  h2 {
    font-size: 18px;
    padding: 10px;
  }
`;
export const AdReviewHeader = styled.div`
  display: flex;
  align-items: center;

  input {
    display: flex;
    align-items: center;
    padding: 5px 15px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    background: #f3f3eb;
  }
`;

export const AdReviewLeftSide = styled.div`
  flex: 1;
  margin: 0 20px;
`;

export const AdReviewItemList = styled.div`
  /* border: 1px solid #000; */
  border-radius: 10px;
  margin-top: 10px;
  height: 58vh;
  padding: 15px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  /* background: #fff3d3; */
`;

export const AdReviewListWrap = styled.div``;

export const AdReviewItemInfo = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  /* width: 300px; */
  margin: 0 auto;
  font-weight: 600;
  /* border: 1px solid #000; */
  border-radius: 10px;
  background: #fff;
  padding: 10px;

  margin-bottom: 10px;
  &.imgSpan {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-right: 15px;
  }

  &.nameSpan {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  img {
    display: flex;
    align-items: center;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    object-fit: cover;
    margin-right: 15px;
  }
`;

export const AdReviewTable = styled.table`
  width: 100%;
  text-align: left;
`;

export const AdReviewThead = styled.thead``;

export const AdReviewHeadTr = styled.tr`
  width: 100%;
`;

export const AdReviewTh = styled.th`
  width: 20px;
  font-size: 13px;
  padding: 3px 5px;
`;

export const AdReviewTbody = styled.tbody`
  tr:nth-child(odd) {
    background-color: #efeae1;
  }
  tr:nth-child(even) {
    background-color: #fff;
  }
`;

export const AdReviewBodyTr = styled.tr`
  width: 100%;
  cursor: pointer;
`;

export const AdReviewTd = styled.td`
  width: 20px;
  font-size: 14px;
  padding: 3px 5px;
`;

export const AdReviewMidSide = styled.div``;

export const AdReviewRightSide = styled.div`
  flex: 1.5;
  margin: 0 20px;
`;

export const AdReviewEmpty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin: 0 auto; */
  height: 50vh;
  color: #bfbbb5;
  font-size: 18px;

  svg {
    font-size: 80px;
  }
`;
