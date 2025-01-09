import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import RegisterPage from './pages/RegisterPage';
import PatientProfile from './pages/PatientProfile';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<PatientProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
