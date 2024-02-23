import "bootstrap-icons/font/bootstrap-icons.css";
import React from 'react';
import '../styles/NavBar.css';
import { CartWidget } from './CartWidget';
import { Categories } from './Categories';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="navbar-brand">LOGO</div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Categories />
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
}

