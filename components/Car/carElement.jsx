import React from "react"

const CarElement = ({car, className}) => {
    return(
        <div className={`${className} flex flex-row p-3 bg-red-300 rounded-lg shadow-lg shadow-bg-red-300 border border-stone-900`}>
            <div className="basis-1/2">
                <p className="text-lg antialiased tracking-wider">
                    {car.make}
                </p>
                <p className="text-sm">
                    {car.model}
                </p>
            </div>
            <div className="basis-1/2">
                <p className="text-xs">
                    {`Added on: ${car.dateAdded.substring(0, 10)}`}
                </p>
            </div>

        </div>
    )
}

export default CarElement