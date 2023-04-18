import React, { useEffect, useState } from 'react';
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
import { useNavigate } from 'react-router-dom';
import axios from '../../api/axios';

const ProductsCard = ({
  all,
  meData,
  getAllKinds,
  itemKinds,
  wishItems,
  addLiked,
  items,
}) => {
  const [added, setAdded] = useState();
  const [clickedLiked, setClickedLiked] = useState(false);
  const navigate = useNavigate();

  const [partentsItem, setParentsItem] = useState();
  const [childItem, setChildItem] = useState();
  const [likeItem, setLikeItem] = useState();
  const [allofItems, setAllofItems] = useState();

  // console.log('all', all);
  // console.log('meData', meData);
  // console.log('itemAllKind', getAllKinds);
  // console.log('itemKinds', itemKinds);
  // console.log('wishItems', wishItems);

  useEffect(() => {
    setParentsItem(getAllKinds);
    setChildItem(itemKinds);
    setLikeItem(wishItems);
    setAdded(addLiked);
    setAllofItems(items);
  }, [getAllKinds, itemKinds, wishItems, addLiked, all, added]);

  const handleLiked = (pk) => {
    if (getAllKinds) {
      var tempAllItems = getAllKinds?.productKinds;
      tempAllItems.forEach((item) => {
        item.products.forEach((each) => {
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
            setAdded(addLike);
            // window.location.reload();
            console.log('added', added);
          }
        });
      });
      setParentsItem([...tempAllItems]);
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
          setAdded(addLike);
          // window.location.reload();
        }
      });
      setChildItem([...tempItems]);
    } else if (wishItems) {
      var tempWishItems = wishItems;
      tempWishItems.forEach((each) => {
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
          setAdded(addLike);
          // window.location.reload();
        }
      });
      setLikeItem([...tempWishItems]);
    } else {
      return console.log('Error: IsLiked');
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
