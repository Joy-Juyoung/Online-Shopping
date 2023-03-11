import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <Header />
      <Home />
    </Router>
  );
}

export default App;
