import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import LogIn from './components/LogIn';


function App() {
  return (
    <Router>
    <div className="App">
      <header>
        <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/login">Log In</Link></li>
            </ul>
          </nav>
      </header>
      <Routes>
      <Route path="" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="login" element={<LogIn />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
