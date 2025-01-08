import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Axios is used here
import './AppointmentForm.css';

const AppointmentForm = () => {
  const [doctors, setDoctors] = useState([]);
  const [formData, setFormData] = useState({
    doctorId: '',
    patientName: '',
    patientEmail: '',
    date: '',
    time: '',
    reason: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('/api/doctor/list');
        setDoctors(response.data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/appointments/book', formData);
      setSuccessMessage(response.data.message);
      setFormData({
        doctorId: '',
        patientName: '',
        patientEmail: '',
        date: '',
        time: '',
        reason: '',
      });
    } catch (error) {
      console.error('Error booking appointment:', error);
      setSuccessMessage('Failed to book appointment. Please try again.');
    }
  };

  return (
    <div className="appointment-form-container">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit} className="appointment-form">
        <label htmlFor="doctorId">Select Doctor:</label>
        <select
          name="doctorId"
          id="doctorId"
          value={formData.doctorId}
          onChange={handleChange}
          required
        >
          <option value="">Choose a doctor</option>
          {doctors.map((doctor) => (
            <option key={doctor._id} value={doctor._id}>
              {doctor.name} - {doctor.specialization}
            </option>
          ))}
        </select>

        <label htmlFor="patientName">Patient Name:</label>
        <input
          type="text"
          id="patientName"
          name="patientName"
          value={formData.patientName}
          onChange={handleChange}
          required
        />

        <label htmlFor="patientEmail">Patient Email:</label>
        <input
          type="email"
          id="patientEmail"
          name="patientEmail"
          value={formData.patientEmail}
          onChange={handleChange}
          required
        />

        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />

        <label htmlFor="reason">Reason for Visit:</label>
        <textarea
          id="reason"
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Book Appointment</button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default AppointmentForm;
