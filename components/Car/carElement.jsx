import React from "react"
import Link from "next/link"

const CarElement = ({car, cart}) => {
    return(
        <Link href={`/car/${car.id}`} passHref>
            <div className={`cursor-pointer flex flex-row p-3 hover:bg-red-300 rounded-lg shadow-lg 
            shadow-bg-red-300 border border-stone-900 md:w-72 md:h-24 items-center border-2 
            ${isCarInCart(cart, car) ? "bg-amber-100" : "bg-red-100"}`}
            >
                <div className="basis-1/2">
                    <p className="text-lg antialiased tracking-wider">
                        {car.make}
                    </p>
                    <p className="text-sm">
                        {car.model}
                    </p>
                </div>
                <div className="basis-1/2">
                    <p className="text-xs float-right">
                        {`Added on: ${car.dateAdded.substring(0, 10)}`}
                    </p>
                </div>
            </div>
        </Link>

    )
}

export default CarElement

const isCarInCart = (cart, car) => {
    if (typeof cart != "undefined"){
        if (cart.some(carInCart => carInCart.id === car.id)) return true
    }
    return false
}