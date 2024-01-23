import React from 'react'

const Sorting = () => {
  return (
    <div className=' bg-gray-100 my-5 p-5 flex item-center justify-end'>
        <select className=' bg-white-200 py-3 px-5' name="" id="">
            <option disabled>Choose</option>
            <option value="inc">High</option>
            <option value="dec">Low</option>
        </select>
    </div>
  )
}

export default Sorting