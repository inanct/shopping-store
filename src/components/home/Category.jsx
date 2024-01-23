import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/categorySlice';

const Category = () => {
    const dispatch = useDispatch();
    const {categories} = useSelector(state=> state.categories)

    console.log(categories, "categories" )

    useEffect(() =>{
        dispatch(getCategories())
    }, [dispatch])
  return (
    <div className='w-1/6 bg-gray-100'>
        <div>CATEGORY</div>
        {
            categories?.map((category,i) => (
                <div key={i}>{category}</div>
            ))
        }
    </div>
  )
}

export default Category