// import React, { useEffect, useState, useMemo } from 'react';
// import {
//   AdContainer,
//   AdListBottom,
//   AdListMid,
//   AdListSearch,
//   AdListTop,
//   AdListUtils,
//   AdTable,
//   AdTBody,
//   AdTBodyCell,
//   AdTBodyRow,
//   AdTHead,
//   AdTHeadCell,
//   AdTHeadeRow,
//   BodyImg,
//   CheckInput,
// } from '../AdminCommonElements';
// import axios from '../../../api/axios';
// import Loading from '../../../components/Loading';
// import Pagination from '../../../components/AdminComponents//Pagination';
// import { ButtonSmall } from '../../../components/ButtonElements';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

// const ItemReviews = ({ meData }) => {
//   const [loading, setLoading] = useState(false);
//   const [reviews, setReviews] = useState();

//   const [currentPage, setCurrentPage] = useState(1);
//   const [postsPerPage, setPostsPerPage] = useState(8);

//   const getReviews = async () => {
//     const reviewList = await axios.get('/reviews/', {
//       headers: { 'Content-Type': 'application/json' },
//       withCredentials: true,
//     });
//     console.log('reviewList', reviewList.data);
//     setReviews(reviewList?.data);
//     setLoading(false);
//   };

//   useEffect(() => {
//     setLoading(true);
//     getReviews();
//   }, [meData]);

//   const lastPostIndex = currentPage * postsPerPage;
//   const firstPostIndex = lastPostIndex - postsPerPage;
//   const currentPosts = reviews?.slice(firstPostIndex, lastPostIndex);

//   if (loading)
//     return (
//       <div>
//         <Loading />
//       </div>
//     );
//   return (
//     <AdContainer>
//       <h1>Product Reviews</h1>
//       <AdListTop>
//         <AdListSearch>
//           <input type='text' placeholder='Search' />
//         </AdListSearch>
//         <AdListUtils>
//           <ButtonSmall>Add</ButtonSmall>
//           <ButtonSmall>Delete</ButtonSmall>
//         </AdListUtils>
//       </AdListTop>

//       <AdListMid>
//         <AdTable>
//           <AdTHead>
//             <AdTHeadeRow>
//               <AdTHeadCell className='check'>
//                 <input type='checkbox' />
//               </AdTHeadCell>
//               <AdTHeadCell className='id'>ID</AdTHeadCell>
//               <AdTHeadCell className='pName'>PRODUCT</AdTHeadCell>
//               <AdTHeadCell className='username'>USER</AdTHeadCell>
//               <AdTHeadCell className='payload'>REVIEW</AdTHeadCell>
//               <AdTHeadCell className='rating'>RATING</AdTHeadCell>
//             </AdTHeadeRow>
//           </AdTHead>
//           {currentPosts?.map((review) => {
//             return (
//               <AdTBody key={review?.pk}>
//                 <AdTBodyRow>
//                   <AdTBodyCell className='check'>
//                     <CheckInput type='checkbox' />
//                   </AdTBodyCell>
//                   <AdTBodyCell className='id'>{review?.pk}</AdTBodyCell>
//                   <AdTBodyCell className='pName'>
//                     {review?.Product_Name}
//                   </AdTBodyCell>
//                   <AdTBodyCell className='username'>
//                     {review?.user?.username}
//                   </AdTBodyCell>
//                   <AdTBodyCell className='payload'>
//                     {review?.payload?.length > 30 ? (
//                       `${review?.payload?.substring(0, 30)}...`
//                     ) : (
//                       <> {review?.payload}</>
//                     )}
//                   </AdTBodyCell>
//                   <AdTBodyCell className='rating'>{review?.rating}</AdTBodyCell>
//                 </AdTBodyRow>
//               </AdTBody>
//             );
//           })}
//         </AdTable>
//       </AdListMid>
//       <AdListBottom>
//         <Pagination
//           totalPosts={reviews?.length}
//           postsPerPage={postsPerPage}
//           setCurrentPage={setCurrentPage}
//           currentPage={currentPage}
//         />
//       </AdListBottom>
//     </AdContainer>
//   );
// };

// export default ItemReviews;
