import React, { useState, useRef, useEffect } from 'react';
import {
  CartLink,
  FaLink,
  HeaderUp,
  HeaderWrapper,
  LeftSide,
  MiddleSide,
  MidLink,
  ModalBtn,
  PermLink,
  RightIcon,
  RightSide,
  DropMenu,
  DropMenuParents,
  DropMenuChild,
  DropMenuItem,
  HeaderDown,
  DropdownButton,
  DropMenuList,
  TopWrapper,
  FreeInfo,
  FreeInfoTitle,
  HeaderWrap,
  NoUserModal,
  NoUserContents,
  NoUserTitle,
  NoUserText,
  NoUserBtn,
  NoUserContainer,
  DropChildWrap,
  ModalBtnWrap,
  ModalBtnDetail,
  FlagBtn,
  ItemCount,
} from './HeaderElements';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import axios from '../../api/axios';

const CartCount = ({ setIsCount, isCount, payList, setPayList }) => {
  const [carts, setCarts] = useState([]);
  // const [cartList, setCartList] = useState();

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
  }, [isCount, payList]);

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
