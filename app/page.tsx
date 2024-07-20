import Ahead from '@/components/Ahead'
import Cards from '@/components/Cards'
import Eq from '@/components/Eq'
import { LandingHero } from '@/components/LandingHero'
import React from 'react'

const Home = () => {
  return (
    <div className='h-screen p-2'>
      <LandingHero />
      <Eq />
     <Cards />
     <Ahead />
    </div>
  )
}

export default Home