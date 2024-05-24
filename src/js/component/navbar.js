import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <span className="navbar-brand ms-5 mb-0 h1">Contact list</span>
      </Link>
      <div className="ml-auto me-5">
        <Link to="/contactos">
          <button className="btn btn-primary">Go to contacts</button>
        </Link>
      </div>
    </nav>
  );
};
