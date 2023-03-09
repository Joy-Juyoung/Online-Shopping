import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroPage from './HeroPage/HeroPage';
import LoginPage from './LoginPage/LoginPage';
import RegisterPage from './RegisterPage/RegisterPage';
import RegisterComfirm from './RegisterPage/RegisterComfirm';

const Home = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HeroPage />} exact={true} />
        <Route path='/login' element={<LoginPage />} exact={true} />
        <Route path='/register' element={<RegisterPage />} exact={true} />
        {/* /confirm이 아니라 /register/{email-id} 이런식으로 진행하게 변경해야함 */}
        <Route path='/confirm' element={<RegisterComfirm />} exact={true} />
      </Routes>
    </Router>
  );
};

export default Home;
