import React, { StrictMode } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/Pages/LandingPage';
import  LoginPage from './components/auth/Login';
import SignUpPage from './components/auth/Signup';
import UserDashboardHome from './components/user-dashboard/UserDashboardHome';
import AccountSettings from './components/user-dashboard/AccountSettings';
import AdminDashboardHome from './components/admin-dashboard/AdminDashboardHome';
import ManageUsers from './components/admin-dashboard/ManageUsers';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/user-dashboard" element={<UserDashboardHome />} />
        <Route path="/account-settings" element={<AccountSettings />} />
        <Route path="/admin-dashboard" element={<AdminDashboardHome />} />
        <Route path="/admin/users" element={<ManageUsers />} />
      </Routes>
    </Router>
  );
}

export default App;
