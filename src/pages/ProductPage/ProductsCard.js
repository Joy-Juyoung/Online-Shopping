// import React from 'react';
// import { ButtonSmall } from '../../components/ButtonElements';
// import { ProductDesc, ProductEachDetails, ProductEachPhoto, ProductLike, ProductPrice, ProductsEach, ProductTitle, ToggleLike } from './ProductListElements';
// import FavoriteIcon from '@mui/icons-material/Favorite';

// const ProductsCard = ({ item, meData }) => {
//   // console.log(product);

//   return (
//     <ProductsEach to={`/products/${item.pk}`} key={item.pk}>
//                     <ProductEachPhoto src={item.photos[0].picture} alt='' />

//                     {meData && (
//                       <ToggleLike
//                         onClick={(e) => {
//                           e.preventDefault();
//                           handleLiked(item.pk);
//                         }}

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
//   );
// };

// export default ProductsCard;
