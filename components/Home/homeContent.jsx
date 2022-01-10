import React from "react";
import CarElement from '../../components/Car/carElement'

const HomeContent = ({data}) => {
    return (
        <>
        {data.warehouses.map(warehouse => (
            warehouse.carsInWarehouse.vehicles.map(car => (
                <CarElement key={car.id} car = {car} className = "m-2"/>
            ))
        ))}
        </>
    )
}

export default HomeContent