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
  DropAccount,
  LinkAccount,

  DropUl,
  DropLi,
  NoUserModal,
  CloseBtn,
  NoUserContents,
  NoUserTitle,
  NoUserText,
  NoUserBtn,
  NoUserContainer,
  DropAccountWrap,
  DropAccountTopCover,
  DropMenuWrap,
  DropChildWrap,

  ModalBtnWrap,
  ModalBtnDetail,

} from './HeaderElements';
import FlagIcon from '@mui/icons-material/Flag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import LogoutIcon from '@mui/icons-material/Logout';
import TestModal from './TestModal';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';

import PopupAddress from '../PopupAddress';
import CloseIcon from '@mui/icons-material/Close';
import { ButtonSmall, ButtonUtils } from '../ButtonElements';
import Modal from '../Modal';
import Avatar, { ConfigProvider } from 'react-avatar';


import SearchIcon from '@mui/icons-material/Search';


const CATEGORY_URL = '/products/productAllParentsKinds';
const Header = ({ meData }) => {
  // let timer;
  const accountRef = useRef();
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [me = meData, setMe] = useState();
  const [logout, setLogout] = useState();
  const [clickAccount, setClickAccount] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isOpenAddress, setIsOpenAddress] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const [showNoUser, setShowNoUser] = useState(false);
  // const [hideNoUser, setHideNoUser] = useState(false);
  const [modalShown, toggleModal] = useState(false);

  const toggleAddress = () => {
    setIsOpenAddress(!isOpenAddress);
  };

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

  const handleDropOut = () => {
    setClickAccount(false);
  };

  // const noUserClick = () => {
  //   setShowNoUser(true);
  // };

  // const noUserClose = () => {
  //   setShowNoUser(false);
  // };

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );

  return (
    <>
      {/* <HeaderContainer> */}
      <HeaderWrap>
        <HeaderWrapper>
          <HeaderUp>
            <LeftSide>
              <ModalBtnWrap>
              <ModalBtn onClick={() => setIsModalOpen(true)}>
                <ModalBtnDetail>
                  <SearchIcon color='disabled' fontSize='medium'/>
                  <span>Search</span>
                </ModalBtnDetail>
              </ModalBtn>
              </ModalBtnWrap>
              {isModalOpen && (
                <TestModal onClose={() => setIsModalOpen(false)} />
              )}
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
                    {!clickAccount ? (
                      <PermLink>
                        <PermIdentityRoundedIcon
                          fontSize='medium'
                          onClick={handleAccount}
                        />
                      </PermLink>
                    ) : (
                      <>
                        <PermLink>
                          <PermIdentityRoundedIcon
                            fontSize='medium'
                            onClick={handleAccount}
                          />
                        </PermLink>

                        <DropAccount ref={accountRef}>
                          <DropAccountWrap>
                            <DropUl>
                              <LinkAccount
                                to='/userAccount'
                                onClick={handleDropOut}
                              >
                                <DropLi>
                                  <ConfigProvider
                                    colors={['red', 'grey', 'green']}
                                  >
                                    <Avatar
                                      name={me.username}
                                      round={true}
                                      size={30}
                                    />
                                  </ConfigProvider>
                                  <span
                                    style={{
                                      marginLeft: '10px',
                                      fontWeight: '600',
                                      fontSize: '15px',
                                    }}
                                  >
                                    {me.username}
                                  </span>
                                </DropLi>
                                <DropLi>My Profile</DropLi>
                              </LinkAccount>
                              <LinkAccount
                                to='/testPage'
                                onClick={handleDropOut}
                              >
                                <DropLi>My Orders</DropLi>
                              </LinkAccount>

                              <LinkAccount onClick={toggleAddress}>
                                <DropLi>My Addresses</DropLi>
                              </LinkAccount>
                              {/* {isOpenAddress && (
                                <PopupAddress
                                  handleClose={toggleAddress}
                                  style={{ background: 'none' }}
                                  meData={meData}
                                  onClick={handleDropOut}
                                />
                              )} */}
                              <LinkAccount
                                to='/testPage'
                                onClick={handleDropOut}
                              >
                                <DropLi>My Balances</DropLi>
                              </LinkAccount>
                              <LinkAccount
                                to='/testPage'
                                onClick={handleDropOut}
                              >
                                <DropLi>My Coupons</DropLi>
                              </LinkAccount>
                            </DropUl>
                          </DropAccountWrap>
                        </DropAccount>
                        {/* {isOpenAddress && (
                          <PopupAddress
                            handleClose={toggleAddress}
                            style={{ background: 'none' }}
                            meData={meData}
                            onClick={handleDropOut}
                          />
                        )} */}
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
            {/* <DropMenuWrap></DropMenuWrap> */}
            <DropMenu>
              {categories.map((category) => {
                return (
                  <DropMenuList key={category.pk}>
                    <DropMenuParents>      
                      <DropdownButton 
                        to={`/products/productAllParentsKinds/${category.pk}`}>
                        {category.name}

                      </DropdownButton>
                      {!clickAccount && (
                        <DropChildWrap>
                          <DropMenuChild>
                            {category.productKinds?.map((child) => {
                              return (
                                <DropMenuItem key={child.pk}>
                                  <Link
                                    style={{
                                      color: 'black',
                                      textDecoration: 'none',
                                    }}
                                    to={`/products/productAllChildKinds/${child.pk}`}
                                  >
                                    {child.name}
                                  </Link>
                                </DropMenuItem>
                              );
                            })}
                          </DropMenuChild>
                        </DropChildWrap>
                      )}

                     // </DropdownButton>                    
                      //  <DropMenuChild>
                        //  {category.productKinds?.map((child) => {
                         //   return (
                          //    <DropMenuItem key={child.pk}>
                           //     <Link
                            //      style={{
                              //      color: 'black',
                             //       textDecoration: 'none',
                              //    }}
                             //     to={`/products/productAllChildKinds/${child.pk}`}
                              //  >
                             //     {child.name}
                             //   </Link>
                           //   </DropMenuItem>
                         //   );
                       //   })}
                     //   </DropMenuChild>

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

export default Header;
