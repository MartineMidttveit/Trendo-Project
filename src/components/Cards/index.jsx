import React from 'react';
import Thumbnail from './Thumbnail';

function Cards({ products }) {

  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 wrapper mx-auto pt-8 pb-16 gap-x-4 gap-y-6 xl:gap-x-6 2xl:gap-y-10'>
      {products && products.map(product => <Thumbnail key={product.id} product={product} />)}
    </div>
  );
}

export default Cards;


