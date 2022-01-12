import Link from "next/link"
import moneyFormatter from "../../functions/moneyFormatter"

const CarDetailsHeader = ({data}) => {
    return (
        <div className="flex">
            <div className="basis-1/2">
                <p className="text-lg">{data.vehicle.make} {data.vehicle.model}</p>
                <p className="text-rose-700" >{moneyFormatter(data.vehicle.price)}</p>
            </div>
            <div className="basis-1/2 flex flex-col items-end place-content-center text-sky-600">
                <Link href={`https://www.google.com/maps/@${data.vehicle.location.latitude},${data.vehicle.location.longitude},13z`} passHref>
                    <p className="text-xs right-0 ">{data.vehicle.garageName}</p>
                </Link>
                <p className="text-xs right-0">{data.vehicle.carsLocation}</p>
            </div>
        </div>
    )
}

export default CarDetailsHeader