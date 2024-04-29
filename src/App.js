import React from 'react';
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import LogIn from "./components/LogIn";
import Header from './components/Header';
import { AuthProvider } from './components/AuthContext';
import NewTrip from './components/NewTrip';
import TripDetails from "./components/TripDetails";


function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/trip/create" element={<NewTrip />} />
          <Route path="/trip/:tripId" element={<TripDetails />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
