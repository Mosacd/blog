import Layout from "../mycomponents/layout/layout";
import { Route, Routes } from "react-router-dom";
import { AUTH_ROUTES } from "./auth";
import { DASHBOARD_ROUTES } from "./dashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {AUTH_ROUTES}
        {DASHBOARD_ROUTES}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
