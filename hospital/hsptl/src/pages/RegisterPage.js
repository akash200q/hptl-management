import React, { useState } from 'react';
import './RegisterPage.css'; // For styling (optional)

const RegisterPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="register-page">
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      <form>
        {!isLogin && (
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
        )}
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      </form>
      <p>
        {isLogin ? "Don't have an account?" : 'Already have an account?'}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="toggle-button"
        >
          {isLogin ? 'Register' : 'Login'}
        </button>
      </p>
    </div>
  );
};

export default RegisterPage;
