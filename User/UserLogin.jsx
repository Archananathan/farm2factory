import React, { useState } from 'react';
import '../CSS/Login.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [serverError, setServerError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/login', { email, password });
      console.log('Login successful:', response.data);
      alert('Login successful!');
      navigate('/UserLand'); // Redirect to the homepage or another page upon successful login
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
      alert('Login failed. Please check your credentials and try again.');
      setServerError(error.response?.data || 'Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className='login-container'>
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="input-container">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {serverError && <p style={{ color: 'red' }}>{serverError}</p>}
        <button type="submit">Login</button>
        <p>
          Don't have an account? <Link to='/UserSignUp'>Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default UserLogin;
