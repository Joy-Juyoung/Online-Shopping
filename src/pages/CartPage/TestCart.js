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

const TestCart = ({ checkedList, setCheckedList }) => {
  const [loading, setLoading] = useState(false);
  const [carts, setCarts] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [cartArr, setCartArr] = useState([]);

  const [checkedItem, setCheckedItem] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  // const [checkedList, setCheckedList] = useState([]);

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
    getAllCart();
  }, [cartArr]);

  useEffect(() => {
    if (selectedItem) {
      setCheckedList(
        carts?.filter((item) => selectedItem?.includes(item?.pk.toString()))
      );
    }

    localStorage.setItem('getChecked', JSON.stringify(checkedList));
  }, [selectedItem, carts]);
  // console.log('checkedList', checkedList);

  useEffect(() => {
    localStorage.setItem('getChecked', JSON.stringify(checkedList));
  }, [selectedItem, carts, checkedList]);

  const getAllCart = async () => {
    const cartList = await axios.get(CARTS_URL, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    // console.log('cartList', cartList.data);
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
    if (checkedList?.length !== 0) {
      if (
        window.confirm(
          'Are you sure you want to delete checked items in your cart?'
        )
      ) {
        const deleteItem = checkedList?.map((c) => {
          axios.delete(`/carts/${c.pk}`, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          });
        });
        setCarts(deleteItem);
        window.location.reload();
      }
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

  const onChangeAll = () => {};

  const PriceForBill = checkedList.reduce((total, item) => {
    return total + item?.total_price;
  }, 0);

  const ShippingFee = PriceForBill >= 200 ? 0 : 15;

  const Taxes = Math.round(PriceForBill * 0.05);
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
                            setCartArr={setCartArr}
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
                    <span>${PriceForBill?.toLocaleString()}</span>
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
                    <span>${Taxes?.toLocaleString()}</span>
                  </ItemShippingFee>
                  <ItemTotalPrice>
                    Total
                    {PriceForBill === 0 ? (
                      <span>$0</span>
                    ) : (
                      <span>${TotalPriceTag?.toLocaleString()}</span>
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
                {checkedList?.length === 0 ? (
                  <>
                    {isDisabled && (
                      <p style={{ color: 'red', marginBottom: '20px' }}>
                        * Please Select items to checkout
                      </p>
                    )}
                    <CheckOutBtn disable onClick={() => setIsDisabled(true)}>
                      PROCEED TO CHECKOUT
                    </CheckOutBtn>
                  </>
                ) : (
                  <Link to={`/carts/payment`}>
                    <CheckOutBtn onClick={() => setIsDisabled(false)}>
                      PROCEED TO CHECKOUT
                    </CheckOutBtn>
                  </Link>
                )}
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
