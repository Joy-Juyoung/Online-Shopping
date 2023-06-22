import React, { useState, useRef, useEffect } from 'react';
import { CartLink, RightIcon, ItemCount } from './HeaderElements';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import axios from '../../api/axios';

const CartCount = ({ setIsCount, isCount, payList, setPayList }) => {
  const [carts, setCarts] = useState([]);

  const getAllCart = async () => {
    const cartList = await axios.get('/carts/', {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    setCarts(cartList?.data);
    // setCartList(carts);
    // setCartsTotal(cartList?.data?.length);
  };

  useEffect(() => {
    getAllCart();
    setIsCount(false);
  }, [isCount]);

  return (
    <>
      {carts?.length === 0 ? (
        <RightIcon>
          <CartLink to='/carts'>
            <AddShoppingCartIcon fontSize='medium' />
          </CartLink>
        </RightIcon>
      ) : (
        <RightIcon>
          <CartLink to='/carts'>
            <ItemCount>{carts?.length}</ItemCount>
            <AddShoppingCartIcon fontSize='medium' />
          </CartLink>
        </RightIcon>
      )}
    </>
  );
};
export default CartCount;
