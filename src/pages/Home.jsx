import React, { useState } from 'react'
import SliderCom from '../components/home/SliderCom'
import Sorting from '../components/home/Sorting'
import Category from '../components/home/Category'
import Products from '../components/home/Products'

const Home = () => {
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");
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