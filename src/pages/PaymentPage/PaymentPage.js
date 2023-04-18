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
  PaymentMethod,
  MethodRadio,
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
} from './PaymentElements';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import axios from '../../api/axios';
import Loading from '../../components/Loading';
import { ButtonLarge, ButtonSmall } from '../../components/ButtonElements';
import PaypalIcon from '../../asset/paypal.svg';
import MastercardIcon from '../../asset/mastercard.svg';
import VisaIcon from '../../asset/visa.svg';
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/Modal';
import AddBalance from '../../components/AddBalance';
// import { Link } from 'react-router-dom';

const CARTS_URL = '/carts';

const PaymentPage = ({ meData }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [carts, setCarts] = useState([]);
  const [payList, setPayList] = useState([]);
  const [modalShown, toggleModal] = useState(false);

  const PriceForBill = carts.reduce((total, item) => {
    return total + item?.total_price;
  }, 0);
  const ShippingFee = 15;
  const Taxes = PriceForBill * 0.05;
  const Discounts = 0;
  const TotalPriceTag = PriceForBill + ShippingFee + Taxes + Discounts;

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
    // window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [meData]);
  console.log('carts', carts);

  const handleAddBalance = () => {
    window.open('/userBalance', 'My Balance', 'height=650px,width=680px');
  };

  const payOrder = async () => {
    alert('Are you sure you want to pay?');
    carts.map((cItems) => {
      payList.push({
        product_id: cItems.product.pk,
        number_of_product: cItems.number_of_product,
      });
    });
    console.log('payList', payList);

    const sendOrder = axios.post(
      '/orders/',
      {
        productsList: payList,
        address: meData?.address,
      },
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      }
    );

    console.log('sendOrder', sendOrder);
    handleDeleteCart();
    setPayList([]);
    navigate('/userOrders');
    window.location.reload();
  };

  const handleDeleteCart = async () => {
    // alert('Are you sure you want to remove the product?');
    const deleteItem = carts.map((c) => {
      // if (c.pk === pk) {
      axios.delete(`/carts/${c.pk}`, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });
      // }
    });
    setCarts(deleteItem);
    getAllCart();
    window.location.reload('/carts');
  };

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );

  return (
    <PaymentContainer>
      <h1>ORDER</h1>
      <PaymentWrapper>
        <PaymentBodyWrap>
          <PaymentLeftInfo>
            <PaymentPsersonalInfo>
              <PaymentListTitle>Shipping address</PaymentListTitle>
              <PaymentInfoDetails>
                <h3>{meData?.name}</h3>
                <p>{meData?.phone_number}</p>
                <p>{meData?.address}</p>
              </PaymentInfoDetails>
              <ButtonSmall>Edit my shipping address</ButtonSmall>
            </PaymentPsersonalInfo>
            <PaymentListWrap>
              <PaymentListTitle>
                Product information <span>{carts.length} Items</span>
              </PaymentListTitle>
              {carts?.map((cart) => {
                return (
                  <ListsDetails key={cart.pk}>
                    <ListsImgLink to={``}>
                      <img src={cart.product.photos[0].picture} alt='' />
                    </ListsImgLink>

                    <ListsItemDetails>
                      <DetailName to={``}>
                        {cart?.product.name.toUpperCase()}
                      </DetailName>
                      <DetailDescription to={``}>
                        {cart?.product.detail}
                      </DetailDescription>
                      <DetailOption>
                        {/* <span>{cart.product_option?.name}</span> */}
                        Free, Qty {cart?.number_of_product}
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
                <h3>
                  Your Current Balances: ${meData?.balance.toLocaleString()}
                </h3>
                {meData?.balance < TotalPriceTag && (
                  <p style={{ color: 'red' }}>
                    * Your balance is not enough to buy items. Please add the
                    balance through the button below.
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
              <TotalTitle>Total</TotalTitle>
              <span>
                ${TotalPriceTag}
                <ExpandMoreIcon />
              </span>
            </PaymentRightTop>

            <PaymentSummaryInfo>
              <ItemSummary>
                Price
                <span>${PriceForBill}</span>
              </ItemSummary>
              <ItemSummary>
                Shipping fee
                <span>${ShippingFee}</span>
              </ItemSummary>
              <ItemSummary>
                Duties amd Taxes
                <span>${Taxes}</span>
              </ItemSummary>
              <ItemSummary>
                Discounts
                <span>${Discounts}</span>
              </ItemSummary>
              <ItemTotalPrice>
                Total
                <span>${TotalPriceTag}</span>
              </ItemTotalPrice>
              <ExtraInfo>
                <li>
                  * No additional duties and taxes are charged on delivery, as
                  they are included in the final price..
                </li>
              </ExtraInfo>
            </PaymentSummaryInfo>

            <PaymentCheckout>
              <p>
                I agree to the terms and conditions, order information, and
                payment terms.
              </p>
              {/* <ButtonLarge onClick={payOrder}> */}
              <ButtonLarge onClick={payOrder}>Pay ${TotalPriceTag}</ButtonLarge>
            </PaymentCheckout>
          </PaymentRightInfo>
        </PaymentBodyWrap>
      </PaymentWrapper>
    </PaymentContainer>
  );
};

export default PaymentPage;
