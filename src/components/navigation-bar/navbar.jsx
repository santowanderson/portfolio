import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.css';

function NavBar() {
  return (
    <nav id='navbar'>
      <ul>
        <li><NavLink to="about">About</NavLink></li>
        <li><NavLink to="resume">Resume</NavLink></li>
        <li><NavLink to="portfolio">Portfolio</NavLink></li>
        <li><NavLink to="contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;