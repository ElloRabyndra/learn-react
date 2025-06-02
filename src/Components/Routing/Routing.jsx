import { NavLink, Outlet } from "react-router";

export default function Routing() {
  return (
    <div className="p-5 border shadow-xs rounded-2xl min-h-60">
      <nav className="flex justify-center gap-4 mb-4">
        <NavLink
          className={({ isActive }) => isActive ? "font-semibold text-primary" : "transition-all hover:font-semibold hover:text-primary"}
          to="/Routing/Page1"
        >
          Content 1
        </NavLink>
        <NavLink
          className={({ isActive }) => isActive ? "font-semibold text-primary" : "transition-all hover:font-semibold hover:text-primary"}
          to="/Routing/Page2"
        >
          Content 2
        </NavLink>
        <NavLink
          className={({ isActive }) => isActive ? "font-semibold text-primary" : "transition-all hover:font-semibold hover:text-primary"}
          to="/Routing/Page3"
        >
          Content 3
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}