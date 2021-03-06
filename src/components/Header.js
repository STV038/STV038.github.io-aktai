import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../assets/Logo';
import '../assets/header.scss';

export default function Header() {
  return (
    <React.Fragment>
      <Logo />
      <nav className="navbar fixed-top bg-black d-flex justify-content-center text-center margin-nav">
        <h6 className="home-switch item navbar-brand text-light mx-5">
          <NavLink to="/" exact>
            Home
          </NavLink>
        </h6>
        <h6 className="item navbar-brand text-light mx-5">
          <NavLink to="/services" exact>
            Services
          </NavLink>
        </h6>
        <h6 className="item navbar-brand text-light mx-5">
          <NavLink to="/vision" exact>
            Vision
          </NavLink>
        </h6>
        <h6 className="item navbar-brand text-light mx-5">
          <NavLink to="/about" exact>
            About
          </NavLink>
        </h6>
      </nav>
    </React.Fragment>
  );
}
