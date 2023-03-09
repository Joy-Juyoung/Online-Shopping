import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import RegisterComfirm from './pages/RegisterPage/RegisterComfirm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} exact={true} />
        <Route path='/login' element={<LoginPage />} exact={true} />
        <Route path='/register' element={<RegisterPage />} exact={true} />
        {/* /confirm이 아니라 /register/{email-id} 이런식으로 진행하게 변경해야함 */}
        <Route path='/confirm' element={<RegisterComfirm />} exact={true} />
      </Routes>
    </Router>
  );
}

export default App;
