import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  AdminBg,
  AdminContainer,
  AdminGlobal,
  AdminSideContainer,
} from '../pages/Admin/AdminCommonElements';

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
// import TestPage from './Test/TestPage';

import UserAccountPage from './UserAccountPage/UserAccountPage';

import WishlistPage from './WishlistPage/WishlistPage';
import CartPage from './CartPage/CartPage';

import ProductListByCategory from './ProductPage/ProductListByCategory';
import AllProducts from './ProductPage/AllProducts';
import HelpCenterPage from './HelpCenterPage/HelpCenter';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import TestCart from './CartPage/TestCart';
import OrderPage from './OrderPage/OrderPage';
import OrderDtails from './OrderPage/OrderDtails';
import PaymentPage from './PaymentPage/PaymentPage';
import AddBalance from '../components/AddBalance';
import NewReview from './ReviewPage.js/NewReview';
import SuccessPayment from './PaymentPage/SuccessPayment';
import MyReviews from './ReviewPage.js/MyReviews';
import { useState } from 'react';
import axios from '../api/axios';
import { useEffect } from 'react';
import MyCoupons from './CouponPage/MyCoupons';
import ResearchResult from './ProductPage/ResearchResult';

// import AdminHeader from '../components/AdminComponents/AdminHeader';
import Dashboard from './Admin/Dashboard/Dashboard';
import CustomersManage from './Admin/CustomersManage/CustomersManage';
import CouponManage from './Admin/CouponManage/CouponManage';
import CategoryManage from './Admin/CategoryManage/CategoryManage';
import ItemManage from './Admin/ItemManage/ItemManage';
import OrderManage from './Admin/OrderManage/OrderManage';
import FeedbackManage from './Admin/FeedbackManage/FeedbackManage';

import AdminSidebar from '../components/AdminComponents/AdminSidebar';
import AdminHeader from '../components/AdminComponents/AdminHeader';
import { Container } from './CommonElements';
import HeaderBackup from '../components/Header/HeaderBackup';

const Home = () => {
  const [meData, setMeData] = useState();
  const [catData, setCatData] = useState([]);

  const getMe = async () => {
    try {
      const me = await axios.get('/users/me', {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });
      setMeData(me?.data);
    } catch (err) {
      return null;
    }
  };
  const getCategory = async () => {
    const categoryData = await axios.get('/products/productAllParentsKinds', {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    setCatData(categoryData?.data);
  };

  useEffect(() => {
    getMe();
    getCategory();
  }, []);

  // useEffect(() => {
  //   getCategory();
  // }, []);

  return (
    <>
      {meData?.type === 'admin_user' ? (
        <AdminGlobal>
          <AdminBg>
            <AdminSideContainer>
              <AdminSidebar meData={meData} />
            </AdminSideContainer>
            <AdminContainer>
              <AdminHeader meData={meData} />
              <Routes>
                <Route path='/' element={<Dashboard />} exact={true} />
                <Route
                  path='/manage/customers'
                  element={<CustomersManage />}
                  exact={true}
                />
                <Route
                  path='/manage/coupons'
                  element={<CouponManage />}
                  exact={true}
                />
                <Route
                  path='/manage/items'
                  element={<ItemManage />}
                  exact={true}
                />
                <Route
                  path='/manage/orders'
                  element={<OrderManage />}
                  exact={true}
                />
                <Route
                  path='/manage/categories'
                  element={<CategoryManage />}
                  exact={true}
                />
                <Route
                  path='/manage/feedbacks'
                  element={<FeedbackManage />}
                  exact={true}
                />
              </Routes>
            </AdminContainer>
          </AdminBg>
        </AdminGlobal>
      ) : (
        <>
          {/* <Header meData={meData} catData={catData} /> */}
          <HeaderBackup meData={meData} catData={catData} />
          <Container>
            <Routes>
              <Route
                path='/'
                element={<HeroPage catData={catData} />}
                exact={true}
              />

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
                path='/myReviews'
                element={<MyReviews meData={meData} />}
                exact={true}
              />

              <Route path='/coupon' element={<MyCoupons />} exact={true} />

              <Route
                path='/userOrders'
                element={<OrderPage meData={meData} />}
                exact={true}
              />
              <Route
                path='/userOrders/:id'
                element={<OrderDtails meData={meData} />}
                exact={true}
              />
              {/* <Route
            path='/userOrders/:orderId/review/:reviewId/:optionPk'
            element={<NewReview meData={meData} />}
            exact={true}
          /> */}
              <Route
                path='/review/:reviewId'
                element={<NewReview meData={meData} />}
                exact={true}
              />

              <Route
                path='/products/all'
                element={<AllProducts meData={meData} catData={catData} />}
                exact={true}
              />


          <Route
            path='/products/search/:searchValue'
            element={<ResearchResult meData={meData} catData={catData} />}
            exact={true}
          />

          <Route
            path='/products/:id'
            element={<ProductDetailPage meData={meData} catData={catData} />}
            exact={true}
          />


              <Route
                path='/products/productAllChildKinds/:id'
                element={
                  <ProductListByCategory meData={meData} catData={catData} />
                }
                exact={true}
              />

              <Route
                path='/products/category/:pId/:cName/:cId'
                element={
                  <ProductListByCategory meData={meData} catData={catData} />
                }
                exact={true}
              />

              <Route
                path='/products/category/:pId'
                element={<ProductsListPage meData={meData} catData={catData} />}
                exact={true}
              />

              <Route
                path='/wishlist'
                element={<WishlistPage meData={meData} catData={catData} />}
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

              <Route
                path='/carts/payment'
                element={<PaymentPage meData={meData} />}
                exact={true}
              />
              {/* <Route
            path='/carts/payment/:orderId'
            element={<SuccessPayment meData={meData} />}
            exact={true}
          /> */}

              <Route
                path='/userBalance'
                element={<AddBalance meData={meData} />}
                exact={true}
              />

              <Route
                path='/helpcenter'
                element={<HelpCenterPage meData={meData} />}
                exact={true}
              />
            </Routes>
          </Container>
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
