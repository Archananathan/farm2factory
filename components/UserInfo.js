// src/components/UserInfo.js
import React, { useState, useEffect } from 'react';
import './UserInfo.css';

const UserInfo = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
  });

  // Simulating fetching user data. Replace this with actual data fetching.
  useEffect(() => {
    // This could be replaced with an API call
    setUser({
      username: 'JohnDoe',
      email: 'johndoe@example.com',
      password: ''  // This should be handled securely
    });
  }, []);

  return (
    <div className="user-info">
      <h1>User Information</h1>
      <div className="info-container">
        <div className="info-item">
          <label>Username:</label>
          <p>{user.username}</p>
        </div>
        <div className="info-item">
          <label>Email:</label>
          <p>{user.email}</p>
        </div>
        <div className="info-item">
          <label>Password:</label>
          <p>{user.password}</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;