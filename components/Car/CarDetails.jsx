import Image from "next/image"
import ImageTemplate from "../Images/ImageTemplate"
import NoImageCar from '../../images/no-image-car.webp'
import Link from "next/link"
import AddToCartImage from '../../images/bxs-cart-add.svg'


const CarDetails = ({data}) => {
    console.log(data.cart)
    return(
        <div className="flex flex-col">
            <Image src={NoImageCar} alt="Car image" className={"z-[-10]"}/>
            <div className="px-6 flex flex-col gap-1 grow">
                <div className="flex">
                    <div className="basis-1/2">
                        <p className="text-lg">{data.vehicle.make} {data.vehicle.model}</p>
                        <p className="text-rose-700" >{data.vehicle.price} PLN</p>
                    </div>
                    <div className="basis-1/2 flex flex-col items-end place-content-center text-sky-600">
                        <Link href={`https://www.google.com/maps/@${data.vehicle.location.latitude},${data.vehicle.location.longitude},13z`} passHref>
                            <p className="text-xs right-0 ">{data.vehicle.garageName}</p>
                        </Link>
                        <p className="text-xs right-0">{data.vehicle.carsLocation}</p>
                    </div>

                </div>
                <div 
                className=
                {`
                ${data.cart.some(carInCart => carInCart.id === data.vehicle.id) ? "bg-red-400" : "bg-green-400"} 
                h-8 rounded-md flex place-content-center
                `} 
                onClick={ () => data.onAddCarToCart(data.vehicle)}
                >
                    <Image src={AddToCartImage} alt="Add to cart"/>
                </div>
                <div className="bg-neutral-200 h-auto p-2">
                    <div className="flex">
                        <div className="basis-1/2">
                            <p className="text-[11px]">Year produced: {data.vehicle.yearModel}</p>
                            <p className="text-[11px]">Licensed: {data.vehicle.isLicensed? "Yes" : "No"}</p>
                            <p className="text-[11px]">Transmission type: {RandomTransmission()}</p>
                        </div>
                        <div className="basis-1/2">
                            <p className="text-[11px]">Fuel type: {RandomFuel()}</p>
                            <p className="text-[11px]">Mileage: {RandomMileage()} km</p>
                        </div>
                    </div>
                </div>
                <div className="grow bg-neutral-200 p-2">
                    <p className="text-sm overscroll-contain">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus sit amet urna et vulputate. 
                    Aenean est lacus, imperdiet eget fringilla sed, dignissim id mauris. Suspendisse nisl sem, accumsan nec hendrerit in, tincidunt nec nisi. 
                    Phasellus vehicula suscipit mauris, nec pretium lacus malesuada in. Curabitur tincidunt lorem eget magna porttitor, sit amet mattis risus dictum. 
                    Vivamus blandit sapien lectus, in iaculis diam efficitur eu. Aliquam posuere tristique ullamcorper. Praesent rutrum elementum vulputate. Donec nec tellus dui. 
                    Fusce nec neque in dui faucibus imperdiet nec eget enim. Mauris vel odio finibus, accumsan nulla aliquet, congue metus. Duis nec libero non dolor volutpat cursus et sit amet neque.
                    Suspendisse vehicula efficitur velit, et laoreet tellus. Suspendisse auctor nec est at posuere. Suspendisse suscipit, quam viverra fringilla malesuada, sem tortor maximus neque, tempor vehicula neque dui sit amet neque. Aenean a luctus sapien, facilisis gravida eros. Nam tincidunt odio et massa dignissim, vitae porta orci condimentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam vel maximus lacus. Cras et ante sodales, ornare enim vel, lobortis lectus. Phasellus vel orci bibendum, rhoncus augue ut, placerat mauris. Quisque mollis magna augue, nec vulputate ipsum lobortis non. Morbi sit amet sem semper, elementum ante id, elementum felis. Aliquam diam urna, ornare lacinia ipsum eget, vestibulum pulvinar velit. Vestibulum aliquam, mi ac malesuada volutpat, neque nunc aliquam diam, quis tristique ante massa sit amet lectus. Nullam ac pulvinar neque, nec fringilla arcu. Curabitur vel tempor mi, a bibendum velit. Quisque eu purus et ex mattis pretium rutrum quis dui.</p>
                </div>
            </div>
        </div>
    )
}

export default CarDetails

const RandomTransmission = () => {
    let randomNum = Math.floor(Math.random() * 2) + 1
    if (randomNum % 2) return "Manual"
    else return "Automatic"
}

const RandomFuel = () => {
    let randomNum = Math.floor(Math.random() * 2) + 1
    if (randomNum % 2) return "Gasoline"
    else return "Diesel"
}
const RandomMileage = () => {
    return Math.floor(Math.random() * 300000) + 100000
}