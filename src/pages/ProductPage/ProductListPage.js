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
  const [liked, setLiked] = useState(false);
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
    console.log('ProductList', itemsList?.data);
    setItems(itemsList?.data);
  };

  useEffect(() => {
    getItems();
  }, []);

  // const toggleLiked = () => {
  //   if (!liked) {
  //     setLiked(true);
  //   }
  //   setLiked(false);
  // };

  const handleOptionChange = (e) => {
    console.log(e.target.value);
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
                <select
                  onChange={handleOptionChange}
                  name='fruits'
                  id='fruit-select'
                >
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

                    {/* pk별 각각 클릭될때, 하나의 상태만 변하도록 수정 */}
                    <ToggleLike>
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
                        total Likes count
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
