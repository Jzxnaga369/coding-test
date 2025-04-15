import React from 'react';

export default function NavbarComponent() {
  return (
    <div className="navbar">
      <span className="navbar-brand">
        <a href="">
          <span>Juan<br />Sanjaya</span>
        </a>
      </span>
      <nav className="navbar-nav">
        <ul className="navbar-menu">
          <li className="navbar-menu-item active">
            <a href="">
              <span>Home</span>
            </a>
          </li>
          <li className="navbar-menu-item">
            <a href="">
              <span>About</span>
            </a>
          </li>
          <li className="navbar-menu-item">
            <a href="">
              <span>Projects</span>
            </a>
          </li>
          <li className="navbar-menu-item">
            <a href="">
              <span>Services</span>
            </a>
          </li>
          <li className="navbar-menu-item">
            <a href="">
              <span>Blog</span>
            </a>
          </li>
        </ul>
      </nav>
      <button className="navbar-button">Contact me</button>
    </div>
  );
}