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

import TestProductKindsView from './ProductPage/TestProductKindsView';

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

        <Route
          path='/products/productAllChildKinds/:id'
          element={<TestProductKindsView />}
          exact={true}
        />
        {/* <Route path='/' element={<TestHome />} exact={true} /> */}
        {/* <Route path='/' element={<TestHome />} exact={true} /> */}
        {/* <Route path='/testLogin' element={<TestLogin />} exact={true} /> */}
        {/*<Route path='/testRegister' element={<TestRegister />} exact={true} /> */}

        {/* <Route path='/testHeader' element={<TestHeader />} exact={true} /> */}
        <Route path='/wishlist' element={<WishlistPage />} exact={true} />
        <Route path='/carts' element={<CartPage />} exact={true} />
      </Routes>
    </Container>
  );
};

export default Home;
