import React from "react";
import CarElement from '../../components/Car/carElement'

const HomeContent = ({data, onAddCarToCart}) => {
    return (
        <div className="snap-y mb-8">
            {
            data.vehicles.map(car => (
                <CarElement key={car.id} car = {car} className = "m-2"/>
            ))}
        </div>
    )
}

export default HomeContent