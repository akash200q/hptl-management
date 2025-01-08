import React from 'react';
import './Home.css'; // Optional: For styling

const Home = () => {
  return (
    <div className="home-container">
      <h2>Welcome to the Hospital Management System</h2>
      <p>
        This system allows patients to manage their appointments, doctors to
        update their availability, and administrators to oversee operations.
      </p>
      <p>
        Use the navigation menu above to explore the available features.
      </p>
    </div>
  );
};

export default Home;
