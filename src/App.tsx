import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import Home from './pages/public/Home';
import About from './pages/public/About';
import DepartmentsPublic from './pages/public/DepartmentsPublic';
import FacultyPublic from './pages/public/FacultyPublic';
import Admissions from './pages/public/Admissions';
import Courses from './pages/public/Courses';
import News from './pages/public/News';
import Contact from './pages/public/Contact';
import DashboardStub from './pages/public/DashboardStub';

import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Website Routes wrapped in sticky animated layout */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="departments" element={<DepartmentsPublic />} />
          <Route path="faculty-public" element={<FacultyPublic />} />
          <Route path="admissions" element={<Admissions />} />
          <Route path="courses" element={<Courses />} />
          <Route path="news" element={<News />} />
          <Route path="contact" element={<Contact />} />
          <Route path="dashboard" element={<DashboardStub />} />
        </Route>

        {/* Self-contained authentication gateways */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Fallback redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
