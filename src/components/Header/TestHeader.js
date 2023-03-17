import React, { useState, useRef, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import axios from '../../api/axios';
import {
  CartLink,
  FaLink,
  HeaderContainer,
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
} from './HeaderElements';
import FlagIcon from '@mui/icons-material/Flag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
// import {
//   DropMenu,
//   DropMenuParents,
//   DropMenuChild,
//   DropMenuItem,
// } from './TestHeaderElements';

const CATEGORY_URL = '/products/productAllParentsKinds';
const TestHeader = () => {
  const [categories, setCategories] = useState([]);

  const getCategory = async () => {
    const categoryData = await axios.get(CATEGORY_URL, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    // console.log('category', categoryData);
    // console.log('categoryData', categoryData?.data);
    setCategories(categoryData?.data);
  };

  // console.log('category', categories);

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <>
      {/* <HeaderContainer> */}
      <HeaderWrap>
        <HeaderWrapper>
          <HeaderUp>
            <LeftSide>
              <ModalBtn>Search</ModalBtn>
            </LeftSide>

            <MiddleSide>
              <MidLink to='/'>
                <div>MUSINSA</div>
              </MidLink>
            </MiddleSide>
            <RightSide>
              <RightIcon>
                <FlagIcon fontSize='medium' />
              </RightIcon>

              <RightIcon>
                <FaLink>
                  <FavoriteBorderIcon fontSize='medium' />
                </FaLink>
              </RightIcon>
              <RightIcon>
                <CartLink>
                  <AddShoppingCartIcon fontSize='medium' />
                </CartLink>
              </RightIcon>
              <RightIcon>
                <PermLink to='/login'>
                  <PermIdentityRoundedIcon fontSize='medium' />
                </PermLink>
              </RightIcon>
            </RightSide>
          </HeaderUp>
          <HeaderDown>
            <DropMenu>
              {categories.map((category) => {
                return (
                  <DropMenuList key={category.pk}>
                    <DropMenuParents>
                      <DropdownButton>{category.name}</DropdownButton>

                      <DropMenuChild>
                        {category.productKinds.map((child) => {
                          return (
                            <DropMenuItem key={child.pk}>
                              <span>{child.name}</span>
                            </DropMenuItem>
                          );
                        })}
                      </DropMenuChild>
                    </DropMenuParents>
                  </DropMenuList>
                );
              })}
            </DropMenu>
          </HeaderDown>
        </HeaderWrapper>
      </HeaderWrap>
      <TopWrapper>
        <FreeInfo>
          <FreeInfoTitle>FREE SHIPPING on all orders $200+</FreeInfoTitle>
        </FreeInfo>
      </TopWrapper>
      {/* </HeaderContainer> */}
    </>
  );
};

export default TestHeader;
