import React from 'react';
//import { Link } from 'react-router-dom';
import FlagIcon from '@mui/icons-material/Flag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
//import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import {
  HeaderContainer,
  HeaderWrapper,
  HeaderUp,
  LeftSide,
  SearchBar,
  SearchIcon,
  MiddleSide,
  MidLink,
  RightSide,
  RightIcon,
  HeaderDown,
  DropdownContainer,
  DropdownButton,
  Menu,
  Ul,
  Li,
} from './HeaderElements';
import useDetectClose from './useDetectClose';

const Header = () => {
  const [topIsOpen, topRef, topHandler] = useDetectClose(false);
  const [bottomIsOpen, bottomRef, bottomHandler] = useDetectClose(false);
  const [outerIsOpen, outerRef, outerHandler] = useDetectClose(false);
  const [shoesIsOpen, shoesRef, shoesHandler] = useDetectClose(false);
  const [accessoriesIsOpen, accessoriesRef, accessoriesHandler] =
    useDetectClose(false);

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderUp>
          <LeftSide>
            {/* 인풋 드랍 다운 또는 버튼 드랍다운 중 결정해야함*/}
            <SearchBar placeholder='Search' />
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
              <FavoriteBorderIcon fontSize='medium' />
            </RightIcon>
            <RightIcon>
              <AddShoppingCartIcon fontSize='medium' />
            </RightIcon>
            <RightIcon>
              <PermIdentityRoundedIcon fontSize='medium' />
            </RightIcon>
          </RightSide>
        </HeaderUp>

        <HeaderDown>
          {/* 드랍 다운 해야함*/}
          <DropdownContainer>
            <DropdownButton onClick={topHandler} ref={topRef}>
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
          <DropdownContainer>
            <DropdownButton onClick={bottomHandler} ref={bottomRef}>
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
          <DropdownContainer>
            <DropdownButton onClick={outerHandler} ref={outerRef}>
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
          <DropdownContainer>
            <DropdownButton onClick={shoesHandler} ref={shoesRef}>
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
          <DropdownContainer>
            <DropdownButton onClick={accessoriesHandler} ref={accessoriesRef}>
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
