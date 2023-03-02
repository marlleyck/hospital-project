import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LoginPage } from "./pages/Login";
import { RegisterPage } from "./pages/Register";
import { Home } from "./pages/Home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
