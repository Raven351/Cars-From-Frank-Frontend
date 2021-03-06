import Link from "next/link"
import Image from "next/image"
import RemoveImage from '../../images/bxs-no-entry.svg'
import moneyFormatter from "../../functions/moneyFormatter"

const CartElement = ({cartItem, onRemoveCarFromCart}) => {
    return (
        <div className="m-2 flex flex-row p-3 border-solid border-2 border-rose-700 place-items-center cursor-pointer hover:bg-red-100">
            <Link href={`/car/${cartItem.id}`} passHref>
                <div>
                    <p>{`${cartItem.make}`}</p>
                    <p className="text-xs">{`${cartItem.model}`}</p>
                </div>
            </Link>
            <Link href={`/car/${cartItem.id}`} passHref>
                <div className="flex flex-row-reverse grow pr-3">
                    <p className="">{moneyFormatter(cartItem.price)}</p>
                </div>
            </Link>
            <div className="pt-2 cursor-pointer" onClick={() => onRemoveCarFromCart(cartItem)}>
                <Image src = {RemoveImage} alt="Remove"/>
            </div>    
        </div>
    )
}

export default CartElement