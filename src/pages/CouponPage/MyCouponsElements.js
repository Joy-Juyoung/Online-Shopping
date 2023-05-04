import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ReviewItemInfo = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 0.5px solid lightgray;
  padding: 20px 0;

  img {
    width: 80px;
    height: 80px;
  }
`;

export const ReviewListEmpty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin: 100px 0; */
  height: 20vh;
  font-weight: 400;

  /* svg {
    margin: 20px 0;
    color: gray;
    font-size: 100px;
    opacity: 0.8;
  } */
`;

export const ReviewItemDetails = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
  font-size: 14px;
`;

export const ReviewRate = styled.div`
  border-bottom: 0.5px solid lightgray;
  padding: 20px 0;
`;

export const ReviewText = styled.div`
  border-bottom: 0.5px solid lightgray;
  padding: 20px 0;

  textarea {
    width: 100%;
    height: 100px;
    padding: 10px;
  }
`;

export const ReviewBtn = styled.div`
  /* border-bottom: 0.5px solid lightgray; */
  padding: 20px 0;
`;

export const CouponListWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const CouponFrame = styled.div`
  /* border: 3px dashed #e98f18; */
  border: 3px dashed #000;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  padding: 10px;
  position: relative;
`;

export const Circle = styled.div`
  background: #fff;
  border-radius: 50%;
  width: 25px;
  height: 25px;

  position: absolute;
  top: 40%;
  left: 0;
`;

export const CircleLast = styled.div`
  background: #fff;
  border-radius: 50%;
  width: 25px;
  height: 25px;

  position: absolute;
  top: 40%;
  right: 0;
`;

export const CouponInside = styled.div`
  color: #fff;
  width: 100%;
  height: 100%;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  /* align-items: center; */
`;

export const CouponHeader = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #000;

  span {
    font-weight: 600;
    rotate: 270deg;
    margin-left: 10px;
  }
`;

export const CouponInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  padding: 10px;
  margin-left: 15px;
`;

export const CouponRate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

export const CouponH = styled.div`
  font-size: 88px;
  margin-left: 17px;
`;

export const CouponP = styled.div`
  font-size: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .one {
    font-size: 42px;
    margin-bottom: -15px;
  }
`;

export const CouponExpired = styled.div`
  font-size: 12px;
`;

export const ViewDetails = styled.div`
  padding: 7px 10px;

  svg {
    cursor: pointer;
  }
`;

export const CouponBackFrame = styled.div`
  border: 3px dashed #000;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  padding: 30px 15px;
  margin: 0 auto;
  position: relative;

  animation: rotateY 300ms ease-in-out forwards;
  transform-origin: top center;

  @keyframes rotateY {
    0% {
      transform: rotateY(90deg);
    }
    80% {
      transform: rotateY(-10deg);
    }
    100% {
      transform: rotateY(0);
    }
  }
`;

export const CouponBackInside = styled.div`
  color: #fff;
  background: #000;
  /* border: 0 */
  width: 100%;
  height: 100%;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  /* align-items: center; */
`;

export const CouponBackSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CouponBackInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
export const CouponBackP = styled.div`
  &.name {
    font-size: 32px;
    font-weight: 600;
  }
  &.description {
    font-size: 18px;
  }
  &.expire {
    font-size: 11px;
    margin: 15px 0 0;
  }
`;
