import {useRouter} from 'next/router'
import TopBarCar from '../../../components/TopBar/TopBarCar'
import NavBar from '../../../components/NavBar/navBar'
import CarDetails from '../../../components/Car/CarDetails'

const CarPage = (data) => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div className='flex flex-col pb-24 '>
            <TopBarCar/>
            <CarDetails data = {data}/>
            <NavBar/>
        </div>
    )
}

export default CarPage

export const getStaticPaths = async (context) =>{
    const res = await fetch(`${process.env.API_DOMAIN}/api/Vehicles`)
    const vehicles = await res.json()
    const paths = vehicles.map((vehicle) => ({
        params: {id: vehicle.id.toString()}
    }))

    return {paths, fallback: false}
  }

export const getStaticProps = async ({params}) => 
{
    const vehicleRes = await fetch (`${process.env.API_DOMAIN}/api/Vehicles/${params.id}`)
    const vehicle = await vehicleRes.json()
    return {props: {vehicle}}
}