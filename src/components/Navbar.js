import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-green-900 font-semibold">
          <a href="#">Echofy</a>
        </div>
        <button className="md:hidden" onClick={toggleMenu}>
          ☰
        </button>
        <div className={`md:flex ${isMenuOpen ? 'flex' : 'hidden'} space-x-6`}>
          <a href="#" className="hover:underline text-green-900">Home</a>
          <a href="#" className="hover:underline text-green-900">About</a>
          <a href="#" className="hover:underline text-green-900">Services</a>
          <a href="#" className="hover:underline text-green-900">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
