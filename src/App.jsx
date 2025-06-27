import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'
import WorkerDashboard from './pages/WorkerDashboard';
import HireDashboard from './pages/HireDashboard';
import WorkerLayout from './layouts/WorkerLayout';
import HireLayout from './layouts/HireLayout';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/worker/dashboard" element={<WorkerLayout><WorkerDashboard /></WorkerLayout>} />
      <Route path="/hire/dashboard" element={<HireLayout><HireDashboard /></HireLayout>} />
    </Routes>
  );
}