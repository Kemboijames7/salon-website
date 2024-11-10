// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isAdmin, setIsAdmin] = useState(false);

    const login = (userData) => {
        if (userData.role === 'admin') {
          setIsAdmin(true);
          localStorage.setItem('isAdmin', true); // Save admin status
        }
      };

     const logout = () => {
    setIsAdmin(false);
    localStorage.removeItem('isAdmin');
  };

    return (
        <AuthContext.Provider value={{ isAdmin, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

