import Car from "./car";

type Warehouse = {
    id: string;
    name: string;
    warehouseLocation: {
        latitude: number;
        longitude: number;
    }
    carsInWarehouse:{
        location: string;
        vehicles: Car[];
    };
}

export default Warehouse