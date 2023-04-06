import React, { useEffect, useState } from 'react';
// import { useRef } from 'react';
import axios from '../../api/axios';
import {
  WishlistContainer,
  WishlistDrop,
  WishlistWrapper,
} from './WishlistElements';

function WishlistPage() {
  // const errRef = useRef();
  const [itemWishList, setItemsWishList] = useState([]);
  const [errMsg, setErMsg] = useState('');

  const getItemsWishList = async () => {
    try {
      const wishListInfo = await axios.get('wishlists/', {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });
      console.log('wishListInfo', wishListInfo?.data?.products);
      setItemsWishList(wishListInfo?.data?.products);
    } catch (err) {
      if (err.response?.status === 400) {
        console.log('400 error');
        setErMsg('Error 400: No Data in Server Response');
      } else {
        console.log('Error page or empty page');
        setErMsg('Error page or empty page');
      }
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    getItemsWishList();
  }, []);

  return (
    <WishlistContainer>
      <WishlistWrapper>
        {errMsg ? (
          <h1 style={{ display: errMsg ? 'block' : 'none' }}>{errMsg}</h1>
        ) : (
          <h1>Wishlist</h1>
        )}
        <WishlistDrop>
          {itemWishList?.map((wish) => {
            return (
              <ul key={wish.pk}>
                <li>{wish.name}</li>
              </ul>
            );
          })}
        </WishlistDrop>
      </WishlistWrapper>
    </WishlistContainer>
  );
}

export default WishlistPage;
