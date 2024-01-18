import React from 'react'
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
const NavbarRight = () => {
  return (
    <div className=''>
    <div>
        <input type="text" placeholder='Search' />
        <BiSearch />
        <AiOutlineHeart />
    </div>
    </div>
  )
}

export default NavbarRight