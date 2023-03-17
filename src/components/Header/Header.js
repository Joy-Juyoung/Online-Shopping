import React, { useState, useRef } from 'react';
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
  TopWrapper,
  FreeInfo,
  FreeInfoTitle,
  HeaderWrap,
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

  // const [showModal, setShowModal] = useState(false);

  // const openModal = () => {
  //   setShowModal((showModal) => !showModal);
  // };
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <HeaderContainer>
      <HeaderWrap>
        <HeaderWrapper>
          <HeaderUp>
            <LeftSide>
              {/* 인풋 드랍 다운 또는 버튼 드랍다운 중 결정해야함*/}

              <ModalBtn
                onClick={() => {
                  setModalOpen(true);
                }}
              >
                Search
              </ModalBtn>
              {modalOpen && <Modal setOpenModal={setModalOpen} />}

              {/* <ModalBtn onClick={openModal}> Search</ModalBtn>
            
            <Modal showModal={showModal} setShowModal={setShowModal} /> */}
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
            {/* <DropdownContainer ref={dropdownRef}>
            <DropdownButton onMouseOver={() => setMenuTopIsOpen(true)}>
              TOPS
            </DropdownButton>
            <Menu
              isDropped={topIsOpen}
              onMouseLeave={() => setMenuTopIsOpen(false)}
            >
              <Ul>
                <Li>Short Sleeves</Li>
                <Li>Long Sleeves</Li>
                <Li>Shorts & Blouses</Li>
                <Li>Sweatshirts</Li>
                <Li>Hoodies</Li>
              </Ul>
            </Menu>
          </DropdownContainer>

          <DropdownContainer ref={dropdownRef}>
            <DropdownButton onMouseOver={() => setMenuBottomIsOpen(true)}>
              BOTTOMS
            </DropdownButton>
            <Menu
              isDropped={bottomIsOpen}
              onMouseLeave={() => setMenuBottomIsOpen(false)}
            >
              <Ul>
                <Li>Denim</Li>
                <Li>Joggers</Li>
                <Li>Jeans</Li>
                <Li>Shorts</Li>
                <Li>Jumpsuits</Li>
              </Ul>
            </Menu>
          </DropdownContainer>

          <DropdownContainer ref={dropdownRef}>
            <DropdownButton onMouseOver={() => setMenuOuterIsOpen(true)}>
              OUTERS
            </DropdownButton>
            <Menu
              isDropped={outerIsOpen}
              onMouseLeave={() => setMenuOuterIsOpen(false)}
            >
              <Ul>
                <Li>Jackets</Li>
                <Li>Cardigans</Li>
                <Li>Coats</Li>
              </Ul>
            </Menu>
          </DropdownContainer>

          <DropdownContainer ref={dropdownRef}>
            <DropdownButton onMouseOver={() => setMenuShoesIsOpen(true)}>
              SHOES
            </DropdownButton>
            <Menu
              isDropped={shoesIsOpen}
              onMouseLeave={() => setMenuShoesIsOpen(false)}
            >
              <Ul>
                <Li>Boots</Li>
                <Li>Sneakers</Li>
                <Li>Sandals</Li>
              </Ul>
            </Menu>
          </DropdownContainer>

          <DropdownContainer ref={dropdownRef}>
            <DropdownButton onMouseOver={() => setMenuAccessoriesIsOpen(true)}>
              ACCESSORIES
            </DropdownButton>
            <Menu
              isDropped={accessoriesIsOpen}
              onMouseLeave={() => setMenuAccessoriesIsOpen(false)}
            >
              <Ul>
                <Li>Cap & Hat</Li>
                <Li>Rings</Li>
                <Li>Watches</Li>
              </Ul>
            </Menu>
          </DropdownContainer>*/}
          </HeaderDown>
        </HeaderWrapper>
        <TopWrapper>
          <FreeInfo>
            <FreeInfoTitle>
              <p>FREE SHIPPING on all orders $200+</p>
            </FreeInfoTitle>
          </FreeInfo>
        </TopWrapper>
      </HeaderWrap>
    </HeaderContainer>
  );
};

export default Header;
