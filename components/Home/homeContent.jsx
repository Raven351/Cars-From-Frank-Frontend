import React from "react";

const HomeContent = ({data}) => {
    return (
        <ul className = "list-disc">
            {data.warehouses.map((warehouse , index) => (
                <li key={index}>{warehouse.name}</li>
            ))}
        </ul>
    )
}

export default HomeContent