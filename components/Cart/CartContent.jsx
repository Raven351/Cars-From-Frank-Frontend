import CartElement from "./CartElement"
import CartTotalCounter from "./CartTotalCounter"

const CartContent = ({props}) => {
    if (props.cart.length > 0) 
        return (
            <div className="w-screen max-w-6xl">
            {props.cart.map(cartItem => (
                <CartElement key={cartItem.id} cartItem = {cartItem} onRemoveCarFromCart = {props.onRemoveCarFromCart}/>
            ))}
            <CartTotalCounter cart = {props.cart}/>
            </div>
        )
    else return (
        <div className="flex flex-col grow justify-center h-[75vh]">
            <p className="text-center self-center text-4xl text-zinc-300">
                {"There are no cars in your cart :< "}
            </p>
        </div>
    )
}

export default CartContent