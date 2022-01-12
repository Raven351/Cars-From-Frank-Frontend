import Image from "next/image"
import NoImageCar from '../../images/no-image-car.webp'
import CarDetailsHeader from "./CarDetailsHeader"
import CarAddRemoveCartButton from "./CarAddRemoveCartButton"
import CarDetailsTechnicalData from "./CarDetailsTechnicalData"
import CarDetailsDescription from "./CarDetailsDescription"

const CarDetails = ({data}) => {
    return(
        <div className="flex flex-col">
            <Image src={NoImageCar} alt="Car image" className={"z-[-10]"}/>
            <div className="px-6 flex flex-col gap-1 grow">
                <CarDetailsHeader data = {data}/>
                <CarAddRemoveCartButton data = {data}/>
                <CarDetailsTechnicalData data = {data}/>
                <CarDetailsDescription/>
            </div>
        </div>
    )
}

export default CarDetails