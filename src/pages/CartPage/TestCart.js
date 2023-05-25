import React, { useEffect, useLayoutEffect, useState } from 'react';
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
  TotalTitle,
} from './CartElements';

import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CloseIcon from '@mui/icons-material/Close';
// import RemoveIcon from '@mui/icons-material/Remove';
// import AddIcon from '@mui/icons-material/Add';
import axios from '../../api/axios';
import Loading from '../../components/Loading';
import { Link } from 'react-router-dom';
import { ButtonLarge } from '../../components/ButtonElements';
import CountButton from './CountButton';

const CARTS_URL = '/carts';

const TestCart = () => {
  const [loading, setLoading] = useState(false);
  const [carts, setCarts] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [checkList, setCheckList] = useState([]);
  const [IdList, setIdList] = useState([]);
  const [checkNewList, setCheckNewList] = useState([]);

  const [allDelList, setAllDelList] = useState([]);

  const [checkedItem, setCheckedItem] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const [checkedList, setCheckedList] = useState([]);

  const handleCheckedItems = (e) => {
    setCheckedItem({ ...checkedItem, [e.target.value]: e.target.checked });
  };
  // console.log('checkedItem', checkedItem);

  useEffect(() => {
    setSelectedItem(
      Object.entries(checkedItem)
        .filter(([key, value]) => value)
        .map((added, index) => added[0])
    );
  }, [checkedItem]);
  // console.log('selectedItem', selectedItem);

  useEffect(() => {
    if (selectedItem) {
      setCheckedList(
        carts?.filter((item) => selectedItem?.includes(item?.pk.toString()))
      );
    }
  }, [selectedItem, carts]);
  // console.log('setCheckedList', setCheckedList);

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
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  // console.log('carts', carts);

  const handleAllDeleteCart = async () => {
    if (
      window.confirm('Are you sure you want to delete this item in your cart?')
    ) {
      // IdList.map(async (i) => {
      // console.log('i', i);
      // setAllDelList([...allDelList, i?.pk]);
      // await axios.delete(`/carts/${IdList[0]}`, {
      //   headers: { 'Content-Type': 'application/json' },
      //   withCredentials: true,
      // });
      // setCarts([]);
      // });
      // getAllCart([]);
      // window.location.reload();
    }
  };

  const handleDeleteCart = async (pk) => {
    // console.log('pk', pk);

    if (
      window.confirm('Are you sure you want to delete this item in your cart?')
    ) {
      await axios.delete(`/carts/${pk}`, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });
      window.location.reload();
    }
  };

  const onChangeAll = () => {
    // if (isChecked === false) {
    //   setCheckList(IdList);
    //   setIsChecked(true);
    //   IdList.map(async (i) => {
    //     console.log('i', i);
    //     // setCheckList([...checkList, i]);
    //     const check = await axios.get(`/carts/${i}`, {
    //       headers: { 'Content-Type': 'application/json' },
    //       withCredentials: true,
    //     });
    //     setCheckNewList([...checkNewList, check.data]);
    //     console.log('checkNewList', checkNewList);
    //     // console.log("check", check.data);
    //   });
    // } else {
    //   setCheckList([]);
    //   setIsChecked(false);
    // }
  };

  const PriceForBill = checkedList.reduce((total, item) => {
    return total + item?.total_price;
  }, 0);

  const ShippingFee = PriceForBill >= 200 ? 0 : 15;

  const Taxes = PriceForBill * 0.05;
  const Discounts = 0;
  const TotalPriceTag = PriceForBill + ShippingFee + Taxes + Discounts;

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );

  return (
    <CartContainer>
      <h1>SHOPPING BAG</h1>
      <CartWrapper>
        {carts.length === 0 ? (
          <CartBodyWrap
            style={{
              display: 'block',
              textAlign: 'center',
            }}
          >
            <p>
              Your shopping bag is empty. Would you like to add items to your
              shopping bag?
            </p>
            <Link to='/products/all'>
              <ButtonLarge style={{ width: '30%', marginTop: '40px' }}>
                Continue shopping
              </ButtonLarge>
            </Link>
          </CartBodyWrap>
        ) : (
          <CartBodyWrap>
            <CartLeftInfo>
              <CartLeftCheckBar>
                <CheckBarWrap>
                  <OrderCheckBox>
                    <input
                      type='checkbox'
                      // checked={checkList.length === IdList.length}
                      // onChange={() => onChangeAll()}
                    />
                    <label>All</label>
                  </OrderCheckBox>
                  <DeleteBtn
                    onClick={(e) => {
                      // e.preventDefault();
                      handleAllDeleteCart();
                    }}
                  >
                    Delete
                  </DeleteBtn>
                </CheckBarWrap>
              </CartLeftCheckBar>
              <CartProductLists>
                {carts?.map((cart) => {
                  return (
                    <ListsDetails key={cart?.pk}>
                      <ListsCheckBox>
                        <input
                          type='checkbox'
                          // onClick={(e) => onChangeEach(e, cart?.pk)}
                          // checked={checkList.includes(cart?.pk)}
                          id='cartPk'
                          value={cart?.pk}
                          onChange={(e) => handleCheckedItems(e)}
                          checked={checkedItem[cart?.pk] || ''}
                        />
                      </ListsCheckBox>
                      <ListsItemImg>
                        <ListsImgLink to={`/products/${cart?.product?.pk}`}>
                          <img src={cart?.product?.photos[0].picture} alt='' />
                        </ListsImgLink>
                      </ListsItemImg>
                      <ListsItemDetails>
                        <ItemDetailOne to={`/products/${cart?.product?.pk}`}>
                          <DetailName>{cart?.product?.name}</DetailName>
                          <DetailDescription>
                            {cart?.product?.detail}
                          </DetailDescription>
                          <DetailOption>
                            {cart?.product_option === null ? (
                              <>Free</>
                            ) : (
                              <>{cart?.product_option?.name}</>
                            )}
                          </DetailOption>
                        </ItemDetailOne>
                        <ItemDetailTwo>
                          <CountButton
                            cart={cart}
                            getAllCart={getAllCart}
                            carts={carts}
                          />
                        </ItemDetailTwo>
                        <ItemDetailThree>
                          <strong>
                            ${cart?.total_price?.toLocaleString()}
                          </strong>
                        </ItemDetailThree>
                      </ListsItemDetails>
                      <ListsDeleteBtn>
                        <CloseIcon
                          fontSize='small'
                          onClick={(e) => {
                            // e.preventDefault();
                            handleDeleteCart(cart?.pk);
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
                <CartSummary>
                  Order Summary
                  <SummaryWrap>
                    <span>{carts?.length}</span>
                    <span>Item</span>
                  </SummaryWrap>
                </CartSummary>
                <CartSummaryInfo>
                  <ItemPriceInfo>
                    Price
                    <span>${PriceForBill?.toFixed(2)}</span>
                  </ItemPriceInfo>
                  <ItemShippingFee>
                    Shipping fee
                    {PriceForBill === 0 ? (
                      <span>$0</span>
                    ) : (
                      <span>${ShippingFee?.toLocaleString()}</span>
                    )}
                  </ItemShippingFee>
                  <ItemShippingFee>
                    Duties amd Taxes
                    <span>${Taxes?.toFixed(2)}</span>
                  </ItemShippingFee>
                  <ItemTotalPrice>
                    Total
                    {PriceForBill === 0 ? (
                      <span>$0</span>
                    ) : (
                      <span>${TotalPriceTag?.toFixed(2)}</span>
                    )}
                  </ItemTotalPrice>
                  <ExtraInfo>
                    <li>
                      * Additional duties and taxes may apply at checkout.
                    </li>
                    <li>
                      * Apply coupon to get additional discount at checkout.
                    </li>
                  </ExtraInfo>
                </CartSummaryInfo>
              </CartRightTop>

              <CartRightBottom>
                <Link to={`/carts/payment`}>
                  <CheckOutBtn>PROCEED TO CHECKOUT</CheckOutBtn>
                </Link>
              </CartRightBottom>
            </CartRightInfo>
          </CartBodyWrap>
        )}
      </CartWrapper>
    </CartContainer>
  );
};

export default TestCart;
// export default React.memo(TestCart);
