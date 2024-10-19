import React from 'react'
import Navbar from './assets/Component/Navbar'
import Button from './assets/Component/Button'
import Work from './assets/Component/Work'
import Stripes from './assets/Component/Stripes'
import Products from './assets/Component/Products'
import Marquees from './assets/Component/Marquees'
import Cards from './assets/Component/Cards'
import Footer from './assets/Component/Footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full h-screen bg-zinc-900 text-white'>
      <Navbar/>
      <Work/>
      <Stripes/>
      <Products/>
      <Marquees/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App
