import { GetServerSideProps, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import HomeContent from '../components/Home/homeContent'
import Warehouse from '../types/warehouse'

export default function Home(warehouses, cars) {
  return (
    <div>
      <HomeContent data={warehouses}/>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
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
