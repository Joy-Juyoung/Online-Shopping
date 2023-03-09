import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HeroPage from './HeroPage/HeroPage';
import LoginPage from './LoginPage/LoginPage';
import RegisterPage from './RegisterPage/RegisterPage';
import RegisterComfirm from './RegisterPage/RegisterComfirm';

const Home = () => {
  return (
    <Routes>
      <Route path='/' element={<HeroPage />} exact={true} />
      <Route path='/login' element={<LoginPage />} exact={true} />
      <Route path='/register' element={<RegisterPage />} exact={true} />
      <Route
        path='/register/:email'
        element={<RegisterComfirm />}
        exact={true}
      />
    </Routes>
  );
};

export default Home;
