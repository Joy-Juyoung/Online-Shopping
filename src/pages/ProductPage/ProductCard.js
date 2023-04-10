import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ButtonSmall } from '../../components/ButtonElements';
import {
  ProductDesc,
  ProductEachDetails,
  ProductEachPhoto,
  ProductLike,
  ProductPrice,
  ProductsEach,
  ProductTitle,
  ToggleLike,
} from './ProductListElements';
import FavoriteIcon from '@mui/icons-material/Favorite';

import axios from '../../api/axios';

const ProductsCard = ({ all, meData, itemAllKinds, itemKinds, wishItems }) => {
  const [addLiked, setAddLiked] = useState();

  // console.log('all', all);
  // console.log('meData', meData);
  // console.log('kindEach', kindEach);
  console.log('itemAllKind', itemAllKinds);
  console.log('itemKinds', itemKinds);
  console.log('wishItems', wishItems);

  const handleLiked = (pk) => {
    if (itemAllKinds) {
      var tempAllItems = itemAllKinds?.productKinds;
      tempAllItems.forEach((item) => {
        item.products.forEach((each) => {
          // console.log('each', each);

          if (each.pk === pk) {
            each.is_liked = !each.isLiked;

            const addLike = axios.put(
              '/wishlists/',
              {
                product_pk: each.pk,
              },
              {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true,
              }
            );
            setAddLiked(addLike);
            // console.log('clicked', addLike);
          }
        });
      });
    } else if (itemKinds) {
      var tempItems = itemKinds;
      tempItems.products.forEach((each) => {
        if (each.pk === pk) {
          each.is_liked = !each.isLiked;

          const addLike = axios.put(
            '/wishlists/',
            {
              product_pk: each.pk,
            },
            {
              headers: { 'Content-Type': 'application/json' },
              withCredentials: true,
            }
          );
          setAddLiked(addLike);
          // console.log('clicked', addLike);
        }
        // });
      });
    } else if (wishItems) {
      var tempItems = wishItems;
      tempItems.forEach((each) => {
        if (each.pk === pk) {
          each.is_liked = !each.isLiked;

          const addLike = axios.put(
            '/wishlists/',
            {
              product_pk: each.pk,
            },
            {
              headers: { 'Content-Type': 'application/json' },
              withCredentials: true,
            }
          );
          setAddLiked(addLike);
          // console.log('clicked', addLike);
        }
        // });
      });
    } else {
      return null;
    }
  };

  return (
    <ProductsEach to={`/products/${all.pk}`} key={all.pk}>
      <ProductEachPhoto src={all?.photos[0].picture} alt='' />

      {meData && (
        <ToggleLike
          onClick={(e) => {
            e.preventDefault();
            handleLiked(all.pk);
          }}
        >
          <ProductLike>
            {all?.is_liked ? (
              <FavoriteIcon sx={{ color: '#e20000' }} />
            ) : (
              <FavoriteIcon color='disabled' />
            )}
          </ProductLike>
        </ToggleLike>
      )}

      <ProductEachDetails>
        <ProductTitle>{all?.name.toUpperCase()}</ProductTitle>
        <ProductDesc>{all?.detail}</ProductDesc>
        <ProductPrice>${all?.price}</ProductPrice>
      </ProductEachDetails>
    </ProductsEach>
  );
};

export default ProductsCard;
