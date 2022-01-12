import Link from "next/link"
import Image from "next/image"
import RemoveImage from '../../images/bxs-no-entry.svg'

const CartElement = ({cartItem, onRemoveCarFromCart}) => {
    return (
        <div className="m-2 flex flex-row p-3 border-solid border-2 border-rose-700 place-items-center">
            <Link href={`/car/${cartItem.id}`} passHref>
                <div>
                    <p>{`${cartItem.make}`}</p>
                    <p className="text-xs">{`${cartItem.model}`}</p>
                </div>
            </Link>
            <Link href={`/car/${cartItem.id}`} passHref>
                <div className="flex flex-row-reverse grow pr-3">
                    <p className="">{cartItem.price} PLN</p>
                </div>
            </Link>
            <div className="pt-2" onClick={() => onRemoveCarFromCart(cartItem)}>
                <Image src = {RemoveImage} alt="Remove"/>
            </div>    
        </div>
    )
}

export default CartElement