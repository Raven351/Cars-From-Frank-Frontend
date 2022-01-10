import React from "react";
import Warehouse from "../../types/warehouse";

const HomeContent = ({data}) => {
    return (
        <ul className = "list-disc">
            {data.warehouses.map((warehouse: Warehouse , index: React.Key) => (
                <li key={index}>{warehouse.name}</li>
            ))}
        </ul>
    )
}

export default HomeContent