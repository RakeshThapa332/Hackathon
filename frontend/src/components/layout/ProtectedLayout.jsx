import { Outlet } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";
import MainLayout from "./MainLayout";

function ProtectedLayout() {
  return (
    <ProtectedRoute>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </ProtectedRoute>
  );
}

export default ProtectedLayout;
