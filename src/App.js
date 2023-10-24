// App.js
import {React, useEffect, useState} from 'react';
import { BrowserRouter as Router,Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import Verify from './pages/Verify'
import DashBoard from './pages/DashBoard'
import  AuthManager  from './middleware/authManager'

const authManager = new AuthManager()


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  
  useEffect(() => {
    setIsAuthenticated(authManager.checkAuth)
  }, [])

  return (
    <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/" element={<Home />} />
      {isAuthenticated ? (
        <>
          <Route path="/dashboard" element={<DashBoard />} />
        </>
      ) : (
      
        <Route path="*" element={<Navigate to="/login" replace />} />
      )}
    </Routes>
  </Router>
  );
};

export default App;
