import * as React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";

import Layout from "./Component/Layout";
import LoginPage from "./Pages/Login/Login";
import Registration2 from "./Pages/Registation2/Registration2";
import Verifypassword from "./Pages/Registation2/Verifypassword/Verify";
import ForgetPassword from "./Pages/Forget/Forget";
import Shop from "./Pages/Shop/Shop";
import { useAuth } from "./hook";

const ProtectedRoute = ({ user, redirectPath = "/login" }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

const AuthenticateRoute = ({ user, redirectPath = "/" }) => {
  if (user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default function App() {
  const { session } = useAuth();
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<AuthenticateRoute user={session} />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<Registration2 />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/verify-otp" element={<Verifypassword />} />
        </Route>

        <Route path="/" element={<ProtectedRoute user={session} />}>
          <Route path="/" element={<Shop />} />
         
        </Route>
      </Route>
    </Routes>
  );
}
