import { useCart } from '../../../hooks/useCart';

function CartAmount() {
  const { cart } = useCart()
  return (
    <span className='bg-customGreen rounded-full h-6 w-6 absolute flex items-center justify-center text-sm font-medium bottom-6 left-9 text-customGrey'>
      {cart.length}
    </span>
  );
}

export default CartAmount;