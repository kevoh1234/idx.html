import React from 'react'
import TopNav from '../components/TopNav'
import Delivery from '../components/Delivery'
import Meal from '../components/Meal'
import Kategories from '../components/Kategories'

import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import Featured from '../components/Featured'

const Recipe = () => {
  return (
    <div className='recipe'>
      <TopNav />
      <Featured/>
      <Delivery />
      <Meal />
      <Kategories />
      <NewsLetter /> 
      <Footer/>
    </div>
  )
}

export default Recipe
