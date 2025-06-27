import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Nav/Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <header className="custom-navbar">
      <div className="navbar-brand" onClick={() => handleNav('/')}>HireMe</div>
      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <button onClick={() => handleNav('/')}>Home</button>
        <button onClick={() => handleNav('/login')}>Login</button>
        <button onClick={() => handleNav('/register')}>Register</button>
      </div>
      <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </div>
    </header>
  );
}