import React from 'react';
import {
  Routes,
  Route,
  Navigate,
  useParams,
  useLocation,
} from 'react-router-dom';
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
import HeadCategory from './Admin/CategoryManage/HeadCategory';
import SubCategory from './Admin/CategoryManage/SubCategory';
import ItemManage from './Admin/ItemManage/ItemManage';
import ItemList from './Admin/ItemManage/ItemList';
import ItemReviews from './Admin/ItemManage/ItemReviews';
import OrderManage from './Admin/OrderManage/OrderManage';
import OrderList from './Admin/OrderManage/OrderList';
import OrderPending from './Admin/OrderManage/OrderPending';

import FeedbackManage from './Admin/FeedbackManage/FeedbackManage';

import AdminSidebar from '../components/AdminComponents/Sidebar/AdminSidebar';
import AdminHeader from '../components/AdminComponents/AdminHeader';
import { Container } from './CommonElements';
import HeaderBackup from '../components/Header/HeaderBackup';
import EmptyPage from './EmptyPage';

const Home = () => {
  const [meData, setMeData] = useState();
  const [catData, setCatData] = useState([]);
  const [isAdminBoard, setIsAdminBoard] = useState(false);
  const location = useLocation();

  const [checkedList, setCheckedList] = useState([]);

  console.log('location', location.pathname);

  const getMe = async () => {
    try {
      const me = await axios.get('/users/me', {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });
      setMeData(me?.data);
    } catch (err) {
      return console.log('Load me error');
    }
  };
  const getCategory = async () => {
    const categoryData = await axios.get('/products/productAllParentsKinds', {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    setCatData(categoryData?.data);
  };
  // console.log('admin', admin);

  useEffect(() => {
    getMe();
    getCategory();

    if (
      location.pathname === '/admin' ||
      location.pathname === '/admin/customers' ||
      location.pathname === '/admin/categories' ||
      location.pathname === '/admin/categories/head' ||
      location.pathname === '/admin/categories/:headName/sub' ||
      location.pathname === '/admin/products' ||
      location.pathname === '/admin/reviews' ||
      location.pathname === '/admin/orders' ||
      location.pathname === '/admin/orders/all' ||
      location.pathname === '/admin/orders/pending' ||
      location.pathname === '/admin/coupons' ||
      location.pathname === '/admin/feedbacks'
    ) {
      setIsAdminBoard(true);
    }
  }, []);

  // useEffect(() => {
  //   if (
  //     location.pathname === '/login' ||
  //     '/register' ||
  //     '/userAccount' ||
  //     '/myReviews' ||
  //     '/coupon' ||
  //     '/userOrders' ||
  //     '/userOrders/:id' ||
  //     '/review/:reviewId' ||
  //     '/products/all' ||
  //     '/products/search/:searchValue' ||
  //     '/products/:id' ||
  //     '/products/productAllChildKinds/:id' ||
  //     '/products/category/:pId/:cName/:cId' ||
  //     '/products/category/:pId' ||
  //     '/wishlist' ||
  //     '/carts' ||
  //     '/carts/payment' ||
  //     '/userBalance' ||
  //     '/helpcenter'
  //   ) {
  //     setIsAdminBoard(false);
  //   }
  // }, [isAdminBoard]);

  return (
    <>
      {isAdminBoard === false && (
        // &&
        //   (meData?.type === 'admin_user' || 'user' || '')
        <>
          <Header
            meData={meData}
            catData={catData}
            setIsAdminBoard={setIsAdminBoard}
          />
          <Container>
            <Routes>
              {/* <Route path='/admin' element={<Dashboard />} exact={true} /> */}
              <Route
                path='/'
                element={
                  <HeroPage
                    catData={catData}
                    setIsAdminBoard={setIsAdminBoard}
                  />
                }
                exact={true}
              />

              <Route
                path='/login'
                element={
                  <LoginPage
                    meData={meData}
                    setIsAdminBoard={setIsAdminBoard}
                  />
                }
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
                element={
                  <ProductDetailPage meData={meData} catData={catData} />
                }
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

              <Route
                path='/carts'
                element={
                  <TestCart
                    meData={meData}
                    setCheckedList={setCheckedList}
                    checkedList={checkedList}
                  />
                }
                exact={true}
              />
              {/* 홈에 set 넣어주니까 다른페이지도 적용됨 */}
              <Route
                path='/carts/payment'
                element={
                  <PaymentPage
                    meData={meData}
                    setCheckedList={setCheckedList}
                    checkedList={checkedList}
                  />
                }
                exact={true}
              />

              <Route
                path='/userBalance'
                element={<AddBalance meData={meData} />}
                exact={true}
              />

              <Route
                path='/helpcenter'
                element={<HelpCenterPage />}
                exact={true}
              />
              <Route path='/comingsoon' element={<EmptyPage />} exact={true} />
            </Routes>
          </Container>
          <Footer />
        </>
      )}
      {isAdminBoard === true && meData?.type === 'admin_user' && (
        <AdminGlobal>
          <AdminBg>
            <AdminSideContainer>
              <AdminSidebar meData={meData} />
            </AdminSideContainer>
            <AdminContainer>
              <AdminHeader meData={meData} setIsAdminBoard={setIsAdminBoard} />
              <Routes>
                <Route path='/admin' element={<Dashboard />} exact={true} />

                <Route
                  path='/admin/customers'
                  element={<CustomersManage />}
                  exact={true}
                />
                <Route
                  path='/admin/categories'
                  element={<CategoryManage />}
                  exact={true}
                />
                <Route
                  path='/admin/categories/head'
                  element={<HeadCategory />}
                  exact={true}
                />
                <Route
                  path='/admin/categories/:headName/sub'
                  element={<SubCategory />}
                  exact={true}
                />
                <Route
                  path='/admin/items'
                  element={<ItemManage catData={catData} />}
                  exact={true}
                />
                <Route
                  path='/admin/products'
                  element={<ItemList catData={catData} />}
                  exact={true}
                />
                <Route
                  path='/admin/reviews'
                  element={<ItemReviews />}
                  exact={true}
                />
                <Route
                  path='/admin/orders'
                  element={<OrderManage />}
                  exact={true}
                />
                <Route
                  path='/admin/orders/all'
                  element={<OrderList />}
                  exact={true}
                />
                <Route
                  path='/admin/orders/pending'
                  element={<OrderPending />}
                  exact={true}
                />
                <Route
                  path='/admin/coupons'
                  element={<CouponManage />}
                  exact={true}
                />
                {/* <Route
                  path='/admin/feedbacks'
                  element={<FeedbackManage />}
                  exact={true}
                /> */}
              </Routes>
            </AdminContainer>
          </AdminBg>
        </AdminGlobal>
      )}
    </>
  );
};

export default Home;
