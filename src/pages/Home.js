import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TestHeader from '../components/Header/TestHeader';
import { Container } from './CommonElements';
import HeroPage from './HeroPage/HeroPage';
import LoginPage from './LoginPage/LoginPage';
import ProductDetailPage from './ProductPage/ProductDetailPage';
import ProductsListPage from './ProductPage/ProductListPage';
import RegisterPage from './RegisterPage/RegisterPage';
// import TestHome from './HeroPage/TestHome';
// import TestLogin from './LoginPage/TestLogin';
// import TestRegister from './RegisterPage/TestRegister';

import UserAccountPage from './UserAccountPage/UserAccountPage';

import WishlistPage from './WishlistPage/WishlistPage';
import CartPage from './CartPage/CartPage';
// import S1_Profile from './UserAccountPage/S1_Profile';
import S2_OrderStatus from './UserAccountPage/S2_OrderStatus';
import S2_OrderHistory from './UserAccountPage/S2_OrderHistory';
import S3_Wishlist from './UserAccountPage/S3_Wishlist';
import S4_Balance from './UserAccountPage/S4_Balance';
import S5_Coupon from './UserAccountPage/S5_Coupon';

const Home = ({ meData }) => {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<HeroPage />} exact={true} />

        <Route
          path='/login'
          element={<LoginPage meData={meData} />}
          exact={true}
        />
        <Route
          path='/register'
          element={<RegisterPage meData={meData} />}
          exact={true}
        />

        <Route
          path='/userAccount'
          element={<UserAccountPage meData={meData} />}
          exact={true}
        />

        {/* <Route
          path='/userAccount/profile'
          element={<S1_Profile meData={meData} />}
          exact={true}
        /> */}

        <Route
          path='/orderStatus'
          element={<S2_OrderStatus meData={meData} />}
          exact={true}
        />

        <Route
          path='/orderHistory'
          element={<S2_OrderHistory meData={meData} />}
          exact={true}
        />
        <Route
          path='/whishlist'
          element={<S3_Wishlist meData={meData} />}
          exact={true}
        />
        <Route
          path='/balance'
          element={<S4_Balance meData={meData} />}
          exact={true}
        />
        <Route
          path='/coupon'
          element={<S5_Coupon meData={meData} />}
          exact={true}
        />

        <Route
          path='/products'
          element={<ProductsListPage meData={meData} />}
          exact={true}
        />

        <Route
          path='/productDetail'
          element={<ProductDetailPage />}
          exact={true}
        />

        {/* <Route path='/' element={<TestHome />} exact={true} /> */}
        {/* <Route path='/testLogin' element={<TestLogin />} exact={true} />
        <Route path='/testRegister' element={<TestRegister />} exact={true} /> */}

        {/* <Route
          path='/wishlist'
          element={<WishlistPage meData={meData} />}
          exact={true}
        /> */}
        <Route
          path='/carts'
          element={<CartPage meData={meData} />}
          exact={true}
        />
      </Routes>
    </Container>
  );
};

export default Home;
