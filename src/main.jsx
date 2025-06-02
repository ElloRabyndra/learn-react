import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./style.css";
import Home from "./pages/Home";
import OldFormPage from "./pages/OldFormPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LiftingStateUp" element={<OldFormPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
