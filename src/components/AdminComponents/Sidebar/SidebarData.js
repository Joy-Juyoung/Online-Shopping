import React from 'react';

import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import RedeemIcon from '@mui/icons-material/Redeem';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import RateReviewIcon from '@mui/icons-material/RateReview';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PendingIcon from '@mui/icons-material/Pending';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/admin',
    icon: <HomeIcon />,
  },
  {
    title: 'Customers',
    path: '/admin/customers',
    icon: <PeopleIcon />,
  },
  {
    title: 'Categories',
    path: '/admin/categories',
    icon: <CategoryIcon />,
  },
  {
    title: 'Products',
    path: '/admin/products',
    icon: <ShoppingCartIcon />,
  },
  {
    title: 'Reviews',
    path: '/admin/reviews',
    icon: <RateReviewIcon />,
  },
  {
    title: 'Orders',
    path: '/admin/orders',
    icon: <MonetizationOnIcon />,
    iconClosed: <ExpandMoreIcon />,
    iconOpened: <ExpandLessIcon />,
    subNav: [
      {
        title: 'Order History',
        path: '/admin/orders/all',
        icon: <ShoppingBagIcon />,
      },
      {
        title: 'Pending Orders',
        path: '/admin/orders/pending',
        icon: <PendingIcon />,
      },
    ],
  },
  {
    title: 'Coupons',
    path: '/admin/coupons',
    icon: <RedeemIcon />,
  },
];
