import { Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';

import Layout from './components/Layout';
import AdminDashboard from './pages/AdminDashboard';
import MedicalRecords from './pages/MedicalRecords';
import Prescriptions from './pages/Prescriptions';
import Bills from './pages/Bills';
import AppointmentForm from './components/AppointmentForm'; // Make sure this exists

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem('user');
  return user ? children : <Navigate to="/login" />;
};

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      {/* All protected routes inside Layout */}
      <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="records" element={<MedicalRecords />} />
        <Route path="prescriptions" element={<Prescriptions />} />
        <Route path="bills" element={<Bills />} />
        <Route path="appointments" element={<AppointmentForm />} />
      </Route>
    </Routes>
  );
}
