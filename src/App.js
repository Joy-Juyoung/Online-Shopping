import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
// import TestHeader from './components/Header/TestHeader';
import { useEffect, useState } from 'react';
import axios from './api/axios';
import HelpCenterPage from './pages/HelpCenterPage/HelpCenter';
// import Loading from './components/Loading';

function App() {
  return (
    <>
      <Router>
        {/* <Header meData={meData} catData={catData} /> */}
        {/* <Home meData={meData} catData={catData} /> */}
        <Home />
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
