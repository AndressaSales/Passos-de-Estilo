import React from 'react'
import BreadcrumbTrail from './BreadcrumbTrail'
import { useContext } from 'react'
import { Shopcontext } from '../shop/Shop'
import { useParams } from 'react-router-dom'
import Display from './Display'

const ProductSingle = () => {
  const {all_product} = useContext(Shopcontext)
  const {productId} = useParams()
  const product = all_product.find((e) => e.id === Number(productId))
  return (
    <div className='max-w-7xl mx-auto mb-32 mt-32'>
      <BreadcrumbTrail product={product} /> 
      <Display product={product} />
    </div>
  )
}

export default ProductSingle