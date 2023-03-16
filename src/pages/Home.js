import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HeroPage from './HeroPage/HeroPage';
import LoginPage from './LoginPage/LoginPage';
import RegisterPage from './RegisterPage/RegisterPage';
import TestRegister from './RegisterPage/TestRegister';
import { Container } from './CommonElements';


const Home = () => {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<HeroPage />} exact={true} />
        <Route path='/login' element={<LoginPage />} exact={true} />
        <Route path='/register' element={<RegisterPage />} exact={true} />
        <Route path='/test' element={<TestRegister />} exact={true} />

      </Routes>
    </Container>
  );
};

export default Home;
