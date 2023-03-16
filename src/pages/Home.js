import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TestHeader from '../components/Header/TestHeader';
import { Container } from './CommonElements';
import HeroPage from './HeroPage/HeroPage';
import LoginPage from './LoginPage/LoginPage';
import ProductDetailPage from './ProductPage/ProductDetailPage';
import ProductsListPage from './ProductPage/ProductListPage';
import RegisterPage from './RegisterPage/RegisterPage';
import TestRegister from './RegisterPage/TestRegister';


const Home = () => {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<HeroPage />} exact={true} />
        <Route path='/login' element={<LoginPage />} exact={true} />
        <Route path='/register' element={<RegisterPage />} exact={true} />
        <Route path='/products' element={<ProductsListPage />} exact={true} />
        {/* 일단 하드코딩하고, 뒤에 /${id}는 나중에 추가 */}
        <Route
          path='/productDetail'
          element={<ProductDetailPage />}
          exact={true}
        />

        <Route path='/test' element={<TestRegister />} exact={true} />
        <Route path='/testHeader' element={<TestHeader />} exact={true} />
      </Routes>
    </Container>
  );
};

export default Home;
