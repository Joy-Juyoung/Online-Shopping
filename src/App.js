import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import TestHeader from './components/Header/TestHeader';
import { useEffect, useState } from 'react';
import axios from './api/axios';
// import Loading from './components/Loading';

function App() {
  const [meData, setMeData] = useState();
  // const [loading, setLoading] = useState(true);

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

  return (
    <Router>
      <Header meData={meData} />

      {/* <TestHeader meData={meData}/> */}
      <Home meData={meData} />
      <Footer />
    </Router>
  );
}

export default App;
