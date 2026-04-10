import React from 'react';

export default function Header({ logo, links }) {
  return (
    <div className="header-wrapper">
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>

      <div className="nav-container">
        {links.map((link, i) => (
          <a key={i} href="#">
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}