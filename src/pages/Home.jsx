import React from 'react'
import Hero from '../components/Hero'
import Cards from '../components/Cards'
import HowItWorks from '../components/HowItWorks'
import PluginCard from '../components/PluginCard'

function Home() {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <PluginCard />
      <Cards />
    </div>
  )
}

export default Home
