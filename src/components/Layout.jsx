
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

import Providers from "./Providers";
import { CartProvider } from "../hooks/useCart";

export default function Layout() {
    return (
        <CartProvider>
            <Providers>
                <Header />
                <Outlet />
                <Footer />
            </Providers>
        </CartProvider>
    )
}