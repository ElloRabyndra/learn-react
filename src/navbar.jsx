import { useState } from "react";

function Navbar() {
  return (
    <nav className="font-medium text-2xl p-4">
      <ul className="flex justify-center items-center gap-10 *:after:content-[''] *:after:block *:after:border *:after:border-blue-300 *:after:scale-x-0 *:after:transition-all *:after:duration-300">
        <li className="hover:after:scale-x-105 hover:text-blue-300 p-2">
          <a href="">Home</a>
        </li>
        <li className="hover:after:scale-x-105 hover:text-blue-300 p-2">
          <a href="">About</a>
        </li>
        <li className="hover:after:scale-x-105 hover:text-blue-300 p-2">
          <a href="">Services</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
