import Link from "next/link"
import CartElement from "./CartElement"

const CartContent = ({props}) => {
    return (
        props.cart.map(cartItem => (
            <CartElement key={cartItem.id} cartItem = {cartItem} onRemoveCarFromCart = {props.onRemoveCarFromCart}/>
        ))
    )
}

export default CartContent