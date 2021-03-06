import HomeContent from '../components/Home/homeContent'
import IndexPageWrapper from '../components/IndexPageWrapper'
import NavBarMobile from '../components/NavBar/navBar'
import TopBar from '../components/TopBar/TopBar'

export default function Home(data) {

  return (
        <IndexPageWrapper>
          <TopBar/>
          <HomeContent data={data} cart = {data.cart}/>
          <NavBarMobile data = {data}/>
        </IndexPageWrapper>
  )
}

export const getStaticProps = async (context) => {
  const [vehiclesRes] = await Promise.all([
    fetch(`${process.env.API_DOMAIN}/api/Vehicles`, {
      headers:{
        'Ocp-Apim-Subscription-Key': `${process.env.API_KEY}`,
        'Ocp-Apim-Trace': `${process.env.APIM_TRACE}`
      }
    }),
  ]);
  const vehicles = await vehiclesRes.json();

  return{
      props: {
          vehicles,
      }
  }
}