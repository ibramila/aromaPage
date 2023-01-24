import React from 'react'
import { Helmet } from 'react-helmet-async';
import LatestNews from '../components/LatestNews/LatestNews';
import BestSellers from '../components/BestSellers/BestSellers';
import TrendingProducts from "../components/TrendingProducts/TrendingProducts"

function Home() {
  return (
    <div>
      <Helmet>
        <title>Home Page!</title>
        <meta name='description' content='Beginner friendly page for learning React Helmet.' />
      </Helmet>
      <TrendingProducts/>
      <BestSellers/>
      <LatestNews/>
    </div>
  )
}

export default Home