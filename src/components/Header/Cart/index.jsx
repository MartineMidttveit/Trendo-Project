import React from 'react';
import CartIcon from '../../SVG/CartIcon';
import CartAmount from './CartAmount';
import { Link } from 'react-router-dom';

function Cart() {

  return (
    <div className='relative'>
      <div className='cursor-pointer'>
        <Link to="/cart">
          <CartIcon />
          <CartAmount />
        </Link>
      </div>
    </div>
  );
}

export default Cart;
