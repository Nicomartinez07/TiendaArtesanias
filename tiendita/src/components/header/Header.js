import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="contact-header">
      <div className="contact-header-inner">
        <Link to="/" className="contact-logo ">
          Artesanías
        </Link>
        <nav className="contact-nav">
          <Link to="/" className={`nav-link indie ${currentPath === "/" ? "active" : ""}`}>
            Inicio
          </Link>
          <Link to="/products" className={`nav-link indie ${currentPath === "/products" ? "active" : ""}`}>
            Productos
          </Link>
          <Link to="/about" className={`nav-link indie ${currentPath === "/about" ? "active" : ""}`}>
            Sobre nosotros
          </Link>
          <Link to="/contact" className={`nav-link indie ${currentPath === "/contact" ? "active" : ""}`}>
            Contacto
          </Link>
          <div className="search-container">
            <input type="text" placeholder="Buscador" className="search-input" />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
