import React, { useEffect, useState } from 'react';
import {
  CartBodyWrap,
  CartContainer,
  CartLeftCheckBar,
  CartLeftInfo,
  CartProductLists,
  CartRightBottom,
  CartRightInfo,
  CartRightMidOne,
  CartRightMidTwo,
  CartRightTop,
  CartSummary,
  CartSummaryInfo,
  CartWrapper,
  CheckBarWrap,
  CheckBox,
  CheckOutBtn,
  CouponBtn,
  CouponInfo,
  CouponInput,
  CouponInputWrap,
  DeleteBtn,
  DetailDescription,
  DetailName,
  DetailOption,
  ExtraInfo,
  FreeShippingInfo,
  ItemIncreaseBtn,
  ItemDecreaseBtn,
  ItemDetailOne,
  ItemDetailThree,
  ItemDetailTwo,
  ItemNumberInput,
  ItemPriceInfo,
  ItemShippingFee,
  ItemTotalPrice,
  ListsCheckBox,
  ListsDeleteBtn,
  ListsDetails,
  ListsImgLink,
  ListsItemDetails,
  ListsItemImg,
  OrderCheckBox,
  PromoInfo,
  QuestionMark,
  SummaryWrap,
  ItemDetailTwoWrap,
} from './CartElements';

import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CloseIcon from '@mui/icons-material/Close';
import SNEAKERS from '../../asset/SNEAKERS.png';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import axios from '../../api/axios';
import { useParams } from 'react-router';
import Loading from '../../components/Loading';

const CARTS_URL = '/carts';

const TestCart = () => {
  const [loading, setLoading] = useState(false);
  const [carts, setCarts] = useState([]);
  const ShippingFee = 15;
  const getAllCart = async () => {
    const cartList = await axios.get(CARTS_URL, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });

    console.log('cartList', cartList.data);
    setCarts(cartList?.data);
    setLoading(false);
  };
  useEffect(() => {
    setLoading(true);
    getAllCart();
  }, []);
  console.log('carts', carts);

  const handleDeleteCart = async (pk) => {
    alert('Are you sure you want to remove the product?');
    // console.log('pk', pk);
    var tempCart = carts;
    tempCart.forEach((c) => {
      if (c.pk === pk) {
        // console.log('c.pk', c.pk);
        axios.delete(`/carts/${pk}`, {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        });
      }
    });
    window.location.reload();
  };

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );

  return (
    <CartContainer>
      <CartWrapper>
        <h2>SHOPPING BAG</h2>
        <CartBodyWrap>
          <CartLeftInfo>
            <CartLeftCheckBar>
              <CheckBarWrap>
                <OrderCheckBox>
                  <input type='checkbox' />
                  <label>All</label>
                </OrderCheckBox>
                <DeleteBtn>Delete</DeleteBtn>
              </CheckBarWrap>
            </CartLeftCheckBar>
            <CartProductLists>
              {carts?.map((cart) => {
                return (
                  <ListsDetails key={cart.pk}>
                    <ListsCheckBox>
                      <input type='checkbox' />
                      {/* <label/> */}
                    </ListsCheckBox>
                    <ListsItemImg>
                      <ListsImgLink to={``}>
                        <img src={cart.product.photos[0].picture} alt='' />
                      </ListsImgLink>
                    </ListsItemImg>
                    <ListsItemDetails>
                      <ItemDetailOne>
                        <DetailName to={``}>{cart.product.name}</DetailName>
                        <DetailDescription to={``}>
                          {cart.product.detail}
                        </DetailDescription>
                        <DetailOption>
                          <span>{cart.product_option?.name}</span>
                        </DetailOption>
                      </ItemDetailOne>
                      <ItemDetailTwo>
                        <ItemDetailTwoWrap>
                          {/* <ItemDecreaseBtn onClick={() => {itemDecrease(cart.pk)}}>
                            <RemoveIcon fontSize='small' color='action'/>
                          </ItemDecreaseBtn>
                          <ItemNumberInput>{cart.number_of_product}</ItemNumberInput>
                          <ItemIncreaseBtn onClick={() => {itemIncrease(cart.pk)}}>
                            <AddIcon fontSize='small' color='action' />
                          </ItemIncreaseBtn> */}
                          <ItemDecreaseBtn>
                            <RemoveIcon fontSize='small' color='action' />
                          </ItemDecreaseBtn>
                          <ItemNumberInput>
                            {cart.number_of_product}
                          </ItemNumberInput>
                          <ItemIncreaseBtn>
                            <AddIcon fontSize='small' color='action' />
                          </ItemIncreaseBtn>
                        </ItemDetailTwoWrap>
                      </ItemDetailTwo>
                      <ItemDetailThree>
                        <strong>${cart.total_price}</strong>
                      </ItemDetailThree>
                    </ListsItemDetails>
                    <ListsDeleteBtn>
                      <CloseIcon
                        fontSize='small'
                        onClick={(e) => {
                          e.preventDefault();
                          handleDeleteCart(cart.pk);
                        }}
                      />
                    </ListsDeleteBtn>
                  </ListsDetails>
                );
              })}
            </CartProductLists>
          </CartLeftInfo>

          <CartRightInfo>
            <CartRightTop>
              <h3>Promo Code</h3>
              <PromoInfo>
                <QuestionMark>
                  <HelpOutlineIcon fontSize='small' color='action' />
                </QuestionMark>
              </PromoInfo>
              <CouponInfo>
                <CouponInputWrap>
                  <CouponInput placeholder='Please enter your promo code' />
                  <CouponBtn>Apply</CouponBtn>
                </CouponInputWrap>
              </CouponInfo>
            </CartRightTop>

            <CartRightMidOne>
              <CartSummary>
                Order Summary
                <SummaryWrap>
                  <span>{carts.length}</span>
                  <span>Item</span>
                </SummaryWrap>
              </CartSummary>
              <CartSummaryInfo>
                <ItemPriceInfo>
                  Price
                  <span>${139}</span>
                </ItemPriceInfo>
                <ItemShippingFee>
                  Shipping fee
                  <span>${ShippingFee}</span>
                </ItemShippingFee>
                <ItemTotalPrice>
                  Total
                  <span>$154</span>
                </ItemTotalPrice>
                <ExtraInfo>
                  <li>* Additional duties and taxes may apply at checkout.</li>
                </ExtraInfo>
              </CartSummaryInfo>
            </CartRightMidOne>

            <CartRightMidTwo>
              <FreeShippingInfo>
                Add $<span>61 </span>
                more to enjoy
                <strong> FREE SHIPPING</strong>
              </FreeShippingInfo>
            </CartRightMidTwo>

            <CartRightBottom>
              <CheckOutBtn>PROCEED TO CHECKOUT</CheckOutBtn>
            </CartRightBottom>
          </CartRightInfo>
        </CartBodyWrap>
      </CartWrapper>
    </CartContainer>
  );
};

export default TestCart;
