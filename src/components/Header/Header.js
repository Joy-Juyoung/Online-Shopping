import React, { useState,useRef } from 'react';
//import { Link } from 'react-router-dom';
import FlagIcon from '@mui/icons-material/Flag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
//import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Modal } from './Modal';
import {
  HeaderContainer,
  HeaderWrapper,
  HeaderUp,
  LeftSide,
  ModalBtn,
  SearchIcon,
  MiddleSide,
  MidLink,
  RightSide,
  RightIcon,
  FaLink,
  CartLink,
  PermLink,
  HeaderDown,
  DropdownContainer,
  DropdownButton,
  Menu,
  Ul,
  Li,
} from './HeaderElements';
import useDetectClose from './useDetectClose';

const Header = () => {

  const dropdownRef = useRef(null);  
  const [topIsOpen, setMenuTopIsOpen] = useState(false);
  const [bottomIsOpen, setMenuBottomIsOpen] = useState(false);
  const [outerIsOpen, setMenuOuterIsOpen] = useState(false);
  const [shoesIsOpen, setMenuShoesIsOpen] = useState(false);
  const [accessoriesIsOpen, setMenuAccessoriesIsOpen] = useState(false);

  const closeHoverMenu = () => {
    setMenuTopIsOpen(false);
    setMenuBottomIsOpen(false);
    setMenuOuterIsOpen(false);
    setMenuShoesIsOpen(false);
    setMenuAccessoriesIsOpen(false);
  };
  
  useDetectClose(dropdownRef, closeHoverMenu); 

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((showModal) => !showModal);
  };

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderUp>
          <LeftSide>
            {/* 인풋 드랍 다운 또는 버튼 드랍다운 중 결정해야함*/}
            <ModalBtn onClick={openModal}> Search</ModalBtn>
            <Modal showModal={showModal} setShowModal={setShowModal} />
            {/* <SearchIcon>
                        <SearchRoundedIcon fontSize='medium' color='disabled'/>
                    </SearchIcon> */}
          </LeftSide>
          {/* 로고 이미지로 할지 글자로 할지 정해야함 */}
          <MiddleSide>
            <MidLink to='/'>
              <div>MUSINSA</div>
            </MidLink>
          </MiddleSide>
          <RightSide>
            {/* 위치 드랍 다운 선택 */}
            <RightIcon>
              <FlagIcon fontSize='medium' />
            </RightIcon>
            {/* 추후 각각 링크 변경*/}
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
          {/* 드랍 다운 해야함*/}
          <DropdownContainer ref={dropdownRef}>
            <DropdownButton onMouseOver={() => setMenuTopIsOpen(true)} onMouseLeave={() => setMenuTopIsOpen(false)}>
              {/* 각각 링크 걸어야함 */}
              TOPS
            </DropdownButton>
            <Menu isDropped={topIsOpen}>
              <Ul>
                {/* 각각 링크 걸어야함 */}
                <Li>Short Sleeves</Li>
                <Li>Long Sleeves</Li>
                <Li>Shorts & Blouses</Li>
                <Li>Sweatshirts</Li>
                <Li>Hoodies</Li>
              </Ul>
            </Menu>
          </DropdownContainer>

          <DropdownContainer ref={dropdownRef}>
            <DropdownButton onMouseOver={() => setMenuBottomIsOpen(true)} onMouseLeave={() => setMenuBottomIsOpen(false)}>
              {/* 각각 링크 걸어야함 */}
              BOTTOMS
            </DropdownButton>
            <Menu isDropped={bottomIsOpen}>
              <Ul>
                {/* 각각 링크 걸어야함 */}
                <Li>Denim</Li>
                <Li>Joggers</Li>
                <Li>Jeans</Li>
                <Li>Shors</Li>
                <Li>Jumpsuits</Li>
              </Ul>
            </Menu>
          </DropdownContainer>
          <DropdownContainer ref={dropdownRef}>
            <DropdownButton onMouseOver={() => setMenuOuterIsOpen(true)} onMouseLeave={() => setMenuOuterIsOpen(false)}>
              {/* 각각 링크 걸어야함 */}
              OUTERS
            </DropdownButton>
            <Menu isDropped={outerIsOpen}>
              <Ul>
                {/* 각각 링크 걸어야함 */}
                <Li>Blazers</Li>
                <Li>Hooded Jackets</Li>
                <Li>Cardigans</Li>
                <Li>Coats</Li>
                <Li>Bomber Jackets</Li>
              </Ul>
            </Menu>
          </DropdownContainer>

          <DropdownContainer ref={dropdownRef}>
            <DropdownButton onMouseOver={() => setMenuShoesIsOpen(true)} onMouseLeave={() => setMenuShoesIsOpen(false)}>
              {/* 각각 링크 걸어야함 */}
              SHOES
            </DropdownButton>
            <Menu isDropped={shoesIsOpen}>
              <Ul>
                {/* 각각 링크 걸어야함 */}
                <Li>Boots</Li>
                <Li>Sports Shoes</Li>
                <Li>Sneakers</Li>
                <Li>Loafers</Li>
                <Li>Sandals</Li>
              </Ul>
            </Menu>
          </DropdownContainer>

          <DropdownContainer ref={dropdownRef}>
            <DropdownButton onMouseOver={() => setMenuAccessoriesIsOpen(true)} onMouseLeave={() => setMenuAccessoriesIsOpen(false)}>
              {/* 각각 링크 걸어야함 */}
              ACCESSORIES
            </DropdownButton>
            <Menu isDropped={accessoriesIsOpen}>
              <Ul>
                {/* 각각 링크 걸어야함 */}
                <Li>Cap & Hat</Li>
                <Li>Rings</Li>
                <Li>Watches</Li>
                <Li>Earrings</Li>
                <Li>Wallets</Li>
              </Ul>
            </Menu>
          </DropdownContainer>
        </HeaderDown>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
