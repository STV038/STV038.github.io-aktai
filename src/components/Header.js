import React from 'react';
import Logo from '../assets/Logo';
import '../assets/nav-items.scss';
import '../assets/header.scss';

export default function Header() {
  return (
    <React.Fragment>
      <Logo />
      <nav className="navbar fixed-top bg-black d-flex justify-content-center text-center margin-nav">
        <h6 className="item navbar-brand text-light mx-5">
          Services
        </h6>
        <h6 className="item navbar-brand text-light mx-5">Vision</h6>
        <h6 className="item navbar-brand text-light mx-5">About</h6>
      </nav>
    </React.Fragment>
  );
}
