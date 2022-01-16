import React from "react";
import CarElement from '../../components/Car/carElement'

const HomeContent = ({data, onAddCarToCart, cart}) => {
    return (
        <div className=" mb-8 flex flex-col md:flex-row md:flex-wrap gap-3 px-4 pt-4 w-screen place-content-center max-w-6xl">
            {
                renderHomeContent(data.vehicles, cart)
            }
        </div>
    )
}

export default HomeContent

const renderHomeContent = (vehicles, cart) => {
    if (typeof vehicles != "undefined"){
        return (
            vehicles.map(car => (
                <CarElement key={car.id} car = {car} cart = {cart}/>
            )))
    }
    else return (
        <p>
            
        </p>
    )
}