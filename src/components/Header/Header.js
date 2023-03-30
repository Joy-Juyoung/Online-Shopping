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
} from './HeaderElements';
import FlagIcon from '@mui/icons-material/Flag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import LogoutIcon from '@mui/icons-material/Logout';
import TestModal from './TestModal';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';

const CATEGORY_URL = '/products/productAllParentsKinds';
const Header = ({ meData }) => {
  const accountRef = useRef();

  const [categories, setCategories] = useState([]);
  const [me = meData, setMe] = useState();
  const [logout, setLogout] = useState();
  const navigate = useNavigate();
  const [clickAccount, setClickAccount] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const [isModalOpen, setIsModalOpen] = useState(false);

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
              <ModalBtn onClick={() => setIsModalOpen(true)}>Search</ModalBtn>
              {isModalOpen && (
                <TestModal onClose={() => setIsModalOpen(false)} />
              )}
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
                <FaLink to='/wishlist'>
                  <FavoriteBorderIcon fontSize='medium' />
                </FaLink>
              </RightIcon>
              <RightIcon>
                <CartLink to='/carts'>
                  <AddShoppingCartIcon fontSize='medium' />
                </CartLink>
              </RightIcon>

              {!me && logout !== null ? (
                <RightIcon>
                  <PermLink to='/login'>
                    <PermIdentityRoundedIcon fontSize='medium' />
                  </PermLink>
                </RightIcon>
              ) : (
                <>
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
                          <ul>
                            <LinkAccount
                              to='/userAccount'
                              onClick={handleDropOut}
                            >
                              <li>My Profile</li>
                            </LinkAccount>
                            <LinkAccount to='/testPage' onClick={handleDropOut}>
                              <li>My Orders</li>
                            </LinkAccount>
                            <LinkAccount to='/testPage' onClick={handleDropOut}>
                              <li>My Addresses</li>
                            </LinkAccount>
                            <LinkAccount to='/testPage' onClick={handleDropOut}>
                              <li>My Balances</li>
                            </LinkAccount>
                            <LinkAccount to='/testPage' onClick={handleDropOut}>
                              <li>My Coupons</li>
                            </LinkAccount>
                          </ul>
                        </DropAccount>
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
                    <DropMenuParents>
                      {/* <DropdownButton>{category.name}</DropdownButton> */}
                      <DropdownButton to='/products'>
                        {category.name}
                      </DropdownButton>
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
