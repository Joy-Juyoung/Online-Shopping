import React from 'react'
import {  CartBodyWrap, 
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
          DetailDescrition, 
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
          ItemDetailTwoWrap
        } from './CartElements';

import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CloseIcon from '@mui/icons-material/Close';
import SNEAKERS from '../../asset/SNEAKERS.png';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

function CartPage() {
  return (
    <CartContainer>
      <CartWrapper>
        <h2>SHOPPING BAG</h2>
        <CartBodyWrap>
          <CartLeftInfo>
            <CartLeftCheckBar>
              <CheckBarWrap>
                <OrderCheckBox>
                  <input 
                    type="checkbox"
                  />
                  <label>All</label>
                </OrderCheckBox>
                <DeleteBtn>Delete</DeleteBtn>
              </CheckBarWrap>
            </CartLeftCheckBar>
            <CartProductLists>
              <ListsDetails>
                <ListsCheckBox>
                  <input 
                      type="checkbox"
                    />
                  {/* <label/> */}
                </ListsCheckBox>
                <ListsItemImg>
                  <ListsImgLink to={``}>
                    <img src={SNEAKERS}></img>
                  </ListsImgLink>
                </ListsItemImg>
                <ListsItemDetails>
                  <ItemDetailOne>
                    <DetailName to={``}>Sneakers</DetailName>
                    <DetailDescrition to={``}>Red Sneakers</DetailDescrition>
                    <DetailOption>
                      <span>1</span>
                    </DetailOption>
                  </ItemDetailOne>
                  <ItemDetailTwo>
                    <ItemDetailTwoWrap>

                      <ItemDecreaseBtn>
                        <RemoveIcon fontSize='small' color='action'/>
                      </ItemDecreaseBtn>
                      <ItemNumberInput value={1}/>
                      <ItemIncreaseBtn>
                        <AddIcon fontSize='small' color='action' />
                      </ItemIncreaseBtn>
                    </ItemDetailTwoWrap>
                  </ItemDetailTwo>
                  <ItemDetailThree>
                    <strong>$139</strong>
                  </ItemDetailThree>
                </ListsItemDetails>
                <ListsDeleteBtn>
                  <CloseIcon fontSize='small'/>
                </ListsDeleteBtn>
              </ListsDetails>
            </CartProductLists>
          </CartLeftInfo>
          <CartRightInfo>
            
            <CartRightTop>
              <h3>Promo Code</h3>
              <PromoInfo>
                <QuestionMark>
                  <HelpOutlineIcon fontSize='small' color='action'/>
                </QuestionMark>
              </PromoInfo>
              <CouponInfo>
                <CouponInputWrap>
                  <CouponInput placeholder='Please enter your promo code'/>
                  <CouponBtn>Apply</CouponBtn>
                </CouponInputWrap>
              </CouponInfo>
            </CartRightTop>

            <CartRightMidOne>
              <CartSummary>
                Order Summary
                <SummaryWrap>
                  <span>1</span>
                  <span>Item</span>
                </SummaryWrap>
              </CartSummary>
              <CartSummaryInfo>
                <ItemPriceInfo>
                  Price
                  <span>$139</span>
                </ItemPriceInfo>
                <ItemShippingFee>
                  Shipping fee
                  <span>$15</span>
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
                  Add $
                  <span>61 </span> 
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
  )
}

export default CartPage;