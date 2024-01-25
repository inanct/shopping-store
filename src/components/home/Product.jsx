import React from 'react'

const  Product = ({product}) => {
  return (
    <div className='w-[440px] p-3 mx-5 mt-3 border rounded-md relative cursor-pointer '>
        <div className='text-3xl font-bold absolute rounded-md top-0 right-0 bg-black text-white p-2 m-1'>{product?.price} <span>$</span></div>
        <img className='w-[200px] h-[200px] m-auto ' src={product?.image} alt="" />
        <div className='font-bold text-center'>{product.title}</div>
    </div>
  )
}

export default Product