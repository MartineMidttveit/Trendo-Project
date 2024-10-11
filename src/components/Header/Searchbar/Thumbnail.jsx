
import React from 'react';
import StarIcon from '../../SVG/StarIcon';
import { Link } from 'react-router-dom';

function Thumbnail({ product }) {
  return (
    <Link to={`product/${product.id}`}>
      <div className='flex py-4 items-start w-full hover:bg-customDarkGray duration-75 px-8 2xl:px-12'>
        <img src={product.image.url} alt="Product thumbnail" className='size-20 object-cover border border-secondary aspect-square' />

        <div className='flex flex-col w-full'>
          <div className='flex w-full items-center justify-between pl-8'>
            <p className='font-semibold 2xl:text-lg'>{product.title}</p>
            <span className='flex items-center gap-1 font-medium'>
              {product.rating === 0 ?
                'No reviews yet'
                :
                <>
                  <StarIcon />
                  {product.rating}
                </>
              }
            </span>
          </div>

          <div className='flex gap-3 pl-8'>
            {product.discountedPrice < product.price && <p className='line-through text-red-800'>$ {product.price}</p>}
            <p className='font-medium'>$ {product.discountedPrice}</p>
          </div>

        </div>
      </div>
    </Link>
  );
}

export default Thumbnail;

