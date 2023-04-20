import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CartContainer = styled.div`
  width: 100%;

  margin: 0 auto;
  padding: 0 20px 120px;

  h1 {
    text-align: center;
    margin: 40px auto;
  }

  a {
    text-decoration: none;
    /* color: #0a0f18; */

    &:visited {
      text-decoration: none;
    }
  }
`;

export const CartWrapper = styled.div`
  margin-bottom: 40px;
  padding: 0 10px;
`;

export const CartBodyWrap = styled.div`
  display: flex;
  justify-content: center;
  /* justify-content: space-between; */
  /* padding-top: 0; */
  /* margin: 0 auto; */

  @media screen and (max-width: 1024px) {
    display: block;
  }
`;

export const CartLeftInfo = styled.div`
  /* min-width: 713px;
  width: 100%;
  flex: 2; */
  flex: 2;
  margin-right: 50px;

  @media screen and (max-width: 1024px) {
    display: block;
    margin: 0 auto;
    border-bottom: 1px solid #e7e9ec;
  }
`;

export const CartLeftCheckBar = styled.div``;

export const CheckBarWrap = styled.div`
  padding: 0 0 10px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e7e9ec;
`;

export const OrderCheckBox = styled.div`
  display: inline-flex;
  align-items: center;
  color: #a3a9b3;

  input {
    position: absolute;
    border: 0px;
    border-radius: 0px;
    color: rgb(10, 15, 24);
    vertical-align: middle;
    outline: none;
  }
  label {
    color: #0a0f18;
    display: inline-flex;
    align-items: center;
    position: relative;
    width: auto;
    min-height: 20px;
    padding: 0 0 0 28px;
    text-align: left;
    white-space: normal;
    cursor: pointer;
  }
`;

export const CartProductLists = styled.div`
  padding: 30px 0;
`;

export const ListsDetails = styled.div`
  display: flex;
  align-items: flex-start;
  /* margin-bottom: 15px; */
`;

export const ListsCheckBox = styled.div`
  display: inline-flex;
  align-items: center;
  color: #a3a9b3;
  padding-right: 15px;
`;

export const ListsItemImg = styled.div`
  /* margin-right: 24px;
  flex-shrink: 0; */
  /* width: 80px;
  height: 80px; */
`;

export const ListsImgLink = styled(Link)`
  /* display: block;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  color: rgb(10, 15, 24);
  text-decoration: none;
  cursor: pointer; */

  img {
    width: 80px;
    height: 80px;
    /* position: absolute;
    top: 50%;
    left: 50%;
    width: 80px;
    height: 80px;
    border: none;
    vertical-align: top;
    transform: translate(-50%, -50%); */
  }
`;

export const ListsItemDetails = styled.div`
  display: flex;
  flex: 1 0 auto;
  justify-content: space-between;
  margin-left: 20px;
  font-size: 14px;
`;

export const ItemDetailOne = styled(Link)`
  /* width: 280px;
  margin-left: 10px; */
  color: #0a0f18;
  text-decoration: none;
`;

export const DetailName = styled.div`
  display: block;
  margin-bottom: 4px;
  font-weight: 700;
  /* color: #0a0f18;
  text-decoration: none;
  cursor: pointer; */
`;

export const DetailDescription = styled.div`
  /* color: #0a0f18;
  text-decoration: none;
  cursor: pointer; */
`;

export const DetailOption = styled.div`
  margin-bottom: 8px;
  color: #626972;
`;

export const ItemDetailTwo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  flex-grow: 1;
  flex-direction: column;
`;

export const ItemDetailTwoWrap = styled.div`
  display: flex;
  align-items: center;
  width: 76px;
  height: 24px;
`;

export const ItemDecreaseBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: 1px solid #e7e9ec;
  border-radius: 2px;
  appearance: none;
  background: none;
  cursor: pointer;
`;

export const ItemIncreaseBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: 1px solid #e7e9ec;
  border-radius: 2px;
  appearance: none;
  background: none;
  cursor: pointer;
`;

export const ItemNumberInput = styled.div`
  width: 100%;
  font-weight: 700;
  text-align: center;
  border: 0px;
  border-radius: 0px;
  color: rgb(10, 15, 24);
  vertical-align: middle;
  outline: none;
`;

export const ItemDetailThree = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;

  strong {
    display: inline-block;
    font-size: 18px;
    font-weight: 700;
  }
`;

export const ListsDeleteBtn = styled.button`
  margin-left: auto;
  appearance: none;
  border: 0px;
  background: none;
  cursor: pointer;

  &:hover {
    color: #e20000;
  }
`;

export const DeleteBtn = styled.button`
  color: #626972;
  font-weight: 700;
  appearance: none;
  border: 0px;
  background: none;
  cursor: pointer;
`;

//---

export const CartRightInfo = styled.div`
  /* position: relative;
  flex: 1;
  flex-shrink: 0;
  width: 341px;
  margin-left: 80px; */
  flex: 1;
  margin: 30px 0;

  @media screen and (max-width: 1024px) {
    /* border-top: 0.5px solid lightgray; */
    /* padding-top: 20px; */
  }
`;

export const CartRightTop = styled.div`
  /* margin: 0 0 28px 0;
  position: relative; */
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
  /* align-items: center; */
`;

export const TotalTitle = styled.h2`
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  h2 {
    /* padding: 0 0 20px 0;
    font-size: 18px;
    font-weight: 700;
    margin: 0px; */
    font-weight: 600;
    font-size: 18px;
  }
`;

export const PromoInfo = styled.div`
  /* display: inline-flex;
  position: absolute;
  top: 23px;
  right: 0; */
`;

export const QuestionMark = styled.button`
  width: 24px;
  height: 24px;
  margin-left: auto;
  background: none;
  border: 0px;
  cursor: pointer;
`;

export const CouponInfo = styled.div`
  padding: 0px;
  margin: 0px;
`;

export const CouponInputWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0 8px;
  border: 1px solid #c1c4c9;
  border-radius: 6px;
  box-sizing: border-box;
`;

export const CouponInput = styled.input`
  width: 100%;
  font-size: 16px;
  border: 0px;
  border-radius: 0px;
  vertical-align: middle;
  outline: none;
`;

export const CouponBtn = styled.button`
  display: inline-block;
  padding: 5px 12px 6px;
  margin-left: 8px;
  border-radius: 4px;
  background-color: #000000;
  color: #ffffff;
  appearance: none;
  border: 0px;
  /* background: none; */
  cursor: pointer;
  white-space: nowrap;
`;

export const CartRightMidOne = styled.div``;

export const CartSummary = styled.h3`
  padding: 28px 0 20px;
  font-size: 18px;
  font-weight: 700;
`;

export const SummaryWrap = styled.span`
  margin-left: 8px;
  color: #7a808b;
`;

export const CartSummaryInfo = styled.div`
  display: block;
`;

export const ItemPriceInfo = styled.dl`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  /* color: #bcbaba; */
`;

export const ItemShippingFee = styled.dl`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const ItemTotalPrice = styled.dl`
  font-size: 16px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const ExtraInfo = styled.ul`
  list-style: none;

  li {
    position: relative;
    padding-left: 9px;
    font-size: 12px;
    color: #626972;
  }
`;

export const CartRightMidTwo = styled.div`
  padding: 0 20px;
  background-color: #edf6ff;
  margin: 20px 0 -12px;
`;

export const FreeShippingInfo = styled.p`
  padding: 7px 0;
  font-size: 13px;
  line-height: 18px;
  color: #136dec;
  text-align: center;

  span,
  strong {
    font-weight: bold;
  }
`;

export const CartRightBottom = styled.div`
  position: inherit;
  width: 100%;
  padding: 0;
  border: none;
  margin-top: 40px;
  bottom: 0;
  left: 0;
`;

export const CheckOutBtn = styled.div`
  background-color: #0a0f18;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 700;
  appearance: none;
  border: 0px;
  cursor: pointer;
`;
