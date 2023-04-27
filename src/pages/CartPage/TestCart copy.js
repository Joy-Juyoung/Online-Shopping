// import React, { useEffect, useState } from 'react';
// import {
//   CartBodyWrap,
//   CartContainer,
//   CartLeftCheckBar,
//   CartLeftInfo,
//   CartProductLists,
//   CartRightBottom,
//   CartRightInfo,
//   CartRightMidOne,
//   CartRightMidTwo,
//   CartRightTop,
//   CartSummary,
//   CartSummaryInfo,
//   CartWrapper,
//   CheckBarWrap,
//   CheckBox,
//   CheckOutBtn,
//   CouponBtn,
//   CouponInfo,
//   CouponInput,
//   CouponInputWrap,
//   DeleteBtn,
//   DetailDescription,
//   DetailName,
//   DetailOption,
//   ExtraInfo,
//   FreeShippingInfo,
//   ItemIncreaseBtn,
//   ItemDecreaseBtn,
//   ItemDetailOne,
//   ItemDetailThree,
//   ItemDetailTwo,
//   ItemNumberInput,
//   ItemPriceInfo,
//   ItemShippingFee,
//   ItemTotalPrice,
//   ListsCheckBox,
//   ListsDeleteBtn,
//   ListsDetails,
//   ListsImgLink,
//   ListsItemDetails,
//   ListsItemImg,
//   OrderCheckBox,
//   PromoInfo,
//   QuestionMark,
//   SummaryWrap,
//   ItemDetailTwoWrap,
//   TotalTitle,
// } from './CartElements';

// import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
// import CloseIcon from '@mui/icons-material/Close';
// import RemoveIcon from '@mui/icons-material/Remove';
// import AddIcon from '@mui/icons-material/Add';
// import axios from '../../api/axios';
// import Loading from '../../components/Loading';
// import { object } from 'prop-types';
// import { Link } from 'react-router-dom';
// import { ButtonLarge } from '../../components/ButtonElements';

// const CARTS_URL = '/carts';

// const TestCart = () => {
//   const [loading, setLoading] = useState(false);
//   const [carts, setCarts] = useState([]);

//   const [checkList, setCheckList] = useState([]);
//   const [IdList, setIdList] = useState([]);
//   const [isCheck, setIsCheck] = useState([]);
//   const [itemPrice, setItemPrice] = useState(0);
//   const [isCheckAll, setIsCheckAll] = useState(false);
//   const [checkNewList, setCheckNewList] = useState([]);

//     useEffect(() => {
//       let ids = []
//       carts.map((item, i) => {
//         ids[i] = item.pk
//       })
//       setIdList(ids)
//       console.log("ids", ids);
//   }, [carts])

//     const onChangeAll = (e) => {
//       setCheckList(e.target.checked ? IdList : [])
//       // setIsCheckAll(!isCheckAll);
//       // setIsCheck(carts.map(li => li.pk));
//       // if (isCheckAll) {
//       //   setIsCheck([]);
//       // }
//    }

//    const onChangeEach = async (e, id) => {
//     // console.log("id",id);
//       if (e.target.checked) {
//           setCheckList([...checkList, id]);
//           const check = await axios.get(`/carts/${id}`, {
//             headers: { 'Content-Type': 'application/json' },
//             withCredentials: true,
//           });
//           setCheckNewList([...checkNewList, check.data]);
//           // setItemPrice(checkList.total_price);
//       } else {
//          setCheckList(checkList.filter((checkedId) => checkedId !== id));
//          setCheckNewList(checkNewList.filter((checked) => checked.pk !== id));
//       }
//       // const checked = e.target;
//       // setIsCheck([...isCheck, id]);
//       // if (!checked) {
//       //   setIsCheck(isCheck.filter(item => item !== id));
//       // }

//     };
//     console.log("each",checkList)
//     console.log("NEW", checkNewList);

// const handleCheckAll = () => {
//   setIsCheckAll(!isCheckAll);
//   setCheckList(carts.map(li => li.pk));
//       if (isCheckAll) {
//         setCheckList([]);
//       }
// }

//   const getAllCart = async () => {
//     const cartList = await axios.get(CARTS_URL, {
//       headers: { 'Content-Type': 'application/json' },
//       withCredentials: true,
//     });
//     console.log('cartList', cartList.data);
//     setCarts(cartList?.data);
//     setLoading(false);
//     // setCheckItems(new Array(cartList?.length).fill(true));
//   };

//   useEffect(() => {
//     setLoading(true);
//     getAllCart();
//     window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
//   }, []);
//   // console.log('carts', carts);


 
//   // const handleAllDeleteCart = async (pk) => {
//   //   alert('Are you sure you want to remove the products?');
//   //   // console.log('pk', pk);
//   //   let arrayids = [];
//   //   carts.forEach((c) => {
//   //     if (c.length > 0) {
//   //       arrayids.push(c.pk)
//   //     }
//   //   });
//   //     axios.delete(`/carts/${pk}`, {
//   //       headers: { 'Content-Type': 'application/json' },
//   //       withCredentials: true,
//   //       getAllCart();
//   //   });
//   //   window.location.reload('/carts');
//   // };

//   const handleDeleteCart = async (pk) => {
//     alert('Are you sure you want to remove the product?');
//     // console.log('pk', pk);
//     var tempCart = carts;
//     tempCart.forEach((c) => {
//       if (c.pk === pk) {
//         // console.log('c.pk', c.pk);
//         axios.delete(`/carts/${pk}`, {
//           headers: { 'Content-Type': 'application/json' },
//           withCredentials: true,
//         });
//       }
//     });
//     window.location.reload('/carts');
//   };

//   const handleIncrease = async (pk) => {
//     const addQty = carts.map((i) => {
//       if (pk === i.pk && i.number_of_product < 10000) {
//         axios.put(
//           `/carts/${pk}`,
//           {
//             // pk: cart.pk,
//             number_of_product: i.number_of_product + 1,
//           },
//           {
//             headers: { 'Content-Type': 'application/json' },
//             withCredentials: true,
//           }
//         );
//       }
//     });
//     setCarts(addQty);
//     getAllCart();
//   };
//   const handleDecrease = async (pk) => {
//     const minusQty = carts.map((i) => {
//       if (pk === i.pk && i.number_of_product > 1) {
//         axios.put(
//           `/carts/${pk}`,
//           {
//             pk: i.pk,
//             number_of_product: i.number_of_product - 1,
//           },
//           {
//             headers: { 'Content-Type': 'application/json' },
//             withCredentials: true,
//           }
//         );
//       }
//     });
//     setCarts(minusQty);
//     getAllCart();
//   };

//   const ShippingFee = 15;
//   const PriceForBill = checkNewList.reduce((total, item) => {
//     return total + item?.total_price;
//   }, 0);
//   // const PriceForBill = checkList.total_price;
//   const Taxes = PriceForBill * 0.05;
//   const Discounts = 0;
//   console.log('total: ', PriceForBill);
//   const TotalPriceTag = PriceForBill + ShippingFee + Taxes + Discounts;

//   if (loading)
//     return (
//       <div>
//         <Loading />
//       </div>
//     );

//   return (
//     <CartContainer>
//       <h1>SHOPPING BAG</h1>
//       <CartWrapper>
//         {carts.length === 0 ? (
//           <CartBodyWrap
//             style={{
//               display: 'block',
//               textAlign: 'center',
//             }}
//           >
//             <p>
//               Your shopping bag is empty. Would you like to add items to your
//               shopping bag?
//             </p>
//             <Link to='/products/all'>
//               <ButtonLarge style={{ width: '30%', marginTop: '40px' }}>
//                 Continue shopping
//               </ButtonLarge>
//             </Link>
//           </CartBodyWrap>
//         ) : (
//           <CartBodyWrap>
//             <CartLeftInfo>
//               <CartLeftCheckBar>
//                 <CheckBarWrap>
//                   <OrderCheckBox>
//                     <input 
//                       type='checkbox'
//                       onChange={onChangeAll} 
//                       // onClick={handleCheckAll}
//                       checked={checkList.length === IdList.length} 
//                       // onChange={onChangeAll} 
//                       // checked={isCheckAll}
//                     />
//                     <label>All</label>
//                   </OrderCheckBox>
//                   <DeleteBtn
//                     //  onChange={(e) => {
//                     //   e.preventDefault();
//                     //   handleAllDeleteCart(carts.pk);
//                     // }}  
//                   >Delete</DeleteBtn>
//                 </CheckBarWrap>
//               </CartLeftCheckBar>
//               <CartProductLists>
//                 {carts?.map((cart) => {
//                   return (
//                     <ListsDetails key={cart?.pk}>
//                       <ListsCheckBox>
//                         <input 
//                           type='checkbox'
//                           onChange={(e) => onChangeEach(e, cart.pk)} 
//                           checked={checkList.includes(cart.pk)} 
//                           // onChange={(e) => onChangeEach(cart.pk)}
//                           // checked={isCheck.includes(cart.pk)}
//                          />
//                         {/* <label/> */}
//                       </ListsCheckBox>
//                       <ListsItemImg>
//                         <ListsImgLink to={`/products/${cart?.product?.pk}`}>
//                           <img src={cart?.product?.photos[0].picture} alt='' />
//                         </ListsImgLink>
//                       </ListsItemImg>
//                       <ListsItemDetails>
//                         <ItemDetailOne to={`/products/${cart?.product?.pk}`}>
//                           <DetailName>{cart?.product?.name}</DetailName>
//                           <DetailDescription>
//                             {cart?.product?.detail}
//                           </DetailDescription>
//                           <DetailOption>
//                             {/* <span>{cart?.product_option?.name}</span> */}
//                             {cart?.product_option === null ? (
//                               <>Free</>
//                             ) : (
//                               <>{cart?.product_option?.name}</>
//                             )}
//                           </DetailOption>
//                         </ItemDetailOne>
//                         <ItemDetailTwo>
//                           <ItemDetailTwoWrap>
//                             <ItemDecreaseBtn
//                               onClick={() => {
//                                 handleDecrease(cart?.pk);
//                               }}
//                             >
//                               <RemoveIcon fontSize='small' color='action' />
//                             </ItemDecreaseBtn>
//                             <ItemNumberInput>
//                               {cart?.number_of_product}
//                             </ItemNumberInput>
//                             <ItemIncreaseBtn
//                               onClick={() => {
//                                 handleIncrease(cart.pk);
//                               }}
//                             >
//                               <AddIcon fontSize='small' color='action' />
//                             </ItemIncreaseBtn>
//                           </ItemDetailTwoWrap>
//                         </ItemDetailTwo>
//                         <ItemDetailThree>
//                           <strong>${cart?.total_price.toLocaleString()}</strong>
//                         </ItemDetailThree>
//                       </ListsItemDetails>
//                       <ListsDeleteBtn>
//                         <CloseIcon
//                           fontSize='small'
//                           onClick={(e) => {
//                             e.preventDefault();
//                             handleDeleteCart(cart.pk);
//                           }}
//                         />
//                       </ListsDeleteBtn>
//                     </ListsDetails>
//                   );
//                 })}
//               </CartProductLists>
//             </CartLeftInfo>

//             <CartRightInfo>
//               <CartRightTop>
//                 <TotalTitle>
//                   <h2>Promo Code</h2>
//                   <PromoInfo>
//                     <QuestionMark>
//                       <HelpOutlineIcon fontSize='small' color='action' />
//                     </QuestionMark>
//                   </PromoInfo>
//                 </TotalTitle>
//                 <CouponInfo>
//                   <CouponInputWrap>
//                     <CouponInput placeholder='Please enter your promo code' />
//                     <CouponBtn>Apply</CouponBtn>
//                   </CouponInputWrap>
//                 </CouponInfo>
//               </CartRightTop>

//               <CartRightMidOne>
//                 <CartSummary>
//                   Order Summary
//                   <SummaryWrap>
//                     <span>{carts?.length}</span>
//                     <span>Item</span>
//                   </SummaryWrap>
//                 </CartSummary>
//                 <CartSummaryInfo>
//                   <ItemPriceInfo>
//                     Price
//                     <span>
//                       ${PriceForBill?.toLocaleString()}
//                     </span>
//                   </ItemPriceInfo>
//                   <ItemShippingFee>
//                     Shipping fee
//                     <span>
//                       ${ShippingFee?.toLocaleString()}
//                     </span>
//                   </ItemShippingFee>
//                   <ItemShippingFee>
//                     Duties amd Taxes
//                     <span>
//                       ${Taxes?.toLocaleString()}
//                     </span>
//                   </ItemShippingFee>
//                   <ItemShippingFee>
//                     Discounts
//                     <span>
//                       ${Discounts?.toLocaleString()}
//                     </span>
//                   </ItemShippingFee>
//                   <ItemTotalPrice>
//                     Total
//                     <span>
//                      ${TotalPriceTag?.toLocaleString()}
//                     </span>
//                   </ItemTotalPrice>
//                   <ExtraInfo>
//                     <li>
//                       * Additional duties and taxes may apply at checkout.
//                     </li>
//                   </ExtraInfo>
//                 </CartSummaryInfo>
//               </CartRightMidOne>

//               <CartRightMidTwo>
//                 <FreeShippingInfo>
//                   Add $<span>61 </span>
//                   more to enjoy
//                   <strong> FREE SHIPPING</strong>
//                 </FreeShippingInfo>
//               </CartRightMidTwo>

//               <CartRightBottom>
//                 {/* <CheckOutBtn>PROCEED TO CHECKOUT</CheckOutBtn> */}

//                 <Link to='/payment'>
//                   <CheckOutBtn>PROCEED TO CHECKOUT</CheckOutBtn>
//                 </Link>
//               </CartRightBottom>
//             </CartRightInfo>
//           </CartBodyWrap>
//         )}
//       </CartWrapper>
//     </CartContainer>
//   );
// };

// export default TestCart;