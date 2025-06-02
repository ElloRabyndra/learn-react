import { NavLink } from "react-router";
export default function Routing({Outlet}) {
  return (
    <div className="p-5 border shadow-xs rounded-2xl min-h-60">
      <nav className="flex gap-4 ">
        <NavLink
          className="transition-all hover:font-semibold hover:text-primary"
          to="/Page1"
        >
          Page 1
        </NavLink>
        <NavLink
          className="transition-all hover:font-semibold hover:text-primary"
          to="/Page2"
        >
          Page 2
        </NavLink>
        <NavLink
          className="transition-all hover:font-semibold hover:text-primary"
          to="/Page3"
        >
          Page 3
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}