import React, { useContext, useEffect, useState } from "react";
import SearchIcon from "../../SVG/SearchIcon";
import SearchContainer from "./SearchContainer";
import { productContext } from "../../Providers";
import { useHref } from "react-router-dom";

function SearchBar({ className }) {
  const { products } = useContext(productContext);
  const link = useHref();
  const classNames = [
    "flex items-center justify-between px-4 py-2 lg:w-3/4 xl:w-full 2xl:w-3/4 border-b border-secondary",
  ].join(" ");

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  function handleSearchProduct(e) {
    const value = e.target.value;
    setSearchValue(value);

    if (value.length <= 0) {
      setSearchOpen(false);
      return null;
    }

    setSearchOpen(true);
  }

  useEffect(() => {
    if (link !== "/") {
      setSearchOpen(false);
    }
  }, [link]);

  return (
    <div className="relative lg:w-1/2 2xl:w-6/7 flex justify-center">
      <div
        className={
          className ? `${classNames} ${className}` : `${classNames} w-full`
        }
      >
        <input
          type="text"
          placeholder={`Search through ${products?.length} products...`}
          className="focus:outline-none bg-customGrey w-full"
          onChange={handleSearchProduct}
          maxLength={20}
        />
        <SearchIcon />
      </div>

      {searchOpen && (
        <SearchContainer
          onClose={() => setSearchOpen(false)}
          searchValue={searchValue}
        />
      )}
    </div>
  );
}

export default SearchBar;
