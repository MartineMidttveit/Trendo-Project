import React from 'react';
import Cards from '../components/Cards';
import { useContext } from 'react';
import { productContext } from '../components/Providers';

function Frontpage() {

  const { products } = useContext(productContext)

  return (
    <main className="text-primary font-barlow relative">
      <div className="bg-customGrey shadow-lg">

        <div className="flex justify-center items-center relative">
          <img src="/image.png" alt="Woman with sunglasses in front of a wall of leaves and flowers" className="w-full object-cover h-screen" />

          <div className='absolute left-0 text-customGrey text-left wrapper bg-black bg-opacity-60 h-screen w-full flex flex-col justify-center xl:bg-transparent xl:block xl:h-auto'>
            <p className='text-lg lg:text-xl 2xl:text-2xl font-medium mb-2 2xl:mb-5 pt-28'>SAVE UP TO 20% EXTRA ON THE</p>
            <h1 className='text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold xl:font-medium'>Summer sale</h1>
            <p className='lg:text-2xl 2xl:text-3xl mt-3 2xl:mt-8'>Don't miss out — shop now for the best deals!</p>

            <button type='button'
              className='
                    bg-customOrange 
                    mt-4 
                    w-fit
                    py-2.5
                    px-6
                    text-sm
                    2xl:px-8 
                    2xl:py-3 
                    lg:mt-6
                    xl:mt-8
                    2xl:mt-10 
                    text-primary 
                    font-medium 
                    lg:text-base
                    2xl:text-lg 
                    hover:bg-customGrey 
                    hover:text-customGreen 
                    duration-300'>SHOP NOW</button>
          </div>
        </div>

        <div className='flex lg:items-end flex-col lg:flex-row wrapper'>
          <div className='pt-10 text-left w-full mx-auto'>
            <h1 className='text-2xl font-bold'>All products</h1>
            <p className='2xl:text-lg pt-2'>Showing <span className='font-medium'>11</span> out of <span className='font-medium'>{products?.length}</span> products</p>
          </div>

          <div className="relative sm:w-64 mt-4">
            <select name="sortBy" id="sortBy" className="text-sm xl:text-base border rounded px-3 py-2 outline-none h-10 w-full sm:w-64 xl:h-12" aria-label="Sort listings">
              <option value="Latest">Most popular</option>
              <option value="Ending">Newest products</option>
              <option value="TitleAZ">Lowest price</option>
              <option value="TitleZA">Highest price</option>
              <option value="TitleZA">A to Z</option>
            </select>
          </div>
        </div>

        <Cards products={products} />
      </div>
    </main>
  );
}

export default Frontpage;
