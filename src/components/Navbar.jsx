import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navStyles = ({ isActive }) => {
    return {
      backgroundColor: isActive && "rgb(99 102 241)",
    };
  };
  return (
    <nav className="font-libre bg-pink-900 text-slate-100 font-bold text-2xl h-12 w-screen flex gap-8 px-4 justify-start">
      <NavLink
        to="/"
        className="h-full flex items-center px-2"
        style={navStyles}
      >
        Home
      </NavLink>
      <NavLink
        to="/ninjas"
        className="h-full flex items-center px-2"
        style={navStyles}
      >
        Ninjas
      </NavLink>
      <NavLink
        to="/rq-ninjas"
        className="h-full flex items-center px-2"
        style={navStyles}
      >
        React Query
      </NavLink>
    </nav>
  );
};

export default Navbar;
