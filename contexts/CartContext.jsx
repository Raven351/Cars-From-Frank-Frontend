import { createContext, useState } from "react";

const CartContext = createContext([], () => {});

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const onAddCartItem = (item) => setCartItems((previousCartItems) => {
        [...previousCartItems, item]
    })

    return (
        <CartContext.Provider value = {[cartItems, onAddCartItem]}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;