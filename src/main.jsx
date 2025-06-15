import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import ThemeProvider from "./context/ThemeContext";
import "./style.css";
import Home from "./pages/Home";
import OldFormPage from "./pages/OldFormPage.jsx";
import RoutingPage from "./pages/RoutingPage";
import AuthPage from "./pages/AuthPage";
import FormHandling from "./pages/FormHandling";
import Page from "./components/Routing/Page";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import TestFetch from "./pages/TestFetch.jsx";
import MoviesPage from "./pages/MoviesPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="LiftingStateUp" element={<OldFormPage />} />
          <Route path="Routing" element={<RoutingPage />}>
            <Route index element={<Page>No Content Open</Page>} />
            <Route path="Page1" element={<Page>Content 1</Page>} />
            <Route path="Page2" element={<Page>Content 2</Page>} />
            <Route path="Page3" element={<Page>Content 3</Page>} />
          </Route>
          <Route path="FormHandling" element={<FormHandling />} />
          <Route element={<AuthPage />}>
            <Route path="Register" element={<Register />} />
            <Route path="Login" element={<Login />} />
          </Route>
          <Route path="Fetch" element={<TestFetch />}></Route>
          <Route path="Movies" element={<MoviesPage />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
