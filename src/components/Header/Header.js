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
import CartCount from './CartCount';

const CARTS_URL = '/carts/';

const Header = ({ meData, catData, setIsAdminBoard, setIsCount, isCount }) => {
  const navigate = useNavigate();
  const [me, setMe] = useState(null);
  const [logout, setLogout] = useState();
  const [clickAccount, setClickAccount] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalShown, toggleModal] = useState(false);
  const [balanceShown, toggleBalance] = useState(false);
  // const [cartsTotal, setCartsTotal] = useState();

  // const [carts, setCarts] = useState();

  const ref = useRef();

  useEffect(() => {
    setMe(meData);
    // if (meData) {
    //   getAllCart();
    //   setCartsTotal(carts?.length);
    // }
  }, [meData]);

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
    // window.location.reload('/');
    setLoading(false);
  };

  const handleAccount = () => {
    setClickAccount(!clickAccount);
  };

  // detect click outside to close
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (clickAccount && ref.current && !ref.current.contains(e.target)) {
        setClickAccount(false);
      }
    };
    document.addEventListener('click', checkIfClickedOutside);
    return () => {
      document.removeEventListener('click', checkIfClickedOutside);
    };
  }, [clickAccount, isModalOpen]);

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
              <ModalBtnWrap
              //  ref={searchRef}
              >
                <ModalBtn onClick={() => setIsModalOpen(true)}>
                  <ModalBtnDetail>
                    <SearchIcon color='disabled' fontSize='medium' />
                    <span>Search</span>
                  </ModalBtnDetail>
                </ModalBtn>
              </ModalBtnWrap>
              {isModalOpen && (
                <TestSearch onClose={() => setIsModalOpen(false)} />
              )}
            </LeftSide>

            <MiddleSide>
              <MidLink to='/'>
                <div>BlankCloset</div>
              </MidLink>
            </MiddleSide>
            <RightSide>
              {!me && logout !== null ? (
                <>
                  <RightIcon>
                    <FlagBtn>
                      <img src='https://static.msscdn.net/global/country/flag/CA.svg' />
                    </FlagBtn>
                  </RightIcon>

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
                  {meData?.type === 'admin_user' && (
                    <RightIcon>
                      <AdminLink
                        to='/admin'
                        onClick={() => setIsAdminBoard(true)}
                      >
                        Go to Admin Panel
                        <ManageAccountsIcon />
                      </AdminLink>
                    </RightIcon>
                  )}
                  <RightIcon>
                    <FlagBtn>
                      <img src='https://static.msscdn.net/global/country/flag/CA.svg' />
                    </FlagBtn>
                  </RightIcon>
                  <RightIcon>
                    <FaLink to='/wishlist'>
                      <FavoriteBorderIcon fontSize='medium' />
                    </FaLink>
                  </RightIcon>
                  {/* cart count */}
                  <CartCount setIsCount={setIsCount} isCount={isCount} />

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
                        {clickAccount && (
                          <DropUser
                            meData={meData}
                            shown={() => toggleBalance(!balanceShown)}
                            // setIsAdminBoard={setIsAdminBoard}
                            // isAdminBoard={isAdminBoard}
                          />
                        )}
                        <Modal
                          shown={balanceShown}
                          close={() => {
                            toggleBalance(false);
                          }}
                        >
                          <AddBalance meData={meData} />
                        </Modal>
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
              <DropMenuList>
                <DropMenuParents>
                  <DropdownButton
                    style={{ color: '#e00000', marginRight: '-20px' }}
                    to='/products/all'
                  >
                    ALL
                  </DropdownButton>
                </DropMenuParents>
              </DropMenuList>
              {catData.map((category) => {
                return (
                  <DropMenuList key={category?.pk}>
                    {/* <DropMenuWrap></DropMenuWrap> */}
                    <DropMenuParents>
                      <DropdownButton to={`/products/category/${category?.pk}`}>
                        {category?.productKinds?.length === 0 &&
                        meData?.type === 'user' ? null : (
                          <span>{category?.name.toUpperCase()}</span>
                        )}
                      </DropdownButton>
                      <DropChildWrap>
                        <DropMenuChild>
                          {category?.productKinds?.map((child) => {
                            return (
                              <Link
                                key={child?.pk}
                                style={{
                                  color: 'black',
                                  textDecoration: 'none',
                                }}
                                to={`/products/category/${category?.pk}/${child?.name}/${child?.pk}`}
                              >
                                <DropMenuItem>{child?.name}</DropMenuItem>
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
