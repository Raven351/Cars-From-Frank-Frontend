

const CartTotalCounter = ({cart}) => {
    return(
        <div className="p-3 m-2">
            <p className="text-xs">Cars saved in cart: {cart.length}</p>
            <div className="grow flex">
                <p>TOTAL: </p>
                <p className="grow place-self-end">{sumCartTotalValue(cart)}</p> 
            </div>
        </div>
    )
}

const sumCartTotalValue = (cart) => {
    return cart.map(cartItem => cartItem.price).reduce((a,b) => a+b)
}

export default CartTotalCounter