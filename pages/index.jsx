import { GetServerSideProps, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import HomeContent from '../components/Home/homeContent'
import Logo from '../components/Logo/logo'
import NavBarMobile from '../components/NavBar/navBar'
import TopBar from '../components/TopBar/TopBar'
import NoPhotoPlaceholder from '../images/no-image-car.webp'

export default function Home(data) {
  return (
    <div className='flex flex-col bg-slate-200 pb-12'>
      <TopBar/>
      <HomeContent data={data}/>
      <NavBarMobile/>
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
