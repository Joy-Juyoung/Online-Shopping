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
  SoldOutCover,
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

  const [getEachItem, setGetEachItem] = useState();
  const [fav, setFav] = useState(false);

  // console.log('items', items);
  // console.log('getAllKinds', getAllKinds);

  useEffect(() => {
    setFav(all?.is_liked);
  }, []);

  const handleLiked = (pk) => {
    if (items) {
      var tempAll = items;
      tempAll.forEach((each) => {
        if (each.pk === pk) {
          each.is_liked = !each.isLiked;
          setFav(!fav);
          console.log('fav 2', fav);
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
      setAllofItems([tempAll]);
    } else if (getAllKinds) {
      var tempAllItems = getAllKinds?.productKinds;
      tempAllItems?.forEach((item) => {
        item?.products?.forEach((each) => {
          if (each.pk === pk) {
            setFav(!fav);
            // if (fav) {
            each.is_liked = !each.isLiked;
            console.log('fav 2', fav);
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
          // }
        });
      });
      setParentsItem([tempAllItems]);
    } else if (itemKinds) {
      var tempItems = itemKinds;
      tempItems?.products?.forEach((each) => {
        if (each.pk === pk) {
          each.is_liked = !each.isLiked;
          setFav(!fav);
          console.log('fav 2', fav);
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
      setChildItem([tempItems]);
    } else if (wishItems) {
      var tempWishItems = wishItems;
      // setFav(!fav);
      // console.log('fav 1', fav);
      tempWishItems?.forEach((each) => {
        if (each.pk === pk) {
          each.is_liked = !each.isLiked;
          setFav(!fav);
          console.log('fav 2', fav);
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
      setLikeItem([tempWishItems]);
    } else {
      return console.log('Error: IsLiked');
    }
  };

  // console.log('all', all);

  // const getEachProduct = async () => {
  //   const { data } = await axios.get(`/products/${all.pk}`, {
  //     headers: { 'Content-Type': 'application/json' },
  //     withCredentials: true,
  //   });

  //   // console.log('setGetEachItem', data);
  //   setGetEachItem(data);
  // };
  // useEffect(() => {
  //   if (getEachItem?.id === all?.pk && getEachItem?.in_stock === 0) {
  //   }
  //   getEachProduct();
  // }, []);

  return (
    <ProductsEach to={`/products/${all.pk}`} key={all.pk}>
      {/* {getEachItem?.id === all?.pk && getEachItem?.in_stock === 0 && (
        <SoldOutCover>
          <span>Sold Out</span>
        </SoldOutCover>
      )} */}
      <ProductEachPhoto src={all?.photos[0].picture} alt='' />

      {meData && (
        <ToggleLike
          onClick={(e) => {
            e.preventDefault();
            handleLiked(all.pk);
          }}
        >
          <ProductLike>
            {fav ? (
              <FavoriteIcon sx={{ color: '#e20000' }} />
            ) : (
              <FavoriteIcon sx={{ color: '#B1B1B1' }} />
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
