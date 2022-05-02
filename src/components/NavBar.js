import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar fixed-top'>
        <div className='navbar-container'>
        <Link to="hero" spy={true} smooth={true} offset={-150} duration={500} className='navbar-logo'>Gab<i class='fab' /></Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
            <Link to="about" spy={true} smooth={true} offset={-80} duration={500} className='nav-links'>About</Link>
            </li>
            <li className='nav-item'>
            <Link to="projects" spy={true} smooth={true} offset={-50} duration={500} className='nav-links'>Projects</Link>
            </li>
            <li className='nav-item'>
            <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} className='nav-links'>Contact</Link>
            </li> 
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
