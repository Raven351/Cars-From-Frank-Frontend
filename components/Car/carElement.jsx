import React from "react"
import Link from "next/link"

const CarElement = ({car, className}) => {
    return(
        <Link href={`/car/${car.id}`} passHref>
            <div className={`cursor-pointer flex flex-row p-3 bg-red-100 hover:bg-red-300 rounded-lg shadow-lg shadow-bg-red-300 border border-stone-900 md:w-72 md:h-24 items-center border-2`}>
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