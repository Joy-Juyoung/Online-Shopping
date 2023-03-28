import React, { Children, useEffect, useState } from 'react';
import axios from '../../api/axios';
import {
  FavIcon,
  ListMid,
  ListTop,
  ProductCategories,
  ProductDesc,
  ProductEachDetails,
  ProductEachPhoto,
  ProductLike,
  ProductPrice,
  ProductsEach,
  ProductsList,
  ProductsListWrapper,
  ProductsWrap,
  ProductTitle,
  ProdutsListContainer,
  ToggleLike,
} from './ProductListElements';
// import ProductsCard from './ProductsCard';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const PRODUCTS_URL = '/products';
const ProductsListPage = () => {
  const [items, setItems] = useState([]);
  const [addLiked, setAddLiked] = useState();
  const [wishList, setWishList] = useState([]);
  // const [clicked, setClicked] = useState(false);

  const sort = [
    // { value: '', text: '--Choose an option--' },
    { value: 'Newest', text: 'Newest first' },
    { value: 'Popular', text: 'Most Popular' },
    // { value: 'Ratings', text: 'Ratings' },
    { value: 'HighToLow', text: 'Price: high to low' },
    { value: 'LowToHigh', text: 'Price: low to high' },
  ];

  const getItems = async () => {
    const itemsList = await axios.get(PRODUCTS_URL, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    console.log('ProductList', itemsList?.data.length);
    setItems(itemsList?.data);
  };

  // const getWishList = async () => {
  //   const LikedList = await axios.get('/wishlists/', {
  //     headers: { 'Content-Type': 'application/json' },
  //     withCredentials: true,
  //   });

  //   console.log('LikedList length', LikedList?.data.products.length);
  //   setWishList(LikedList?.data?.products);
  // };

  useEffect(() => {
    getItems();
    // getWishList();
  }, [addLiked]);

  const handleLiked = (pk) => {
    items.forEach((item) => {
      if (item.pk === pk) {
        item.is_liked = !item.isLiked;
        // const putLiked = async () => {
        //   const addLike = await
        const addLike = axios.put(
          '/wishlists/',
          {
            product_pk: item.pk,
          },
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          }
        );
        setAddLiked(addLike);
        console.log('addLike', addLike);
      }
    });
    console.log('clicked', items);
    setItems([...items]);

    // putLiked(items);
  };

  return (
    <ProdutsListContainer>
      <ProductsWrap>
        <h1>All Products</h1>
        <ProductsListWrapper>
          <ProductCategories>
            {/* <span>Categories Filter section</span> */}
          </ProductCategories>
          <ProductsList>
            <ListTop>
              <span style={{ fontSize: '13px' }}>Total {items.length} </span>
              <span>
                <select>
                  {sort.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.text}
                    </option>
                  ))}
                </select>
              </span>
            </ListTop>
            <ListMid>
              {items.map((item) => {
                // <ProductsCard key={item.pk} product={item} />
                return (
                  <ProductsEach key={item.pk}>
                    <img src={item.photos[0].picture} alt='' />
                    <ToggleLike onClick={() => handleLiked(item.pk)}>
                      {item.is_liked ? (
                        <FavoriteIcon />
                      ) : (
                        <FavoriteBorderIcon />
                      )}
                    </ToggleLike>
                    <ProductEachDetails>
                      <ProductTitle>{item.name}</ProductTitle>
                      <ProductDesc>{item.kind.name}</ProductDesc>
                      <ProductPrice>${item.price}</ProductPrice>
                      <ProductLike>
                        <FavoriteIcon fontSize='small' />
                        {/* {wishList.length} */}
                        Each Liked total count
                      </ProductLike>
                    </ProductEachDetails>
                  </ProductsEach>
                );
              })}
            </ListMid>
          </ProductsList>
        </ProductsListWrapper>
      </ProductsWrap>
    </ProdutsListContainer>
  );
};

export default ProductsListPage;
