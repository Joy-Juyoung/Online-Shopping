import React, { useState, useRef, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import axios from '../../api/axios';
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
} from './HeaderElements';
import FlagIcon from '@mui/icons-material/Flag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import LogoutIcon from '@mui/icons-material/Logout';
import Search from './Search';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import DropUser from './DropUser';

import { ButtonSmall, ButtonUtils } from '../ButtonElements';
import Modal from '../Modal';
import Avatar, { ConfigProvider } from 'react-avatar';

// import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

const CATEGORY_URL = '/products/productAllParentsKinds';
const Header = ({ meData }) => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [me = meData, setMe] = useState();
  const [logout, setLogout] = useState();
  const [clickAccount, setClickAccount] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalShown, toggleModal] = useState(false);

  const ref = useRef();
  const searchRef = useRef();

  console.log('Header Me', me);

  const getCategory = async () => {
    const categoryData = await axios.get(CATEGORY_URL, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    // console.log('Header Load Me', meData);
    setCategories(categoryData?.data);
  };

  useEffect(() => {
    getCategory();
    // setMe(meData);
  }, [me]);

  const handleLogout = async () => {
    setLoading(true);
    const loggedOut = await axios.post(
      '/users/log-out',
      {
        username: me.username,
      },
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      }
    );
    console.log('Header logout Me', loggedOut?.data);
    setLogout(loggedOut?.data);
    setMe('');
    navigate('/');
    window.location.reload();
    setLoading(false);
  };

  const handleAccount = () => {
    setClickAccount(!clickAccount);
  };

  // const handleDropOut = () => {
  //   setClickAccount(false);
  // };

  // detect click outside to close
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (clickAccount && ref.current && !ref.current.contains(e.target)) {
        setClickAccount(false);
      }
      if (
        isModalOpen &&
        searchRef.current &&
        !searchRef.current.contains(e.target)
      ) {
        setIsModalOpen(false);
      }
    };
    document.addEventListener('click', checkIfClickedOutside);
    return () => {
      document.removeEventListener('click', checkIfClickedOutside);
    };
  }, [clickAccount, isModalOpen]);

  const hoverHandler = (e) => {
    console.log('onMouseEnter');
    e.target.style.borderBottom = '3px solid grey';
  };
  const outHandler = (e) => {
    console.log('onMouseLeave');
    e.target.style.borderBottom = 'none';
  };

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );

  return (
    <>
      <HeaderWrap>
        <HeaderWrapper>
          <HeaderUp>
            <LeftSide>
              <ModalBtnWrap ref={searchRef}>
                <ModalBtn onClick={() => setIsModalOpen(true)}>
                  <ModalBtnDetail>
                    <SearchIcon color='disabled' fontSize='medium' />
                    <span>Search</span>
                  </ModalBtnDetail>
                </ModalBtn>
              </ModalBtnWrap>
              {isModalOpen && <Search onClose={() => setIsModalOpen(false)} />}
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

              {!me && logout !== null ? (
                <>
                  <RightIcon>
                    <FaLink>
                      <FavoriteBorderIcon
                        fontSize='medium'
                        onClick={() => {
                          toggleModal(!modalShown);
                        }}
                      />
                    </FaLink>
                  </RightIcon>
                  <RightIcon>
                    <CartLink>
                      <AddShoppingCartIcon
                        fontSize='medium'
                        onClick={() => {
                          toggleModal(!modalShown);
                        }}
                      />
                    </CartLink>
                  </RightIcon>
                  <RightIcon>
                    <PermLink to='/login'>
                      <PermIdentityRoundedIcon fontSize='medium' />
                    </PermLink>
                  </RightIcon>
                  <Modal
                    shown={modalShown}
                    close={() => {
                      toggleModal(false);
                    }}
                  >
                    <NoUserModal>
                      <NoUserContainer>
                        <NoUserContents>
                          <NoUserTitle>Login Required</NoUserTitle>
                          <NoUserText>
                            In order to access this page, you need to login.
                          </NoUserText>
                          <NoUserText>
                            Whould you like to login now or later?
                          </NoUserText>
                        </NoUserContents>
                      </NoUserContainer>
                    </NoUserModal>
                    <NoUserBtn>
                      <ButtonSmall
                        onClick={() => {
                          toggleModal(false);
                        }}
                      >
                        Later
                      </ButtonSmall>
                      <Link to='/login' style={{ textDecoration: 'none' }}>
                        <ButtonSmall
                          style={{ background: '#0A0F18', color: '#fff' }}
                          onClick={() => {
                            toggleModal(false);
                          }}
                        >
                          LOGIN NOW
                        </ButtonSmall>
                      </Link>
                    </NoUserBtn>
                  </Modal>
                </>
              ) : (
                <>
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
                    {!isModalOpen && (
                      <>
                        <PermLink style={{ zIndex: '3' }}>
                          <PermIdentityRoundedIcon
                            fontSize='medium'
                            onClick={handleAccount}
                            ref={ref}
                          />
                        </PermLink>
                        {clickAccount && <DropUser meData={meData} />}
                      </>
                    )}
                  </RightIcon>
                  <RightIcon>
                    <PermLink>
                      <LogoutIcon fontSize='medium' onClick={handleLogout} />
                    </PermLink>
                  </RightIcon>
                </>
              )}
            </RightSide>
          </HeaderUp>
          <HeaderDown>
            <DropMenu>
              {categories.map((category) => {
                return (
                  <DropMenuList key={category.pk}>
                    {/* <DropMenuWrap></DropMenuWrap> */}
                    <DropMenuParents>
                      <DropdownButton
                        to={`/products/productAllParentsKinds/${category.pk}`}
                      >
                        <span>{category.name.toUpperCase()}</span>
                      </DropdownButton>
                      <DropChildWrap>
                        <DropMenuChild>
                          {category.productKinds?.map((child) => {
                            return (
                              <Link
                                key={child.pk}
                                style={{
                                  color: 'black',
                                  textDecoration: 'none',
                                }}
                                to={`/products/productAllChildKinds/${child.pk}`}
                              >
                                <DropMenuItem>{child.name}</DropMenuItem>
                              </Link>
                            );
                          })}
                        </DropMenuChild>
                      </DropChildWrap>
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
    </>
  );
};

export default Header;
