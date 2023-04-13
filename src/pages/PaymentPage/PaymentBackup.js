// import React, { useEffect, useState } from 'react';
// import {
//   DetailDescription,
//   DetailName,
//   DetailOption,
//   ExtraInfo,
//   ItemTotalPrice,
//   ListsDetails,
//   ListsImgLink,
//   ListsItemDetails,
//   PaymentPsersonalInfo,
//   PaymentInfoDetails,
//   PaymentMethod,
//   MethodRadio,
//   DetailPrice,
//   TotalTitle,
//   ItemSummary,
//   PaymentContainer,
//   PaymentWrapper,
//   PaymentBodyWrap,
//   PaymentLeftInfo,
//   PaymentListTitle,
//   PaymentListWrap,
//   PaymentRightInfo,
//   PaymentRightTop,
//   PaymentSummaryInfo,
//   PaymentCheckout,
// } from './PaymentElements';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import axios from '../../api/axios';
// import Loading from '../../components/Loading';
// import { ButtonLarge, ButtonSmall } from '../../components/ButtonElements';
// import PaypalIcon from '../../asset/paypal.svg';
// import MastercardIcon from '../../asset/mastercard.svg';
// import VisaIcon from '../../asset/visa.svg';
// // import { Link } from 'react-router-dom';

// const CARTS_URL = '/carts';

// const PaymentPage = ({ meData }) => {
//   const [loading, setLoading] = useState(false);
//   const [carts, setCarts] = useState([]);

//   const PriceForBill = carts.reduce((total, item) => {
//     return total + item?.total_price;
//   }, 0);
//   const ShippingFee = 15;
//   const Taxes = PriceForBill * 0.05;
//   const Discounts = 0;
//   const TotalPriceTag = PriceForBill + ShippingFee + Taxes + Discounts;

//   const getAllCart = async () => {
//     const cartList = await axios.get(CARTS_URL, {
//       headers: { 'Content-Type': 'application/json' },
//       withCredentials: true,
//     });

//     console.log('cartList', cartList.data);
//     setCarts(cartList?.data);
//     setLoading(false);
//   };
//   useEffect(() => {
//     setLoading(true);
//     getAllCart();
//   }, []);
//   console.log('carts', carts);

//   if (loading)
//     return (
//       <div>
//         <Loading />
//       </div>
//     );

//   return (
//     <PaymentContainer>
//       <h1>SHOPPING BAG</h1>
//       <PaymentWrapper>
//         <PaymentBodyWrap>
//           <PaymentLeftInfo>
//             <PaymentPsersonalInfo>
//               <PaymentListTitle>Shipping address</PaymentListTitle>
//               <PaymentInfoDetails>
//                 <h3>{meData?.name}</h3>
//                 <p>{meData?.phone_number}</p>
//                 <p>{meData?.address}</p>
//               </PaymentInfoDetails>
//               <ButtonSmall>Edit my shipping address</ButtonSmall>
//             </PaymentPsersonalInfo>
//             <PaymentListWrap>
//               <PaymentListTitle>
//                 Product information <span>{carts.length} Items</span>
//               </PaymentListTitle>
//               {carts?.map((cart) => {
//                 return (
//                   <ListsDetails key={cart.pk}>
//                     <ListsImgLink to={``}>
//                       <img src={cart.product.photos[0].picture} alt='' />
//                     </ListsImgLink>

//                     <ListsItemDetails>
//                       <DetailName to={``}>
//                         {cart.product.name.toUpperCase()}
//                       </DetailName>
//                       <DetailDescription to={``}>
//                         {cart.product.detail}
//                       </DetailDescription>
//                       <DetailOption>
//                         {/* <span>{cart.product_option?.name}</span> */}
//                         Free, Qty 1
//                       </DetailOption>
//                       <DetailPrice>${cart.total_price}</DetailPrice>
//                     </ListsItemDetails>
//                   </ListsDetails>
//                 );
//               })}
//             </PaymentListWrap>
//             <PaymentPsersonalInfo>
//               <PaymentListTitle>Payment method</PaymentListTitle>
//               <PaymentMethod>
//                 <MethodRadio>
//                   <input type='radio' id='paypal' name='payment' />
//                   <label htmlFor='paypal'>Paypal</label>
//                 </MethodRadio>

//                 <img src={PaypalIcon} border='0' alt='PayPal Logo' />
//               </PaymentMethod>
//               <PaymentMethod>
//                 <MethodRadio>
//                   <input type='radio' id='card' name='payment' />
//                   <label htmlFor='card'>Credit/Debit Card</label>
//                 </MethodRadio>
//                 <div>
//                   <img src={VisaIcon} border='0' alt='PayPal Logo' />
//                   <img src={MastercardIcon} border='0' alt='PayPal Logo' />
//                 </div>
//               </PaymentMethod>
//             </PaymentPsersonalInfo>
//           </PaymentLeftInfo>

//           <PaymentRightInfo>
//             <PaymentRightTop>
//               <TotalTitle>Total</TotalTitle>
//               <span>
//                 ${TotalPriceTag}
//                 <ExpandMoreIcon />
//               </span>
//             </PaymentRightTop>

//             <PaymentSummaryInfo>
//               <ItemSummary>
//                 Price
//                 <span>${PriceForBill}</span>
//               </ItemSummary>
//               <ItemSummary>
//                 Shipping fee
//                 <span>${ShippingFee}</span>
//               </ItemSummary>
//               <ItemSummary>
//                 Duties amd Taxes
//                 <span>${Taxes}</span>
//               </ItemSummary>
//               <ItemSummary>
//                 Discounts
//                 <span>${Discounts}</span>
//               </ItemSummary>
//               <ItemTotalPrice>
//                 Total
//                 <span>${TotalPriceTag}</span>
//               </ItemTotalPrice>
//               <ExtraInfo>
//                 <li>
//                   * No additional duties and taxes are charged on delivery, as
//                   they are included in the final price..
//                 </li>
//               </ExtraInfo>
//             </PaymentSummaryInfo>

//             <PaymentCheckout>
//               <p>
//                 I agree to the terms and conditions, order information, and
//                 payment terms.
//               </p>
//               <ButtonLarge>ORDER NOW</ButtonLarge>
//             </PaymentCheckout>
//           </PaymentRightInfo>
//         </PaymentBodyWrap>
//       </PaymentWrapper>
//     </PaymentContainer>
//   );
// };

// export default PaymentPage;
