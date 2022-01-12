import HomeContent from '../components/Home/homeContent'
import NavBarMobile from '../components/NavBar/navBar'
import TopBar from '../components/TopBar/TopBar'

export default function Home(data) {

  return (
    <div className='flex flex-col pb-12'>
      <TopBar/>
      <HomeContent data={data}/>
      <NavBarMobile data = {data}/>
    </div>
  )
}

export const getStaticProps = async (context) => {
  const [vehiclesRes] = await Promise.all([
    fetch(`${process.env.API_DOMAIN}/api/Vehicles`),
  ]);
  const vehicles = await vehiclesRes.json();

  return{
      props: {
          vehicles,
      }
  }
}