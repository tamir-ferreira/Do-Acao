import { Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoutes } from "../Components/ProtectedRoutes";
import { About } from "../pages/About";
import { DashboardDonor } from "../pages/DashboardDonor";
import { DashboardReceiver } from "../pages/DashboardReceiver";
import { InitialPage } from "../pages/InitialPage";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<InitialPage />} />
      <Route path="/About" element={<About />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/DashboardDonor" element={<DashboardDonor />} />
        <Route path="/DashboardReceiver" element={<DashboardReceiver />} />
      </Route>
    </Routes>
  );
};
