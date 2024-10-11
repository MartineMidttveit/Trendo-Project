import React from "react";
import SearchBar from "../Searchbar";

function Dropdown({ isMenuOpen }) {
  return (
    <div
      className="absolute right-0 transition-all duration-300 lg:hidden flex flex-col text-primary py-4 w-full md:w-2/3 bg-white shadow-md rounded px-10 border-t border-secondary"
      style={{
        opacity: isMenuOpen ? 1 : 0,
        visibility: isMenuOpen ? "visible" : "hidden",
        pointerEvents: isMenuOpen ? "auto" : "none",
        transform: isMenuOpen ? "translateY(0)" : "translateY(-10%)",
      }}
    >
      <SearchBar />

      <a href="/" className="py-4 border-b border-primary w-full text-center">
        Home
      </a>
      <a href="/contact" className="py-4 w-full text-center">
        Contact
      </a>
    </div>
  );
}

export default Dropdown;
