import React from 'react';
//import { Link } from 'react-router-dom';
import FlagIcon from '@mui/icons-material/Flag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import {
    HeaderContainer,
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
    Li
  } from './HeaderElements';
import useDetectClose from "./useDetectClose";

const Header = () => {
        const [topIsOpen, topRef, topHandler] = useDetectClose(false);
        const [bottomIsOpen, bottomRef, bottomHandler] = useDetectClose(false);
        const [outerIsOpen, outerRef, outerHandler] = useDetectClose(false);
        const [shoesIsOpen, shoesRef, shoesHandler] = useDetectClose(false);
        const [accessoriesIsOpen, accessoriesRef, accessoriesHandler] = useDetectClose(false);

      
      
  return (
        <HeaderContainer>
        <HeaderUp>
            <LeftSide>
                {/* 인풋 드랍 다운 또는 버튼 드랍다운 중 결정해야함*/}
                <SearchBar placeholder='Search'/>
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
                    <FlagIcon fontSize='medium'/>
                </RightIcon>
                {/* 추후 각각 링크 변경*/}
                <RightIcon>
                    <FavoriteBorderIcon fontSize='medium'/>
                </RightIcon>
                <RightIcon>
                    <AddShoppingCartIcon fontSize='medium'/>
                </RightIcon>
                <RightIcon>
                    <PermIdentityRoundedIcon fontSize='medium'/>
                </RightIcon>
            </RightSide>
        </HeaderUp>

        <HeaderDown>
            {/* 드랍 다운 해야함*/}
            <DropdownContainer>
                <DropdownButton onClick={topHandler} ref={topRef}>
                    TOPS
                </DropdownButton>
                <Menu isDropped={topIsOpen}>
                    <Ul>
                        <Li>
                            Short Sleeves
                        </Li>
                        <Li>
                            Long Sleeves
                        </Li>
                        <Li>
                            Shorts & Blouses
                        </Li>
                        <Li>
                            Sweatshirts
                        </Li>
                        <Li>
                            Hoodies
                        </Li>
                    </Ul>
                </Menu>
            </DropdownContainer>
            <DropdownContainer>
                <DropdownButton onClick={bottomHandler} ref={bottomRef}>
                    BOTTOMS
                </DropdownButton>
                <Menu isDropped={bottomIsOpen}>
                    <Ul>
                        <Li>
                            Denim
                        </Li>
                        <Li>
                            Joggers
                        </Li>
                        <Li>
                            Jeans
                        </Li>
                        <Li>
                            Shors
                        </Li>
                        <Li>
                            Jumpsuits
                        </Li>
                    </Ul>
                </Menu>
            </DropdownContainer>
            <DropdownContainer>
                <DropdownButton onClick={outerHandler} ref={outerRef}>
                    OUTERS
                </DropdownButton>
                <Menu isDropped={outerIsOpen}>
                    <Ul>
                        <Li>
                            Blazers
                        </Li>
                        <Li>
                            Hooded Jackets
                        </Li>
                        <Li>
                            Cardigans
                        </Li>
                        <Li>
                            Coats
                        </Li>
                        <Li>
                            Bomber Jackets
                        </Li>
                    </Ul>
                </Menu>
            </DropdownContainer>
            <DropdownContainer>
                <DropdownButton onClick={shoesHandler} ref={shoesRef}>
                    SHOES
                </DropdownButton>
                <Menu isDropped={shoesIsOpen}>
                    <Ul>
                        <Li>
                            Boots
                        </Li>
                        <Li>
                            Sports Shoes
                        </Li>
                        <Li>
                            Sneakers
                        </Li>
                        <Li>
                            Loafers
                        </Li>
                        <Li>
                            Sandals
                        </Li>
                    </Ul>
                </Menu>
            </DropdownContainer>
            <DropdownContainer>
                <DropdownButton onClick={accessoriesHandler} ref={accessoriesRef}>
                    ACCESSORIES
                </DropdownButton>
                <Menu isDropped={accessoriesIsOpen}>
                    <Ul>
                        <Li>
                            Cap & Hat
                        </Li>
                        <Li>
                            Rings
                        </Li>
                        <Li>
                            Watches
                        </Li>
                        <Li>
                            Earrings
                        </Li>
                        <Li>
                            Wallets
                        </Li>
                    </Ul>
                </Menu>
            </DropdownContainer>
        </HeaderDown>
        </HeaderContainer>

  );
};

export default Header;