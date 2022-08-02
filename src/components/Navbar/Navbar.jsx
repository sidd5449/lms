import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="app__navbar">
        <div className="app__navbar-logo">
            LMS
        </div>
        <div className="app__navbar-menu">
            <a href="">Link</a>
            <a href="">Link</a>
            <a href="">Link</a>
        </div>
    </div>
  )
}

export default Navbar