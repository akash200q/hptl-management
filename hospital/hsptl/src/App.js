import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DoctorList from './pages/DoctorList';
import AppointmentForm from './pages/AppointmentForm';
import PatientProfile from './pages/PatientProfile';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<DoctorList />} />
          <Route path="/appointments" element={<AppointmentForm />} />
          <Route path="/profile" element={<PatientProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
