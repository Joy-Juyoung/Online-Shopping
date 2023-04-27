// import React, { useEffect, useState } from 'react';
// import axios from '../../api/axios';
// import {
//   DetailContainer,
//   DetailWrapper,
//   DetailLeftInfo,
//   DetailRightInfo,
//   DetailRightInfoTop,
//   DetailName,
//   DetailProductName,
//   DetailTitle,
//   DetailPrice,
//   DetailCoupon,
//   DetailRightInfoBottom,
//   LikeBtnWrapper,
//   LikeBtn,
//   ButtonLarges,
//   ButtonLink,
// } from './ProductDetailElements';

// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import { Link, useParams } from 'react-router-dom';
// import { ButtonLarge } from '../../components/ButtonElements';

// const PRODUCTDETAILS_URL = '/products/';

// // const PRODUCTLIKE_URL = '/wishlists/';

// const TestProductItem = () => {
//   const [itemsDetail, setItemsDetail] = useState([]);
//   const { id } = useParams();
//   // const [id, setId] = useState();
//   console.log('itemsDetail', itemsDetail);

//   const getItemsDetail = async (e) => {
//     const itemInfo = await axios.get(`/products/${id}`, {
//       headers: { 'Content-Type': 'application/json' },
//       withCredentials: true,
//     });
//     // console.log('itemInfo', itemInfo?.data);
//     setItemsDetail(itemInfo?.data);
//   };

//   useEffect(() => {
//     // setId(itemsDetail.pk);
//     getItemsDetail();
//   }, []);

//   return (
//     <DetailContainer>
//       <DetailWrapper>
//         <DetailLeftInfo>
//           <img src={itemsDetail.photos?.[0].picture} alt='Product images' />
//         </DetailLeftInfo>
//         <DetailRightInfo>
//           <DetailRightInfoTop>
//             <DetailName>{itemsDetail.name}</DetailName>
//             <DetailProductName>
//               <DetailTitle>{itemsDetail.detail}</DetailTitle>

//               <DetailPrice>${itemsDetail.price}</DetailPrice>
//               {/* coupon*/}
//               <DetailCoupon>Product Coupon</DetailCoupon>
//             </DetailProductName>
//           </DetailRightInfoTop>

//           <DetailRightInfoBottom>
//             <LikeBtnWrapper>
//               <LikeBtn>
//                 <FavoriteBorderIcon fontSize='medium' color='disabled' />
//                 {/* <span>{itemLike}</span> */}
//               </LikeBtn>
//             </LikeBtnWrapper>

//             {/* <ButtonLarges to='/carts'>Add to Cart</ButtonLarges> */}
//             <ButtonLarge>
//               <ButtonLink to='/carts'>Add to Cart</ButtonLink>
//             </ButtonLarge>
//           </DetailRightInfoBottom>
//         </DetailRightInfo>
//       </DetailWrapper>
//     </DetailContainer>
//   );
// };

// export default TestProductItem;
