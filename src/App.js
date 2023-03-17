import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import TestHeader from './components/Header/TestHeader';

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <TestHeader />
      <Home />
      <Footer />
    </Router>
  );
}

export default App;
