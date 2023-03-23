import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonSmall } from '../../components/ButtonElements';
import {
  ProductDesc,
  ProductEachDetails,
  ProductLike,
  ProductPrice,
  ProductsEach,
  ProductTitle,
  ToggleLike,
} from './ProductListElements';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from 'react-router-dom';

const ProductsCard = ({ item }) => {
  // console.log(product);
  // const { id } = product.data;
  const navigate = useNavigate();
  const onProductClick = () => {
    navigate(`/products/${item.pk}`);
  };

  return (
    // <Link to={`/products/${product.pk}`} >
    <ProductsEach key={item.pk} onClick={() => onProductClick(item)}>
      <img src=<img src={item.photos[0].picture} alt='' /> alt='' />

      <ToggleLike>
        {item.is_liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </ToggleLike>
      <ProductEachDetails>
        <ProductTitle>{item.name}</ProductTitle>
        <ProductDesc>{item.kind.name}</ProductDesc>
        <ProductPrice>${item.price}</ProductPrice>
        <ProductLike>
          <FavoriteIcon fontSize='small' />
          total Likes count
        </ProductLike>
      </ProductEachDetails>
    </ProductsEach>
    // </Link>

    // <div>
    //   <ul>
    //     {product.photos.map((pic) => (
    //       <li key={pic.pk}>
    //         <img src={pic.picture} alt='' />
    //         <h2>{product.name}</h2>
    //         {/* <p>{product.description}</p> */}
    //         <span>${product.price}</span>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
};

export default ProductsCard;
