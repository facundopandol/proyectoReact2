import "bootstrap-icons/font/bootstrap-icons.css";
import React from 'react';
import '../styles/NavBar.css';
import CartWidget from './CartWidget';
import logo from '../assets/logo.png';

const NavBar = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center w-100">
          <div>
            <a className="navbar-logo" href="#">
              <img src={logo} alt="Logo" className="logo"/>
            </a>
          </div>

          <div className="d-flex align-items-center">
            <ul className="navbar-nav flex-row">
              <li className="nav-item custom-margin">
                <a className="nav-link" href="#">Velas</a>
              </li>
              <li className="nav-item custom-margin">
                <a className="nav-link" href="#">Sahumerios</a>
              </li>
              <li className="nav-item custom-margin">
                <a className="nav-link" href="#">Inciensos</a>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center ml-auto">
            <div className="mr-2">
              <input type="text" placeholder="Buscar..." className="form-control size-input" />
            </div>
            <a className="nav-link size-cart" href="#"><CartWidget/></a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
