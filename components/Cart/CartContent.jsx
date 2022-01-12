import Link from "next/link"
import CartElement from "./CartElement"
import CartTotalCounter from "./CartTotalCounter"

const CartContent = ({props}) => {
    return (
            <>
            {props.cart.map(cartItem => (
                <CartElement key={cartItem.id} cartItem = {cartItem} onRemoveCarFromCart = {props.onRemoveCarFromCart}/>
            ))}
            <CartTotalCounter cart = {props.cart}/>
            </>


    )
}

export default CartContent