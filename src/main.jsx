import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./style.css";
import Home from "./pages/Home";
import OldFormPage from "./pages/OldFormPage.jsx";
import RoutingPage from "./pages/RoutingPage";
import Page from "./Components/Routing/Page";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LiftingStateUp" element={<OldFormPage />} />
        <Route path="/Routing" element={<RoutingPage />}>
          <Route index element={<Page>No Content Open</Page>} />
          <Route path="Page1" element={<Page>Content 1</Page>} />
          <Route path="Page2" element={<Page>Content 2</Page>} />
          <Route path="Page3" element={<Page>Content 3</Page>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);