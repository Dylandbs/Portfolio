"use client";

import { useState } from 'react';

export default function Navbar({ scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { id: "accueil", label: "Accueil" },
    { id: "apropos", label: "À propos" },
    { id: "projets", label: "Projets" },
    { id: "contact", label: "Contact" },
  ];

  const handleLinkClick = (id) => {
    scrollToSection(id);
    setIsMenuOpen(false); 
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <h3 onClick={() => handleLinkClick(links[0].id)}>Dylan Dubois</h3>
      <div className="burger-menu" onClick={toggleMenu}>
        <div className={`burger-line ${isMenuOpen ? 'line-1-open' : ''}`}></div>
        <div className={`burger-line ${isMenuOpen ? 'line-2-open' : ''}`}></div>
        <div className={`burger-line ${isMenuOpen ? 'line-3-open' : ''}`}></div>
      </div>
      <div className={`links-navbar ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
        {links.map((link) => (
          <button key={link.id} onClick={() => handleLinkClick(link.id)}>
            {link.label}
          </button>
        ))}
      </div>
    </nav>
  );
}