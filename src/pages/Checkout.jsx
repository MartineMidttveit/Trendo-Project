import React from 'react'
import ArrowLeftIcon from '../components/SVG/ArrowLeftIcon'
import { Link } from 'react-router-dom'
import CheckCircleIcon from '../components/SVG/CheckCircleIcon'
import { useCart } from '../hooks/useCart'
import { useEffect } from 'react'

const Checkout = () => {
  const { clearCart } = useCart()
  useEffect(() => {
    clearCart()
  }, [])


  return (
    <div
      className="bg-customGrey items-start justify-center flex"
      style={{
        height: 'calc(100vh - 9.3rem)',
      }}
    >
      <div className="wrapper font-barlow">
        <Link
          to="/"
          className="text-lg font-semibold flex items-center mt-12 gap-5 text-left"
        >
          <ArrowLeftIcon />
          Shop more
        </Link>

        <div className="bg-white flex items-center justify-center flex-col lg:w-[47rem] py-16 mt-6">
          <CheckCircleIcon />

          <span className="text-xl mb-1 mt-6">Thank you.</span>
          <strong className="lg:text-2xl text-xl font-semibold">
            Your order is confirmed
          </strong>

          <p className="lg:text-lg text-base px-5 max-w-[42ch] w-full block mt-5">
            The shipping and order confirmation will be sent to the provided
            email as soon as your order ships.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Checkout
