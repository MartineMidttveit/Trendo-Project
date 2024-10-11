import React from 'react';
import HamburgerIcon from '../../SVG/HamburgerIcon';
import CloseIcon from '../../SVG/CloseIcon'; 

function Hamburger({ isMenuOpen, toggleMenu }) {
  return (
    <button onClick={toggleMenu} className="focus:outline-none">
      {isMenuOpen ? (
        <CloseIcon/>
      ) : (
        <HamburgerIcon/>
      )}
    </button>
  );
}

export default Hamburger;

