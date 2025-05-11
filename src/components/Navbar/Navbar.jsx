import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="#" className="logo">Website</a>

      <ul className="navbar-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About</a></li>
      </ul>

      <div className="log-in">
        <a >Book a Call</a>
      </div>

      <div className="hamburger" onClick={() => setOpen(true)}>
        <FiMenu />
      </div>

      {open && (
        <div className="mobile-menu slide-down">
          <FiX className="close-icon" onClick={() => setOpen(false)} />
          <a href="#features" onClick={() => setOpen(false)}>Features</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#pricing" onClick={() => setOpen(false)}>Pricing</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a>Button 1</a>
        </div>
      )}
    </nav>
  );
}
