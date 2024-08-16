import React from 'react'
import Announce from '../components/Announce'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Catagories from '../components/Catagories'
import Products from '../components/Products'

const Home = () => {
  return (
    <div>
       <Announce/>
       <Navbar/>
       <Slider/>
       <Catagories/>
       <Products/>
    </div>
  )
}

export default Home