import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Axios is used here
import './PatientProfile.css';

const PatientProfile = () => {
  const [patientData, setPatientData] = useState(null);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const patientId = "sample-patient-id"; // Replace with actual patient ID
        const profileResponse = await axios.get(`/api/patient/profile/${patientId}`);
        setPatientData(profileResponse.data);

        const appointmentsResponse = await axios.get(`/api/appointments/${patientId}`);
        setAppointments(appointmentsResponse.data);
      } catch (error) {
        console.error('Error fetching patient profile data:', error);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <div className="patient-profile-container">
      <h2>Patient Profile</h2>
      {patientData ? (
        <div className="patient-details">
          <h3>{patientData.name}</h3>
          <p>Email: {patientData.email}</p>
          <p>Age: {patientData.age}</p>
          <p>Address: {patientData.address}</p>
        </div>
      ) : (
        <p>Loading patient details...</p>
      )}

      <h2>Appointments</h2>
      {appointments.length > 0 ? (
        <ul className="appointment-list">
          {appointments.map((appointment) => (
            <li key={appointment._id} className="appointment-item">
              <p>Doctor: {appointment.doctorName}</p>
              <p>Date: {appointment.date}</p>
              <p>Time: {appointment.time}</p>
              <p>Reason: {appointment.reason}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No appointments found.</p>
      )}
    </div>
  );
};

export default PatientProfile;
