// src/AuthContext.js
import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem('isAdmin') === 'true');
  const navigate = useNavigate();

  const login = (user) => {
    console.log('Login called with user:', user); // Debugging
    if (!user ) {
        console.error('User is undefined or does not have a role! Check the caller of login.');
        return;
    }

    if (user.role === 'admin') {
        setIsAdmin(true);
        localStorage.setItem('isAdmin', 'true');
        localStorage.setItem('token', user.token); // Store token as well
        console.log('Admin login successful. isAdmin:', true);
        navigate('/Admin');
    } else {
        console.log('Unauthorized login attempt:', user);
        alert('Unauthorized Access');
    }
};

  const logout = () => {
    setIsAdmin(false);
    localStorage.removeItem('isAdmin');
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ login, logout, isAdmin }}>
      {children}
     
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
