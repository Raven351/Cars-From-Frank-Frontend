const CarDetailsTechnicalData = ({data}) => {
    return(
        <div className="bg-neutral-200 h-auto p-2">
            <div className="flex">
                <div className="basis-1/2">
                    <p className="text-[11px]">Year produced: {data.vehicle.yearModel}</p>
                    <p className="text-[11px]">Licensed: {data.vehicle.isLicensed? "Yes" : "No"}</p>
                    <p className="text-[11px]">Transmission type: Manual</p>
                </div>
                <div className="basis-1/2">
                    <p className="text-[11px]">Fuel type: Gasoline</p>
                    <p className="text-[11px]">Mileage: 200k+ km</p>
                </div>
            </div>
        </div>
    )
}

export default CarDetailsTechnicalData