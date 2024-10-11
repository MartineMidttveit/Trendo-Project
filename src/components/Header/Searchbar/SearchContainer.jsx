import React from 'react';
import CloseIcon from '../../SVG/CloseIcon';
import NoResults from './NoResults';
import SearchResults from './SearchResults';
import { useContext, useEffect, useState } from 'react';
import { productContext } from '../../Providers';

function SearchContainer({ onClose, searchValue }) {


  const [searchResult, setSearchResult] = useState([])
  const { products } = useContext(productContext)

  useEffect(() => {

    setSearchResult(products.filter(product => product.title.toLowerCase().includes(searchValue.toLowerCase())))


  }, [searchValue])

  return (
    <div className="absolute z-10 justify-center top-[4.313rem] w-screen h-screen bg-black bg-opacity-20 flex font-barlow">
      <div className='bg-customGrey h-fit lg:w-[30rem] xl:w-[35rem] 2xl:w-[40rem] flex flex-col items-start relative py-10 2xl:py-12'>
        <div className='flex justify-between items-center w-full px-8 2xl:px-12'>
          <div className='flex items-center 2xl:text-xl gap-2'>
            <p className='font-bold'>Search results</p>
            <span className='font-semibold text-secondary'>{`(${searchResult.length})`}</span>
          </div>

          <button onClick={onClose} >
            <CloseIcon />
          </button>
        </div>

        <p className='2xl:text-lg py-4 pl-8 2xl:pl-12'>{`The search for "${searchValue}" gave ${searchResult.length} results.`}</p>

        {/* No search results */}

        {searchResult.length > 0 ? <SearchResults products={searchResult} /> :
          <NoResults />
        }
      </div>
    </div>
  );
}

export default SearchContainer;