import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <ul className="flex bg-yellow-400 font-semibold shadow-xl p-2 gap-2 top-0  fixed w-full z-50 justify-center">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
