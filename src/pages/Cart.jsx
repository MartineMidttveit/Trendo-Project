import React from "react";
import MinusCircleIcon from "../components/SVG/MinusCircleIcon";
import PlusCircleIcon from "../components/SVG/PlusCircleIcon";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import useCurrencyFormatter from "../hooks/useCurrencyFormatter";

const Cart = () => {
  const { cart, totalPrice, increaseQuantity, decreaseQuantity } = useCart();
  const formattedPrice = useCurrencyFormatter();

  return (
    <div className="flex flex-col xl:flex-row pb-12">
      <div className="font-barlow bg-customGrey w-full wrapper">
        <div className="my-16">
          <div className="flex flex-col text-left gap-5">
            <strong className="font-bold 2xl:font-semibold text-2xl 2xl:text-3xl">
              Shopping cart
            </strong>
            <strong className="text-lg font-normal">
              <span className="font-semibold">{cart.length} items</span> in your
              shopping cart
            </strong>
          </div>

          <div className="mt-8 2xl:mt-12 bg-white rounded p-6">
            <div className="gap-6 text-lg md:grid hidden grid-cols-3 px-8 py-6 xl:py-2">
              <div className="text-left font-semibold">Product</div>
              <div className="font-semibold">Price</div>
              <div className="text-left font-semibold">Quantity</div>
            </div>

            <div className="flex flex-col gap-6 items-center justify-between xl:justify-items-stretch py-4">
              {cart.map((product) => (
                <React.Fragment key={product.id}>
                  <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-between w-full xl:px-8">
                    <div className="flex gap-9 items-center">
                      <img
                        className="w-32 h-36 rounded object-cover"
                        src={product.image.url}
                        alt={product.image.alt}
                      />
                      <div className="hidden md:flex flex-col space-y-1.5">
                        {product.tags.map((tag, index) => (
                          <div
                            key={index}
                            className="text-base text-secondary text-left leading-none capitalize"
                          >
                            {tag}
                          </div>
                        ))}

                        <div className="font-semibold text-base text-left capitalize leading-none">
                          {product.title}
                        </div>
                      </div>
                    </div>

                    <div className="md:hidden flex flex-col justify-start items-start gap-3">
                      <div className="flex flex-col gap-1">
                        {product.tags.map((tag, index) => (
                          <div
                            key={index}
                            className="text-base text-secondary text-left leading-none capitalize"
                          >
                            {tag}
                          </div>
                        ))}

                        <div className="font-semibold text-lg">
                          {product.title}
                        </div>
                      </div>

                      <div className="flex gap-1.5">
                        <span>{formattedPrice(product?.price)}</span>
                        <span className="text-gray-400 line-through">
                          {formattedPrice(product?.discountedPrice)}
                        </span>
                      </div>

                      <div className="items-center gap-5 flex">
                        <button
                          type="button"
                          onClick={() => decreaseQuantity(product.id)}
                        >
                          <MinusCircleIcon />
                        </button>
                        <span className="font-semibold text-lg">
                          {product.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => increaseQuantity(product.id)}
                        >
                          <PlusCircleIcon />
                        </button>
                      </div>
                    </div>

                    <div className="md:flex-col md:gap-0 gap-2.5 md:flex hidden">
                      <span className="text-gray-400 line-through">
                        {formattedPrice(product?.price)}
                      </span>
                      <span className="font-bold">
                        {formattedPrice(product?.discountedPrice)}
                      </span>
                    </div>

                    <div className="items-center gap-5 hidden md:flex">
                      <button
                        type="button"
                        onClick={() => decreaseQuantity(product.id)}
                      >
                        <MinusCircleIcon />
                      </button>
                      <span className="font-semibold text-lg">
                        {product.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => increaseQuantity(product.id)}
                      >
                        <PlusCircleIcon />
                      </button>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pl-10 pr-[6.5%] mt-10 2xl:mt-20 w-full flex flex-col lg:flex-row xl:flex-col gap-9 items-baseline xl:w-2/3">
        <div className="bg-customGrey w-full p-8 2xl:p-10 rounded">
          <strong className="text-lg font-semibold block text-left mb-6">
            Cart summary
          </strong>
          <div className="flex flex-col text-left w-full">
            <span className="text-lg mb-4">Subtotal:</span>
            <div>
              {cart.map((product) => (
                <div key={product.id} className="flex justify-between w-full">
                  <span className="font-semibold">
                    {product.quantity} {product.title}
                  </span>
                  <span>
                    {formattedPrice(product.discountedPrice * product.quantity)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="text-lg">Taxes:</span>
            <span>$ 2</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-lg">Shipping:</span>
            <span className="text-lg italic">FREE</span>
          </div>

          <div className="h-px w-full bg-black my-9" />

          <div className="flex items-center justify-between text-lg font-semibold">
            <span>Total:</span>
            <span>{formattedPrice(totalPrice)}</span>
          </div>
        </div>

        <div className="w-full">
          <div className="bg-customGrey w-full p-10 rounded mb-10">
            <strong className="text-lg font-semibold block text-left mb-6">
              Got a gift card or coupon code?
            </strong>
            <input
              className="w-full h-14 bg-white border border-black rounded-md px-5"
              placeholder="Coupon code"
            />
          </div>

          <div className="flex lg:gap-2.5 gap-5 pb-10">
            <Link className="lg:w-2/4 w-full" to="/">
              <button type='button' className="rounded ring-1 ring-black uppercase p-4 w-full font-medium">
                Shop More
              </button>
            </Link>
            <Link className="lg:w-2/4 w-full" to="/checkout">
              <button type='button' className="rounded bg-customOrange uppercase p-4 w-full font-medium">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
