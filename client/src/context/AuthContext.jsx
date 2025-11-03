import React, { createContext, useState, useContext } from 'react';
import { authAPI } from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('digi_user')) || null;
    } catch (e) { 
      return null; 
    }
  });
  const [token, setToken] = useState(() => localStorage.getItem('digi_token') || null);
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const res = await authAPI.login({ email, password });
      setUser(res.data.user);
      setToken(res.data.token);
      localStorage.setItem('digi_user', JSON.stringify(res.data.user));
      localStorage.setItem('digi_token', res.data.token);
      setLoading(false);
      return { ok: true };
    } catch (err) {
      setLoading(false);
      return { 
        ok: false, 
        error: err.response?.data?.error || 'Login failed' 
      };
    }
  };

  const register = async (payload) => {
    setLoading(true);
    try {
      const res = await authAPI.register(payload);
      setUser(res.data.user);
      setToken(res.data.token);
      localStorage.setItem('digi_user', JSON.stringify(res.data.user));
      localStorage.setItem('digi_token', res.data.token);
      setLoading(false);
      return { ok: true };
    } catch (err) {
      setLoading(false);
      return { 
        ok: false, 
        error: err.response?.data?.error || 'Registration failed' 
      };
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('digi_token');
    localStorage.removeItem('digi_user');
    window.location.href = '/login';
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthContext;