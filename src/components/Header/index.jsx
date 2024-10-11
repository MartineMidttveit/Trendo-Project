import React, { useState } from 'react';
import Cart from './Cart';
import Hamburger from './Hamburger';
import Dropdown from './Hamburger/Dropdown';
import SearchBar from './Searchbar';
import { Link } from 'react-router-dom';


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <header className='relative lg:sticky top-0 z-20 w-full font-barlow'>
      <div className="bg-customGreen flex py-3 items-center justify-center text-customGrey text-sm md:text-base 2xl:text-lg">
        <p className='font-medium'>Free shipping on orders over $ 100</p>
      </div>

      <div className="flex justify-between items-center wrapper py-6 2xl:text-lg text-primary bg-customGrey shadow-lg">
        <Link to="/" className="font-bold text-2xl 2xl:text-4xl w-1/4 xl:w-2/5 flex items-start">Trendo</Link>

        <SearchBar className="lg:flex hidden" />

        <nav className="hidden lg:flex w-1/4 xl:w-2/5 justify-end items-center">
          <Link to="/">Home</Link>
          <Link to="/contact" className="px-8">Contact</Link>
          <Cart />
        </nav>

        {/* Hamburger Menu and Cart Icon for smaller screens */}
        <div className="lg:hidden flex items-center">
          <Hamburger isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          <button>
            <Cart />
          </button>
        </div>
      </div>

      {/* Dropdown menu for mobile */}
      <Dropdown isMenuOpen={isMenuOpen} />
    </header>
  );
}

export default Header;