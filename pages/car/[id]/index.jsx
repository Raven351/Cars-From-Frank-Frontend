import {useRouter} from 'next/router'
import TopBar from '../../../components/TopBar/TopBar'
import NavBar from '../../../components/NavBar/navBar'
import CarDetails from '../../../components/Car/CarDetails'
import IndexPageWrapper from '../../../components/IndexPageWrapper'

const CarPage = (data, onAddCarToCart, onRemoveCarFromCart) => {
    const router = useRouter()
    const { id } = router.query

    return (
        <IndexPageWrapper>
            <TopBar/>
            <CarDetails data = {data} onAddCarToCart = {onAddCarToCart} onRemoveCarFromCart = {onRemoveCarFromCart}/>
            <NavBar data = {data}/>
        </IndexPageWrapper>
    )
}

export default CarPage

export const getStaticPaths = async (context) =>{
    const res = await fetch(`${process.env.API_DOMAIN}/api/Vehicles`, {
        headers:{
        'Ocp-Apim-Subscription-Key': `${process.env.API_KEY}`,
        'Ocp-Apim-Trace': `${process.env.APIM_TRACE}`
        }
    })
    const vehicles = await res.json()
    const paths = vehicles.map((vehicle) => ({
        params: {id: vehicle.id.toString()}
    }))

    return {paths, fallback: false}
  }

export const getStaticProps = async ({params}) => 
{
    const vehicleRes = await fetch (`${process.env.API_DOMAIN}/api/Vehicles/${params.id}`, {
            headers:{
            'Ocp-Apim-Subscription-Key': `${process.env.API_KEY}`,
            'Ocp-Apim-Trace': `${process.env.APIM_TRACE}`
            }
        })
    const vehicle = await vehicleRes.json()
    return {props: {vehicle}}
}