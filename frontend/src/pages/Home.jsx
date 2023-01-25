import React from 'react'
import { Helmet } from 'react-helmet-async';
import LatestNews from '../components/LatestNews/LatestNews';
import BestSellers from '../components/BestSellers/BestSellers';
import TrendingProducts from "../components/TrendingProducts/TrendingProducts"
import WinterSale from "../components/WinterSale/WinterSale"
import HeroSection from "../components/HeroSection/HeroSection"
function Home() {
  return (
    <div>
      <Helmet>
        <title>Home Page!</title>
        <meta name='description' content='Beginner friendly page for learning React Helmet.' />
      </Helmet>
      <HeroSection />
      <TrendingProducts />
      <WinterSale />
      <BestSellers />
      <LatestNews />
    </div>
  )
}

export default Home