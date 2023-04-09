import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';
import {
  ListMid,
  ListMidWrap,
  ListTop,
  ProductsList,
  ProductsListContainer,
  ProductsWrap,
  SelectWrap,
  TotalCount,
  TotalCountWrap,
  EmptyWhishlist,
} from '../ProductPage/ProductListElements';
import Loading from '../../components/Loading';
import ProductsCard from '../ProductPage/ProductCard';
import { useNavigate } from 'react-router-dom';

const sort = [
  { value: 'Newest', text: 'Newest first' },
  { value: 'Popular', text: 'Most Popular' },
  { value: 'HighToLow', text: 'Price: high to low' },
  { value: 'LowToHigh', text: 'Price: low to high' },
];

const WishlistPage = ({ meData }) => {
  // const [items, setItems] = useState([]);
  // true false -> Put 눌러졌을때 상태바꾸기
  const [addLiked, setAddLiked] = useState();
  const [loading, setLoading] = useState(false);
  const [wishItems, setWishItems] = useState([]);
  const [errMsg, setErMsg] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);
  const navigate = useNavigate();

  const getItems = async () => {
    try {
      const wishListInfo = await axios.get('wishlists/', {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });
      console.log('wishListInfo', wishListInfo?.data?.products);
      setWishItems(wishListInfo?.data?.products);
      setLoading(false);

      // if (wishItems.detail === 'No wishlist') {
      //   setLoading(false);
      //   setIsEmpty(!isEmpty);
      // }
    } catch (err) {
      if (err.response?.status === 400) {
        // console.log('400 error');

        setLoading(false);
        setIsEmpty(!isEmpty);
      } else {
        console.log('Error page or empty page');
        setErMsg('Error page or empty page');
      }
    }
  };

  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    getItems();
    // setLoading(false);
  }, []);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <ProductsListContainer>
      <h1>Wishlists</h1>
      <ProductsWrap>
        {isEmpty ? (
          <ProductsList>
            <EmptyWhishlist>
              <div>Click ♡ to add to your wish list.</div>
            </EmptyWhishlist>
          </ProductsList>
        ) : (
          <ProductsList>
            <ListTop>
              <TotalCountWrap>
                <TotalCount style={{ fontSize: '13px' }}>
                  Total {wishItems?.length}
                </TotalCount>
              </TotalCountWrap>
              <SelectWrap>
                <select
                  // onChange={handleOptionChange}
                  name='category-list'
                  id='category-list'
                >
                  {sort.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.text}
                    </option>
                  ))}
                </select>
              </SelectWrap>
            </ListTop>

            <ListMidWrap>
              <ListMid>
                {wishItems?.map((all) => {
                  return (
                    <ProductsCard
                      key={all.pk}
                      all={all}
                      // kindEach={kindEach}
                      meData={meData}
                    />
                  );
                })}
              </ListMid>
            </ListMidWrap>
          </ProductsList>
        )}
      </ProductsWrap>
    </ProductsListContainer>
  );
};

export default WishlistPage;
