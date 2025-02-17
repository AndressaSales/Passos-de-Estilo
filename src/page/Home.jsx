import React from 'react'
import BannerGrup01 from '../components/BannerGrup01'
import NewAccessories from '../components/NewAccessories'
import TopSellers from '../components/TopSellers'
import Features from '../components/Features'

const Home = () => {
  return (
    <div>
      <BannerGrup01 />
      <NewAccessories/>
      <TopSellers />
      <Features />
    </div>
  )
}

export default Home