import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../assets/Logo';
import '../assets/header.scss';

export default function Header() {
  return (
    <React.Fragment>
      <Logo />
      <nav className="navbar fixed-top bg-black d-flex justify-content-center text-center margin-nav">
        <h5 className="home-switch item navbar-brand  mx-5">
          <NavLink to="/" exact>
            Home
          </NavLink>
        </h5>
        <h5 className="item navbar-brand  mx-5">
          <NavLink to="/services" exact>
            Services
          </NavLink>
        </h5>
        <h5 className="item navbar-brand  mx-5">
          <NavLink to="/vision" exact>
            Vision
          </NavLink>
        </h5>
        <h5 className="item navbar-brand  mx-5">
          <NavLink to="/team" exact>
            Team
          </NavLink>
        </h5>
      </nav>
    </React.Fragment>
  );
}
