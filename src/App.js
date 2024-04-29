import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import LogIn from "./components/LogIn";
import Header from './components/Header';
import { AuthProvider } from './components/AuthContext';
import "./App.css";
import NewTrip from './components/NewTrip';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/newtrip" element={<NewTrip />} />

        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
