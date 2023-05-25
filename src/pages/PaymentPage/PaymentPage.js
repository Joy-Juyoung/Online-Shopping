import React, { useEffect, useState } from 'react';
import {
  DetailDescription,
  DetailName,
  DetailOption,
  ExtraInfo,
  ItemTotalPrice,
  ListsDetails,
  ListsImgLink,
  ListsItemDetails,
  PaymentPsersonalInfo,
  PaymentInfoDetails,
  DetailPrice,
  TotalTitle,
  ItemSummary,
  PaymentContainer,
  PaymentWrapper,
  PaymentBodyWrap,
  PaymentLeftInfo,
  PaymentListTitle,
  PaymentListWrap,
  PaymentRightInfo,
  PaymentRightTop,
  PaymentSummaryInfo,
  PaymentCheckout,
  PaymentSuccessMsg,
} from './PaymentElements';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import AddIcon from '@mui/icons-material/Add';
import axios from '../../api/axios';
import Loading from '../../components/Loading';
import {
  ButtonLarge,
  ButtonSmall,
  ButtonUtils,
} from '../../components/ButtonElements';
import PaypalIcon from '../../asset/paypal.svg';
import MastercardIcon from '../../asset/mastercard.svg';
import VisaIcon from '../../asset/visa.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Modal from '../../components/Modal';
import AddBalance from '../../components/AddBalance';
import { useRef } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SuccessPayment from './SuccessPayment';
import AddCoupon from './AddCoupon';

const CARTS_URL = '/carts';

const PaymentPage = ({ meData }, props) => {
  const balanceRef = useRef();
  const addressRef = useRef();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [carts, setCarts] = useState([]);
  const [payList, setPayList] = useState([]);
  const [modalShown, toggleModal] = useState(false);
  const [totalPrice, setTotalPrice] = useState();
  const [disableAddress, setDisableAddress] = useState(false);
  const [disableBalance, setDisableBalance] = useState(false);
  const [success, setSuccess] = useState(false);
  const [couponModalShown, toggleCouponModal] = useState(false);

  const [getCp, setGetCp] = useState(
    JSON.parse(localStorage.getItem('getCoupon'))
  );
  // console.log('getCp', getCp[0]);

  const PriceForBill = carts.reduce((total, item) => {
    return total + item?.total_price;
  }, 0);
  const ShippingFee = PriceForBill >= 200 ? 0 : 15;
  const Taxes = PriceForBill * 0.05;
  const Discounts =
    PriceForBill * (getCp[0] ? getCp[0]?.discount_rate * 0.01 : 0);
  const TotalPriceTag = PriceForBill - Discounts + ShippingFee + Taxes;

  // const location = useLocation();
  // const propsData = location.state;
  // console.log('test2', propsData);

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
    setTotalPrice(TotalPriceTag);
  }, [meData]);
  // console.log('carts', carts);

  // console?.log('TotalPriceTag', Math.round(TotalPriceTag));

  const payOrder = async () => {
    if (window.confirm('Are you sure you want to pay?')) {
      carts.map((cItems) => {
        if (cItems.product_option === null) {
          payList.push({
            product_id: cItems.product.pk,
            number_of_product: cItems.number_of_product,
            product_option: null,
          });
        } else {
          payList.push({
            product_id: cItems.product.pk,
            number_of_product: cItems.number_of_product,
            product_option: cItems.product_option.pk,
          });
        }
      });
      console.log('payList', payList);

      try {
        const sendOrder = axios.post(
          '/orders/',
          {
            productsList: payList,
            address: meData?.address,
            final_total_price: Math.round(TotalPriceTag),
          },
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          }
        );
        setSuccess(true);
        console.log('sendOrder', sendOrder);
        handleDeleteCart();
        setPayList([]);
      } catch (err) {
        if (err?.response?.status === 400) {
          setLoading(false);
          console.log('Error page or empty page');
        } else {
          console.log('Error page or empty page');
        }
      }
    } else {
      // window.location.reload();
    }
  };

  const handleDeleteCart = () => {
    const deleteItem = carts.map((c) => {
      axios.delete(`/carts/${c.pk}`, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });
    });
    setCarts(deleteItem);
    getAllCart([]);
  };

  const handlePayDisabled = () => {
    if (meData?.address === null || meData?.phone_number === null) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      setDisableAddress(!disableAddress);
    } else if (meData?.balance < TotalPriceTag) {
      balanceRef.current.scrollIntoView({ behavior: 'smooth' });
      setDisableBalance(!disableBalance);
    }
  };

  // const handleCoupon = () => {};

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );

  return (
    <PaymentContainer>
      {success ? (
        <SuccessPayment />
      ) : (
        <>
          <h1>ORDER</h1>
          <PaymentWrapper>
            <PaymentBodyWrap>
              <PaymentLeftInfo>
                <PaymentPsersonalInfo>
                  <PaymentListTitle>Shipping address</PaymentListTitle>
                  <PaymentInfoDetails ref={addressRef}>
                    <h3>{meData?.name}</h3>
                    {disableAddress && (
                      <p style={{ color: 'red' }}>
                        * Your address or phone number is required. Please add
                        information through the button below.
                      </p>
                    )}
                    <p>{meData?.phone_number}</p>
                    <p>{meData?.address}</p>
                  </PaymentInfoDetails>
                  <Link to='/userAccount'>
                    <ButtonSmall>Edit my shipping address</ButtonSmall>
                  </Link>
                </PaymentPsersonalInfo>
                <PaymentListWrap>
                  <PaymentListTitle>
                    Product information <span>{carts?.length} Items</span>
                  </PaymentListTitle>
                  {carts?.map((cart) => {
                    return (
                      <ListsDetails key={cart.pk}>
                        <ListsImgLink to={`/products/${cart?.product?.pk}`}>
                          <img src={cart.product.photos[0].picture} alt='' />
                        </ListsImgLink>

                        <ListsItemDetails to={`/products/${cart?.product?.pk}`}>
                          <DetailName>
                            {cart?.product.name.toUpperCase()}
                          </DetailName>
                          <DetailDescription>
                            {cart?.product.detail}
                          </DetailDescription>
                          <DetailOption>
                            {/* <span>{cart.product_option?.name}</span> */}
                            {cart?.product_option === null ? (
                              <>Free, Qty {cart?.number_of_product}</>
                            ) : (
                              <>
                                {cart?.product_option?.name}, Qty
                                {cart?.number_of_product}
                              </>
                            )}
                          </DetailOption>
                          <DetailPrice>${cart.total_price}</DetailPrice>
                        </ListsItemDetails>
                      </ListsDetails>
                    );
                  })}
                </PaymentListWrap>
                <PaymentPsersonalInfo>
                  <PaymentListTitle>Your Balance</PaymentListTitle>
                  <PaymentInfoDetails>
                    <h3 ref={balanceRef}>
                      Your Current Balances: ${meData?.balance.toFixed(2)}
                    </h3>
                    {disableBalance && (
                      <p style={{ color: 'red' }}>
                        * Your balance is not enough to buy items. Please add
                        the balance through the button below.
                      </p>
                    )}
                  </PaymentInfoDetails>
                  <ButtonSmall
                    onClick={() => {
                      toggleModal(!modalShown);
                    }}
                  >
                    <AddIcon />
                    <span>Add your balance</span>
                  </ButtonSmall>
                  <Modal
                    shown={modalShown}
                    close={() => {
                      toggleModal(false);
                    }}
                  >
                    <AddBalance meData={meData} />
                  </Modal>
                </PaymentPsersonalInfo>
              </PaymentLeftInfo>

              <PaymentRightInfo>
                <PaymentRightTop>
                  <TotalTitle>Summary</TotalTitle>
                </PaymentRightTop>

                <PaymentSummaryInfo>
                  <ItemSummary>
                    Price
                    <span>${PriceForBill.toFixed(2)}</span>
                  </ItemSummary>
                  <ItemSummary>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      Coupon
                      <ButtonUtils
                        onClick={() => {
                          toggleCouponModal(!couponModalShown);
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          padding: '3px 5px',
                          marginLeft: '3px',
                          cursor: 'pointer',
                          border: 'none',
                        }}
                      >
                        <AddIcon fontSize='13px' /> Add Coupon
                      </ButtonUtils>
                    </div>
                    {getCp[0] ? (
                      <span>{getCp[0]?.discount_rate}%OFF</span>
                    ) : (
                      <span>0%OFF</span>
                    )}
                  </ItemSummary>
                  <Modal
                    shown={couponModalShown}
                    close={() => {
                      toggleCouponModal(false);
                    }}
                  >
                    <AddCoupon
                      meData={meData}
                      onClose={() => toggleCouponModal(false)}
                    />
                  </Modal>
                  <ItemSummary>
                    Discounts
                    <span>${Discounts.toFixed(2)}</span>
                  </ItemSummary>
                  <ItemSummary>
                    Shipping fee
                    <span>${ShippingFee?.toLocaleString()}</span>
                  </ItemSummary>
                  <ItemSummary>
                    Duties and Taxes
                    <span>${Taxes.toFixed(2)}</span>
                  </ItemSummary>

                  <ItemTotalPrice>
                    Total
                    <span>${TotalPriceTag.toFixed(2)}</span>
                  </ItemTotalPrice>
                  <ExtraInfo>
                    <li>
                      * No additional duties and taxes are charged on delivery,
                      as they are included in the final price..
                    </li>
                  </ExtraInfo>
                </PaymentSummaryInfo>

                <PaymentCheckout>
                  <p>
                    I agree to the terms and conditions, order information, and
                    payment terms.
                  </p>
                  {meData?.balance < TotalPriceTag ||
                  !meData?.address ||
                  !meData?.phone_number ? (
                    <ButtonLarge onClick={handlePayDisabled}>
                      Pay ${TotalPriceTag.toFixed(2)}
                    </ButtonLarge>
                  ) : (
                    <ButtonLarge onClick={payOrder}>
                      Pay ${TotalPriceTag.toFixed(2)}
                    </ButtonLarge>
                  )}
                </PaymentCheckout>
              </PaymentRightInfo>
            </PaymentBodyWrap>
          </PaymentWrapper>
        </>
      )}
    </PaymentContainer>
  );
};

export default PaymentPage;
