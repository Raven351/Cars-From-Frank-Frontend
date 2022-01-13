import React from "react";
import CarElement from '../../components/Car/carElement'

const HomeContent = ({data, onAddCarToCart, cart}) => {
    return (
        <div className=" mb-8 flex flex-col md:flex-row md:flex-wrap gap-3 px-4 pt-4 w-screen place-content-center max-w-6xl">
            {
            data.vehicles.map(car => (
                <CarElement key={car.id} car = {car} cart = {cart}/>
            ))}
        </div>
    )
}

export default HomeContent