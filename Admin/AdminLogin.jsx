import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import '../CSS/Login.css';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const defaultEmail = 'adminf2f@gmail.com';
  const defaultPassword = 'admin@f2f';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === defaultEmail && password === defaultPassword) {
      // On successful login, navigate to the admin home page
      navigate('/AdminDashboard');
    } else {
      alert('Invalid email or password');
    }
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
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
        <button type="submit">Login</button>
      </form>
      </div>
  );
};

export default AdminLogin;