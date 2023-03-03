import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthContextProvider } from "./contexts/AuthContext";
import { AppContextProvider } from "./contexts/AppContext";

import { LoginPage } from "./pages/Login";
import { RegisterPage } from "./pages/Register";
import { Home } from "./pages/Home";
import { PrivateRoute } from "./components/PrivateRoute";
import { PatientsPage } from "./pages/Patients";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <AppContextProvider>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/patients"
              element={
                <PrivateRoute>
                  <PatientsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
          </Routes>
        </AppContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
