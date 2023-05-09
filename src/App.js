import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
// import TestHeader from './components/Header/TestHeader';
import { useEffect, useState } from 'react';
import axios from './api/axios';
import HelpCenterPage from './pages/HelpCenterPage/HelpCenter';
import AdminHeader from './components/Header/AdminHeader';
// import Loading from './components/Loading';

function App() {
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

  useEffect(() => {
    getMe();
  }, []);

  const getCategory = async () => {
    const categoryData = await axios.get('/products/productAllParentsKinds', {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    setCatData(categoryData?.data);
  };

  useEffect(() => {
    getCategory();
  }, [meData]);

  return (
    <>
      <Router>
        {/* <Header meData={meData} /> */}
        {/* <Header meData={meData} catData={catData} /> */}
        {/* {meData?.type === 'user' ? (
          <Header meData={meData} />
        ) : (
          <Header meData={meData} catData={catData} />
        )} */}
        {meData?.type === 'admin_user' && <AdminHeader />}
        {meData?.type === 'user' && (
          <Header meData={meData} catData={catData} />
        )}
        {meData === undefined && <AdminHeader />}
        <Home meData={meData} catData={catData} />
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
