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
import TestPage from './Test/TestPage';

import UserAccountPage from './UserAccountPage/UserAccountPage';

import WishlistPage from './WishlistPage/WishlistPage';
import CartPage from './CartPage/CartPage';


// import S1_Profile from './UserAccountPage/S1_Profile';
// import S2_OrderStatus from './UserAccountPage/S2_OrderStatus';
// import S2_OrderHistory from './UserAccountPage/S2_OrderHistory';
// import S3_Wishlist from './UserAccountPage/S3_Wishlist';
// import S4_Balance from './UserAccountPage/S4_Balance';
// import S5_Coupon from './UserAccountPage/S5_Coupon';
import ProductAllParentsKinds from './ProductPage/ProductAllParentsKinds';
import TestProductKindsView from './ProductPage/TestProductKindsView';
import HelpCenterPage from './HelpCenterPage/HelpCenter';


const Home = ({ meData }) => {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<HeroPage />} exact={true} />

        <Route path='/testPage' element={<TestPage />} exact={true} />

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

        <Route
          path='/products'
          element={<ProductsListPage meData={meData} />}
          exact={true}
        />

        <Route
          path='/products/:id'
          element={<ProductDetailPage />}
          exact={true}
        />

        <Route path='/products/productAllParentsKinds/:id' element={<ProductAllParentsKinds />} exact={true} />
        <Route path='/products/productAllChildKinds/:id' element={<TestProductKindsView />} exact={true} />
        <Route path='/testHeader' element={<TestHeader />} exact={true} />
        <Route path='/wishlist' element={<WishlistPage />} exact={true} />
        <Route path='/carts' element={<CartPage />} exact={true} />

      <Route path='/helpcenter' element={<HelpCenterPage />} exact={true} />
      </Routes>
    </Container>
  );
};

export default Home;
