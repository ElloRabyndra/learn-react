import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./style.css";
import Home from "./pages/Home";
import OldFormPage from "./pages/OldFormPage.jsx";
import RoutingPage from "./pages/RoutingPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LiftingStateUp" element={<OldFormPage />} />
        <Route path="/Routing" element={<RoutingPage />}>

        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
