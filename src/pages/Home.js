import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroPage from './HeroPage/HeroPage';
import LoginPage from './LoginPage/LoginPage';

const Home = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HeroPage />} exact={true} />
        <Route path='/login' element={<LoginPage />} exact={true} />
      </Routes>
    </Router>
  );
};

export default Home;
