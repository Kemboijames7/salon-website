// src/AuthContext.js
import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem('isAdmin') === 'true');
  const navigate = useNavigate();

  const login = (role) => {
    if (role === 'admin') {
      setIsAdmin(true);
      localStorage.setItem('isAdmin', 'true');
      navigate('/Admin');
    } else {
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
