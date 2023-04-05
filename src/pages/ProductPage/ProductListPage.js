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
  ProductUnLike,
  SelectWrap,
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
const ProductsListPage = ({ meData }) => {
  const [items, setItems] = useState([]);
  // true false -> Put 눌러졌을때 상태바꾸기
  const [addLiked, setAddLiked] = useState();
  const [loading, setLoading] = useState(false);

  // const [currentPage, setCurrentPage] = useState(1);

  const sort = [
    { value: 'Newest', text: 'Newest first' },
    { value: 'Popular', text: 'Most Popular' },
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
    // setLoading(true);
    try {
      const itemsList = await axios.get(PRODUCTS_URL, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });
      console.log('ProductList', itemsList?.data.length);
      setItems(itemsList?.data);
      // setLoading(false);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getItems();
  }, [addLiked]);

  const handleLiked = (pk) => {
    setLoading(false);
    var tempItems = items;
    tempItems.forEach((item) => {
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
        console.log('clicked', addLike);
      }
    });
    // setItems([...items]);
    setItems(tempItems);
  };
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
              <SelectWrap>
                <select>
                  {sort.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.text}
                    </option>
                  ))}
                </select>
              </SelectWrap>
            </ListTop>
            <ListMid>
              {items.map((item) => {
                // <ProductsCard key={item.pk} product={item} />
                return (
                  <ProductsEach to={`/products/${item.pk}`} key={item.pk}>
                    <ProductEachPhoto src={item.photos[0].picture} alt='' />

                    {meData && (
                      <ToggleLike
                        onClick={(e) => {
                          e.preventDefault();
                          handleLiked(item.pk);
                        }}
                      >
                        <ProductLike>
                          {item.is_liked ? (
                            <FavoriteIcon sx={{ color: '#e20000' }} />
                          ) : (
                            <FavoriteIcon color='disabled' />
                          )}
                        </ProductLike>
                      </ToggleLike>
                    )}
                    <ProductEachDetails>
                      <ProductTitle>{item.name}</ProductTitle>
                      <ProductDesc>{item.detail}</ProductDesc>
                      <ProductPrice>${item.price}</ProductPrice>
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
