// src/components/Login.js
import React, { useState } from 'react';
import { useAuth } from '../AuthContext';

const Login = () => {
  console.log('Login component rendered');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  console.log('Login function:', login);

  const handleLogin = async (e) => {
    console.log('Before preventDefault'); // Add this to debug
    e.preventDefault();
    console.log('After preventDefault'); 
    setError(''); // Clear previous errors
     // Log the credentials
  console.log('Login Attempt:', { username, password });

    try {
      console.log('Sending request to /api/login with', { username, password });
    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error('Invalid credentials or server error.');
    }

    const data = await response.json();
    console.log('Login API Response:', data);

    if (data.success && data.user) {
      console.log('Full response:', data);
      login(data.user); // Set admin role in context
    } else {
     setError('Login failed: You are not an admin.');
    }
  } catch (err) {
    setError(err.message || 'Something went wrong. Please try again.');
  }
};

  return (
    <form onSubmit={handleLogin}>
      <h2>Admin Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type= "text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button className={'btn'}type="submit">Login</button>
    </form>
  );
};

export default Login;
