import React from 'react';
import { Input } from '../../components/InputElements';
import {
  AccountContainer,
  AccountWrap,
  DelBtn,
  MainHeader,
  MainInfo,
  MainInfoBottom,
  MainInfoTop,
  MainLeft,
  MainRight,
  MainSection,
  MenuSub,
  MenuSubList,
  SideMenu,
  SideMenuList,
  SideMenuSub,
  SideSection,
} from './UserAccountElements';

import Avatar, { ConfigProvider } from 'react-avatar';
import { ButtonLarge, ButtonSmall } from '../../components/ButtonElements';
import { useState, useEffect } from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import S1_Profile from './S1_Profile';
import S2_OrderHistory from './S2_OrderHistory';
import S3_Wishlist from './S3_Wishlist';
import S4_Balance from './S4_Balance';
import S5_Coupon from './S5_Coupon';

const AccountSidebar = ({ side }) => {
  // console.log('account me', meData);

  // const [isDrop, setIsDrop] = useState(false);

  // const [sideItems, setSideItems] = useState([]);
  const sideItems = [
    { id: 1, title: 'My Profile', route: '/userAccount' },
    { id: 2, title: 'My Order Status', route: '/orderStatus' },
    { id: 3, title: 'My Order History', route: '/orderHistory' },
    { id: 4, title: 'My Wishlist', route: '/wishlist' },
    { id: 5, title: 'My Balance', route: '/balance' },
    { id: 6, title: 'My Coupon', route: '/coupon' },
  ];

  return (
    <SideSection>
      {/* {sideItems.map((side) => { */}
      <SideMenu key={side.id}>
        <SideMenuList>
          <Link to={side.route}>
            <span>{side.title}</span>
          </Link>
        </SideMenuList>
      </SideMenu>
      {/* })} */}
    </SideSection>
  );
};

export default AccountSidebar;
