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
import TestModal from './TestModal';
import { Link } from 'react-router-dom';

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

  console.log('category', categories);

  useEffect(() => {
    getCategory();
  }, []);


  // const modalRef = useRef();
  // const [isOpen, setOpen] = useState(false);
  // const handleClick = (e) => {
  //   if(isOpen && !modalRef.current.contains(e.target)) 
  //     setOpen(true);
  // };

  // useEffect(() => {
  //   window.addEventListener('click', handleClick);
  //   return () => {
  //     window.removeEventListener('click', handleClick);
  //   };
  // },[])


  // const [isOpen, setOpen] = useState(false);
  // const handleClick =(ref, () => {
  //   setOpen(true);
  // });

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* <HeaderContainer> */}
      <HeaderWrap>
        <HeaderWrapper>
          <HeaderUp>
            <LeftSide>
              {/* <ModalBtn onClick={handleClick}>Search</ModalBtn>
              {isOpen && <TestModal setOpen={setOpen}/>} */}

              {/* <ModalBtn onClick={handleClick}>Search</ModalBtn>
              {isOpen && <TestModal ref={modalRef}/>} */}

              <ModalBtn onClick={() => setIsModalOpen(true)}>Search</ModalBtn>
              {isModalOpen && <TestModal onClose={() => setIsModalOpen(false)} />} 

              
            </LeftSide>

            <MiddleSide>
              <MidLink to='/'>
                <div>BlanketCLoset</div>
              </MidLink>
            </MiddleSide>
            <RightSide>
              <RightIcon>
                <FlagIcon fontSize='medium' />
              </RightIcon>

              <RightIcon>
                <FaLink to='/wishlist'>
                  <FavoriteBorderIcon fontSize='medium' />
                </FaLink>
              </RightIcon>
              <RightIcon>
                <CartLink to='/carts'>
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
                      {/* <DropdownButton>{category.name}</DropdownButton> */}
                      <DropdownButton to='/products'>{category.name}</DropdownButton>
                      <DropMenuChild >
                        {category.productKinds?.map((child) => {
                          return (
                            <DropMenuItem key={child.pk}>
                              <Link style={{ color:'black', textDecoration: 'none' }} 
                                    to={`/products/productAllChildKinds/${child.pk}`}>
                                    {child.name}
                              </Link>
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