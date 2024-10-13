import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

import Providers from './Providers'
import { CartProvider } from '../hooks/useCart'

export default function Layout() {
  return (
    <CartProvider>
      <Providers>
        <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </Providers>
    </CartProvider>
  )
}
