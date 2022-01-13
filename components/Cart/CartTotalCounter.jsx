import moneyFormatter from "../../functions/moneyFormatter"

const CartTotalCounter = ({cart}) => {
    return(
        <div className="p-3 m-2 border border-solid border-rose-700 border-4 bg-amber-300">
            <p className="text-xs">Cars saved in cart: {cart.length}</p>
            <div className="grow flex">
                <p>TOTAL: </p>
                <p className="grow place-self-end text-right">{moneyFormatter(sumCartTotalValue(cart))}</p> 
            </div>
        </div>
    )
}

const sumCartTotalValue = (cart) => {
    return cart.map(cartItem => cartItem.price).reduce((a,b) => a+b)
}

export default CartTotalCounter