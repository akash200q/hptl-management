import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Axios is used here
import './DoctorList.css';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);

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

  return (
    <div className="doctor-list-container">
      <h2>Doctors</h2>
      {doctors.length > 0 ? (
        <ul className="doctor-list">
          {doctors.map((doctor) => (
            <li key={doctor._id} className="doctor-item">
              <h3>{doctor.name}</h3>
              <p>Specialization: {doctor.specialization}</p>
              <p>Experience: {doctor.experience} years</p>
              <p>Availability: {doctor.availability}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No doctors available at the moment.</p>
      )}
    </div>
  );
};

export default DoctorList;
