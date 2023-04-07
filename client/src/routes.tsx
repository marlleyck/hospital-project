import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthContextProvider } from "./contexts/AuthContext";
import { AppContextProvider } from "./contexts/AppContext";

import { LoginPage } from "./pages/Login";
import { RegisterPage } from "./pages/Register";
import { PrivateRoute } from "./components/PrivateRoute";
import { PatientsPage } from "./pages/Patients";
import { AddPatient } from "./pages/AddPatient";
import { Patient } from "./components/Patient";
import { PatientPage } from "./pages/Patient";

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
            <Route path="/addpatient" element={<AddPatient />} />
            <Route path="/patient/:id" element={<PatientPage />} />
          </Routes>
        </AppContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
