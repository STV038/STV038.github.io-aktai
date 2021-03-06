import React from 'react';
import Logo from '../assets/Logo';
import '../assets/nav-items.scss';
import '../assets/header.scss';

export default function Header() {
  return (
    <React.Fragment>
      <Logo />
      <nav className="navbar fixed-top bg-black d-flex justify-content-center text-center">
        <p className="item navbar-brand text-light flex-fill">
          Services
        </p>
        <p className="item navbar-brand text-light flex-fill">
          Vision
        </p>
        <p className="item navbar-brand text-light flex-fill">
          About
        </p>
      </nav>
    </React.Fragment>
  );
}
