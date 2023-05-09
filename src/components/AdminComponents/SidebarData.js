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

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <HomeIcon />,
  },
  {
    title: 'Customers',
    path: '/manage/customers',
    icon: <PeopleIcon />,
  },
  {
    title: 'Categories',
    // path: '/manage/categories',
    path: '',
    icon: <CategoryIcon />,
    iconClosed: <ExpandMoreIcon />,
    iconOpened: <ExpandLessIcon />,
    subNav: [
      {
        title: 'Categories',
        path: '/manage/categories',
        icon: <GroupWorkIcon />,
      },
      {
        title: 'Sub Categories',
        path: '/manage/customers',
        icon: <WorkspacesIcon />,
      },
    ],
  },
  {
    title: 'Products',
    // path: '/manage/items',
    path: '',
    icon: <ShoppingCartIcon />,
    iconClosed: <ExpandMoreIcon />,
    iconOpened: <ExpandLessIcon />,
    subNav: [
      {
        title: 'Products List',
        path: '/manage/items',
        icon: <ShoppingBagIcon />,
      },
      {
        title: 'Product Reviews',
        path: '/manage/items/reviews',
        icon: <RateReviewIcon />,
      },
    ],
  },
  {
    title: 'Orders',
    path: '/manage/orders',
    icon: <MonetizationOnIcon />,
  },
  {
    title: 'Coupons',
    path: '/manage/coupons',
    icon: <RedeemIcon />,
  },
  {
    title: 'Feedbacks',
    path: '/manage/feedbacks',
    icon: <QuestionAnswerIcon />,
  },
];
