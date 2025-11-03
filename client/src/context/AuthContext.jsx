import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate ? null : null; // keep react-hooks lint quiet if unused here
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('digi_user')) || null;
    } catch (e) { return null; }
  });
  const [token, setToken] = useState(() => localStorage.getItem('digi_token') || null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token) {
      localStorage.setItem('digi_token', token);
    } else {
      localStorage.removeItem('digi_token');
      localStorage.removeItem('digi_user');
    }
  }, [token]);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const res = await api.login({ email, password });
      setUser(res.user || null);
      setToken(res.token || null);
      localStorage.setItem('digi_user', JSON.stringify(res.user || null));
      setLoading(false);
      return { ok: true };
    } catch (err) {
      setLoading(false);
      return { ok: false, error: err.message || 'Login failed' };
    }
  };

  const register = async (payload) => {
    setLoading(true);
    try {
      const res = await api.register(payload);
      setUser(res.user || null);
      setToken(res.token || null);
      localStorage.setItem('digi_user', JSON.stringify(res.user || null));
      setLoading(false);
      return { ok: true };
    } catch (err) {
      setLoading(false);
      return { ok: false, error: err.message || 'Registration failed' };
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
