import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
