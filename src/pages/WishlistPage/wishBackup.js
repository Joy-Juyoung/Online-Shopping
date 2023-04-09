// import React, { useEffect, useState } from 'react';
// import axios from '../../api/axios';
// import {
//   ListMid,
//   ListTop,
//   ProductCategories,
//   ProductDesc,
//   ProductEachDetails,
//   ProductEachPhoto,
//   ProductLike,
//   ProductPrice,
//   ProductsEach,
//   ProductsList,
//   ProductsListContainer,
//   ProductsListWrapper,
//   ProductsWrap,
//   ProductTitle,
//   ToggleLike,
// } from '../ProductPage/ProductListElements';
// // import ProductsCard from './ProductsCard';
// import FavoriteIcon from '@mui/icons-material/Favorite';

// import Loading from '../../components/Loading';

// const WishlistPage = ({ meData }) => {
//   // const [items, setItems] = useState([]);
//   // true false -> Put 눌러졌을때 상태바꾸기
//   const [addLiked, setAddLiked] = useState();
//   const [loading, setLoading] = useState(false);
//   const [wishItems, setWishItems] = useState([]);
//   const [errMsg, setErMsg] = useState('');

//   // useEffect(() => {
//   //   setLoading(true);
//   //   const loadData = async () => {
//   //     await new Promise((r) => setTimeout(r, 1000));
//   //     setLoading(false);
//   //   };
//   //   loadData();
//   //   window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
//   // }, []);

//   const getItems = async () => {
//     // setLoading(true);
//     try {
//       const wishListInfo = await axios.get('wishlists/', {
//         headers: { 'Content-Type': 'application/json' },
//         withCredentials: true,
//       });
//       console.log('wishListInfo', wishListInfo?.data?.products);
//       setWishItems(wishListInfo?.data?.products);
//     } catch (err) {
//       if (err.response?.status === 400) {
//         console.log('400 error');
//         setErMsg('Error 400: No Data in Server Response');
//       } else {
//         console.log('Error page or empty page');
//         setErMsg('Error page or empty page');
//       }
//     }
//   };

//   useEffect(() => {
//     window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
//     getItems();
//   }, []);

//   const handleLiked = (pk) => {
//     // setLoading(false);
//     var tempItems = wishItems;
//     tempItems.forEach((item) => {
//       if (item.pk === pk) {
//         item.is_liked = !item.isLiked;

//         const addLike = axios.put(
//           '/wishlists/',
//           {
//             product_pk: item.pk,
//           },
//           {
//             headers: { 'Content-Type': 'application/json' },
//             withCredentials: true,
//           }
//         );
//         console.log('clicked', addLike);
//         setAddLiked(addLike);
//       }
//     });
//     // setItems([...items]);
//     setWishItems(tempItems);
//   };
//   console.log('get', wishItems);

//   if (loading)
//     return (
//       <div>
//         <Loading />
//       </div>
//     );
//   return (
//     // <ProductsListContainer>

//     //   <h1>Wishlists</h1>
//     //   <ProductsWrap>
//     //       <ProductsList>
//     //         <ListTop>
//     //           <TotalCountWrap>
//     //             <TotalCount style={{ fontSize: '13px' }}>
//     //               Total {wishItems?.length}

//     //             </TotalCount>
//     //           </TotalCountWrap>
//     //           <SelectWrap>
//     //             <select
//     //               // onChange={handleOptionChange}
//     //               name='category-list'
//     //               id='category-list'
//     //             >
//     //               {sort.map((option, index) => (
//     //                 <option key={index} value={option.value}>
//     //                   {option.text}
//     //                 </option>
//     //               ))}
//     //             </select>
//     //           </SelectWrap>
//     //         </ListTop>

//     //         <ListMidWrap>
//     //           <ListMid>
//     //             {wishItems?.map((all) => {
//     //               return (
//     //                 <ProductsCard
//     //                   key={all.pk}
//     //                   all={all}
//     //                   // kindEach={kindEach}
//     //                   meData={meData}
//     //                 />
//     //               );
//     //             })}
//     //           </ListMid>
//     //         </ListMidWrap>
//     //       </ProductsList>

//     //   </ProductsWrap>
//     // </ProductsListContainer>
//     <ProductsListContainer>
//       <ProductsWrap>
//         <h1>Wishlists</h1>
//         <ProductsListWrapper>
//           <ProductsList>
//             <ListTop>
//               <span style={{ fontSize: '13px' }}>
//                 Total {wishItems.length}
//               </span>
//             </ListTop>
//             <ListMid>
//               {wishItems?.map((item) => {
//                 // <ProductsCard key={item.pk} product={item} />
//                 return (
//                   <ProductsEach to={`/products/${item.pk}`} key={item.pk}>
//                     <ProductEachPhoto src={item.photos[0].picture} alt='' />

//                     {meData !== null && (
//                       <ToggleLike
//                         onClick={(e) => {
//                           e.preventDefault();
//                           handleLiked(item.pk);
//                         }}
//                       >
//                         <ProductLike>
//                           {item.is_liked ? (
//                             <FavoriteIcon sx={{ color: '#e20000' }} />
//                           ) : (
//                             <FavoriteIcon color='disabled' />
//                           )}
//                         </ProductLike>
//                       </ToggleLike>
//                     )}
//                     <ProductEachDetails>
//                       <ProductTitle>{item.name}</ProductTitle>
//                       <ProductDesc>{item.detail}</ProductDesc>
//                       <ProductPrice>${item.price}</ProductPrice>
//                     </ProductEachDetails>
//                   </ProductsEach>
//                 );
//               })}
//             </ListMid>
//           </ProductsList>
//         </ProductsListWrapper>
//       </ProductsWrap>
//     </ProductsListContainer>
//   );
// };

// export default WishlistPage;
