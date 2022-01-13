import isCarInCart from "../../functions/isCarInCart"
import Image from "next/image"
import AddToCartImage from '../../images/bxs-cart-add.svg'
import RemoveFromCartImage from '../../images/bxs-no-entry.svg'

const CarAddRemoveCartButton = ({data}) => {
    return(
        <div 
        className=
        {`
        ${isCarInCart(data.cart, data.vehicle) ? "bg-red-400 hover:bg-red-600" : "bg-green-400 hover:bg-green-600"} 
        h-8 rounded-md flex place-content-center cursor-pointer
        `} 
        onClick={ () => {
            if (!isCarInCart(data.cart, data.vehicle)) data.onAddCarToCart(data.vehicle)
            else data.onRemoveCarFromCart(data.vehicle)
        }}
        >
            <Image src={isCarInCart(data.cart, data.vehicle) ? RemoveFromCartImage : AddToCartImage} alt="Add to cart"/>
        </div>
    )
}

export default CarAddRemoveCartButton