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
  AdminLink,
} from './HeaderElements';
import FlagIcon from '@mui/icons-material/Flag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import LogoutIcon from '@mui/icons-material/Logout';
import Search from './Search';
import TestSearch from './TestSearch';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import DropUser from './DropUser';
import { ButtonSmall, ButtonUtils } from '../ButtonElements';
import Modal from '../Modal';
import SearchIcon from '@mui/icons-material/Search';
import AddBalance from '../AddBalance';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import axios from '../../api/axios';

const CartCount = ({
  cartsTotal,
  setCartsTotal,
  isCartChange,
  setIsCartChange,
  carts,
}) => {
  // const [carts, setCarts] = useState([]);
  const [cartList, setCartList] = useState();
  // const getAllCart = async () => {
  //   const cartList = await axios.get('/carts/', {
  //     headers: { 'Content-Type': 'application/json' },
  //     withCredentials: true,
  //   });
  //   setCarts(cartList?.data);
  //   // setCartList(carts);
  //   setCartsTotal(cartList?.data?.length);
  // };

  // useEffect(() => {
  //   setCartList(carts);
  // }, [cartsTotal]);

  // useEffect(() => {
  //   // setCartList(carts);
  //   setCartsTotal(carts?.length);
  // }, [carts]);

  // useEffect(() => {
  //   setCartsTotal(carts?.length);
  // }, []);

  // useEffect(() => {
  //   getAllCart();
  // }, [cartsTotal]);

  return (
    <>
      {cartsTotal === 0 ? (
        <RightIcon>
          <CartLink to='/carts'>
            <AddShoppingCartIcon fontSize='medium' />
          </CartLink>
        </RightIcon>
      ) : (
        <RightIcon>
          <CartLink to='/carts'>
            <ItemCount>{cartsTotal}</ItemCount>
            <AddShoppingCartIcon fontSize='medium' />
          </CartLink>
        </RightIcon>
      )}
    </>
  );
};
export default CartCount;
