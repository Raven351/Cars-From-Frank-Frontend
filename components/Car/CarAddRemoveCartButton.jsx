import isCarInCart from "../../functions/isCarInCart"
import Image from "next/image"
import AddToCartImage from '../../images/bxs-cart-add.svg'

const CarAddRemoveCartButton = ({data}) => {
    return(
        <div 
        className=
        {`
        ${isCarInCart(data.cart, data.vehicle) ? "bg-red-400" : "bg-green-400"} 
        h-8 rounded-md flex place-content-center
        `} 
        onClick={ () => {
            if (!isCarInCart(data.cart, data.vehicle)) data.onAddCarToCart(data.vehicle)
            else data.onRemoveCarFromCart(data.vehicle)
        }}
        >
            <Image src={AddToCartImage} alt="Add to cart"/>
        </div>
    )
}

export default CarAddRemoveCartButton