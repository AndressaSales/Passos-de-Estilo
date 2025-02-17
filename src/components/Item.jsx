import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({product}) => {
  return (
    <div className='group relative'>
      <Link to={`/product/${product.id}`}>
        <div className='aspect-h-1 aspect-w-1w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 h-96 shadow-2xl'>
          <img src={product.image} alt={product.name} className='h-full w-full object-cover object-center' />
        </div>
      </Link>
      <div className='mt-4 flex justify-between'>
       <div>
        <Link to={`/product/${product.id}`}>
          <span aria-hidden="true" className='inset-0 text-sm text-dark'>{product?.name}</span>
        </Link>
       </div>
       <p className='text-sm font-medium text-gray-900'>{product.price}</p>
      </div>
    </div>
  )
}

export default Item