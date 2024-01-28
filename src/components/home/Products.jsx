import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryProducts, getProducts } from '../../redux/productSlice';
import Loading from '../Loading';
import Product from './Product';

const Products = ({category}) => {
  const dispatch = useDispatch()
  const {products, productsStatus} = useSelector(state => state.products);
  console.log(products, "products")

  useEffect(() => {
    if(category){
      dispatch(getCategoryProducts(category))
    }else{
      dispatch(getProducts())
    }
   
  },[dispatch, category])
  return (
    <div>
      {
        productsStatus == "LOADING" ? <Loading/> :
        <div className='flex flex-wrap'>
          {
            products?.map((product,i) => (
              <Product key={i} product={product}/>
            ))
          }
        </div>
      }
    </div>
  )
}

export default Products