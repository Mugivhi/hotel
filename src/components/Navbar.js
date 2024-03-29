import React, { useState } from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import './navbar.css';
// import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <i className='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/Aboutus'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About us <i className='fas fa-caret-down' />
            </Link>
            {/* {dropdown && <Dropdown />} */}
          </li>
          <li className='nav-item'>
            <Link
              to='/Profilepage'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Profile
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/Contactus'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contacts
            </Link>
          </li>
          <li className='nav-item'>
          <Link
              to='/Authentication'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Login
            </Link>
          </li>
          <li className='nav-item'>
          <Link
              to='/Adminlogin'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Admin
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;