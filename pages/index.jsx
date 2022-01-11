import { GetServerSideProps, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import HomeContent from '../components/Home/homeContent'
import Logo from '../components/Logo/logo'
import NavBarMobile from '../components/NavBar/navBar'
import TopBar from '../components/TopBar/TopBar'

export default function Home(warehouses, cars) {
  return (
    <div className='flex flex-col bg-slate-200'>
      <TopBar/>
      <HomeContent data={warehouses}/>
      <NavBarMobile/>
    </div>
  )
}

export const getStaticProps = async (context) => {
  const [warehousesRes] = await Promise.all([
    fetch(`${process.env.API_DOMAIN}/api/Warehouses`),
  ]);
  const warehouses = await warehousesRes.json();
  //console.log(warehouses[0]['carsInWarehouse']['vehicles'])
  return{
      props: {
          warehouses,
      }
  }
}
