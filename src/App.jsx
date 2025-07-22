import React, { StrictMode } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/Pages/LandingPage';
import  LoginPage from './components/auth/Login';
import SignUpPage from './components/auth/Signup';
import UserDashboardHome from './components/user-dashboard/UserDashboardHome';
import AccountSettings from './components/user-dashboard/AccountSettings';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<UserDashboardHome />} />
        <Route path="/account-settings" element={<AccountSettings />} />
      </Routes>
    </Router>
  );
}

export default App;
