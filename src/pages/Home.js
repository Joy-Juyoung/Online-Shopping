import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from './CommonElements';
import HeroPage from './HeroPage/HeroPage';
import LoginPage from './LoginPage/LoginPage';
import ProductDetailPage from './ProductPage/ProductDetailPage';
import ProductsListPage from './ProductPage/ProductListPage';
import RegisterPage from './RegisterPage/RegisterPage';
// import TestHeader from '../components/Header/TestHeader';
// import TestHome from './HeroPage/TestHome';
// import TestLogin from './LoginPage/TestLogin';
// import TestRegister from './RegisterPage/TestRegister';
// import ProductAllParentsKinds from './ProductPage/ProductAllParentsKinds';
import TestPage from './Test/TestPage';

import UserAccountPage from './UserAccountPage/UserAccountPage';

import WishlistPage from './WishlistPage/WishlistPage';
import CartPage from './CartPage/CartPage';

import ProductListByCategory from './ProductPage/ProductListByCategory';
import HelpCenterPage from './HelpCenterPage/HelpCenter';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import TestCart from './CartPage/TestCart';
import OrderPage from './OrderPage/OrderPage';
import PaymentPage from './PaymentPage/PaymentPage';

const Home = ({ meData }) => {
  return (
    <>
      <Container>
        <Routes>
          <Route path='/testPage' element={<TestPage />} exact={true} />

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

          <Route
            path='/userOrders'
            element={<OrderPage meData={meData} />}
            exact={true}
          />

          <Route
            path='/products/:id'
            element={<ProductDetailPage meData={meData} />}
            exact={true}
          />

          <Route
            path='/products/productAllChildKinds/:id'
            element={<ProductListByCategory meData={meData} />}
            exact={true}
          />

          <Route
            path='/products/productAllParentsKinds/:pId/:cName/:cId'
            element={<ProductListByCategory meData={meData} />}
            exact={true}
          />

          <Route
            path='/products/productAllParentsKinds/:pId'
            element={<ProductsListPage meData={meData} />}
            exact={true}
          />

          <Route
            path='/wishlist'
            element={<WishlistPage meData={meData} />}
            exact={true}
          />
          {/* <Route
            path='/carts'
            element={<CartPage meData={meData} />}
            exact={true}
          /> */}
            <Route
            path='/carts'
            element={<TestCart meData={meData} />}
            exact={true}
          />
          {/* <Route
            path='/carts'
            element={<TestCart meData={meData} />}
            exact={true}
          /> */}

          <Route
            path='/payment'
            element={<PaymentPage meData={meData} />}
            exact={true}
          />

          <Route
            path='/helpcenter'
            element={<HelpCenterPage meData={meData} />}
            exact={true}
          />
        </Routes>
      </Container>
    </>
  );
};

export default Home;
