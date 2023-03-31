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
  ProductsListContainer,
  ProductsListWrap,
  ProductsListWrapper,
  ProductsWrap,
  ProductTitle,
  ToggleLike,
} from './ProductListElements';
// import ProductsCard from './ProductsCard';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Loading from '../../components/Loading';

// if user me 가 없다면, 로그인x라면 liked가 작동x
// 하지만 이게 작동 되야함.....?
//  비회원은 로컬에 저장하고 위시리스트를 볼 수 있음
// 그리고, 구매하려면 이때는 로그인을 해야함

const PRODUCTS_URL = '/products';
const ProductsListPage = () => {
  const [items, setItems] = useState([]);
  const [addLiked, setAddLiked] = useState();
  // const [wishList, setWishList] = useState([]);
  // const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(false);

  const sort = [
    // { value: '', text: '--Choose an option--' },
    { value: 'Newest', text: 'Newest first' },
    { value: 'Popular', text: 'Most Popular' },
    // { value: 'Ratings', text: 'Ratings' },
    { value: 'HighToLow', text: 'Price: high to low' },
    { value: 'LowToHigh', text: 'Price: low to high' },
  ];

  useEffect(() => {
    setLoading(true);
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 1000));
      setLoading(false);
    };
    loadData();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const getItems = async () => {
    try {
      const itemsList = await axios.get(PRODUCTS_URL, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });
      console.log('ProductList', itemsList?.data.length);
      setItems(itemsList?.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getItems();
  }, [addLiked]);

  const handleLiked = (pk) => {
    items.forEach((item) => {
      if (item.pk === pk) {
        item.is_liked = !item.isLiked;

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
        console.log('clicked', item.is_liked);
      }
    });
    // putLiked(items);
    // setItems([...items]);
    setItems(items);
  console.log('get', items);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <ProductsListContainer>
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
                  <ProductsEach
                    to={`/products/${item.pk}`}
                    key={item.pk}
                    // onCLick={(e) => e.preventDefault()}
                  >
                    <img src={item.photos[0].picture} alt='' />
                    {/* <img  src={item.photos[0].picture} alt='' /> */}
                    {/* pk별 각각 클릭될때, 하나의 상태만 변하도록 수정 */}
                    {/* e.stopPropagation(); */}
                    <ToggleLike
                      onClick={(e) => {
                        e.preventDefault();
                        handleLiked(item.pk);
                      }}
                    >
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
    </ProductsListContainer>
  );
};

export default ProductsListPage;