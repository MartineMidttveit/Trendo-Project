import { createContext } from "react"
import useFetch from "../hooks/useFetch";

export const productContext = createContext()

export function ProductProvider({ children }) {
    const [products, setProducts] = useFetch()

    return (
        <productContext.Provider value={{ products, setProducts }}>
            {children}
        </productContext.Provider>
    )
}

export default function Providers({ children }) {
    return (<ProductProvider>{children}</ProductProvider>)
}
