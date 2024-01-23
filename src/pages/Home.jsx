import React from 'react'
import SliderCom from '../components/home/SliderCom'
import Sorting from '../components/home/Sorting'
import Category from '../components/home/Category'
import Products from '../components/home/Products'

const Home = () => {
  return (
    <div>
      <SliderCom/>
      <Sorting/>
      <div className='flex'>
        <Category/>
        <Products/>

      </div>
    </div>
  )
}

export default Home