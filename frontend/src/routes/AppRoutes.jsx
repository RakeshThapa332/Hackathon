import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Upload from "../pages/Upload";
import Chat from "../pages/Chat";
import Analytics from "../pages/Analytics";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";
import Data from "../pages/Data";
import NotFound from "../pages/NotFound";

import ProtectedRoute from "../components/ProtectedRoute";
import ProtectedLayout from "../components/layout/ProtectedLayout";

function AppRoutes() {
  return (
    <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route element={<ProtectedLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/data" element={<Data />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}

export default AppRoutes;