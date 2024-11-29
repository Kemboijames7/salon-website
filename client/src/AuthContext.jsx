// src/AuthContext.js
import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './components/Login.jsx';



const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem('isAdmin') === 'true');
  const navigate = useNavigate();

  const login = (user) => {
    console.log('Login Attempt:', user); // Debug the user object
    if (user.role === 'admin') {
      setIsAdmin(true);
      localStorage.setItem('isAdmin', 'true');
      console.log('Admin login successful. isAdmin:', isAdmin);
      navigate('/Admin');
    } else {
      console.log('Unauthorized login attempt:', user.role);
      alert("Unauthorized Access");
    }
  };

  const logout = () => {
    setIsAdmin(false);
    localStorage.removeItem('isAdmin');
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout }}>
      {children}
     
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
