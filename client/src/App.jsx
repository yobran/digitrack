import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Schools from './pages/Schools';
import SchoolDetails from './pages/SchoolDetails';
import LogVisit from './pages/LogVisit';
import Devices from './pages/Devices';
import Reports from './pages/Reports';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Routes>
            {/* Public routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Protected routes */}
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/schools" 
              element={
                <ProtectedRoute>
                  <Schools />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/schools/:id" 
              element={
                <ProtectedRoute>
                  <SchoolDetails />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/log-visit" 
              element={
                <ProtectedRoute>
                  <LogVisit />
                </ProtectedRoute>
              } 
            />
            <Route 
  path="/devices" 
  element={
    <ProtectedRoute>
      <Devices />
    </ProtectedRoute>
  } 
/>
<Route 
  path="/reports" 
  element={
    <ProtectedRoute>
      <Reports />
    </ProtectedRoute>
  } 
/>
            
            {/* Default redirect */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;