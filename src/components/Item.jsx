import { Star, StarHalf } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({product}) => {
  return (
    <div className='border-[2px] border-gray-300 rounded-md py-5 px-6 shadow-md hover:border-secundaryblue hover:opacity-75'>
      <Link to={`/product/${product.id}`}>
        <div className='flex items-center justify-center'>
          <img src={product.image} alt={product.name} className='w-52 h-52 object-cover object-center' />
        </div>
      </Link>
      <div className='mt-5 flex justify-center flex-col'>
       <div>
        <Link to={`/product/${product.id}`}>
          <h1 aria-hidden="true" className='text-lg text-dark '>{product?.name}</h1>
        </Link>
       </div>
     <div className='mt-4'>
        <span className='line-through text-sm text-gray-500'>R$ {product.old_price}</span>
        <p className='text-2xl font-medium text-gray-900'>R$ {product?.new_price} <span className='text-sm text-gray-700'>no pix</span></p>
     </div>
       <div className='flex mt-3'>
        <Star color='#004643' fill='#004643' size={19} />
        <Star color='#004643' fill='#004643' size={19} />
        <Star color='#004643' fill='#004643' size={19} />
        <Star color='#004643' fill='#004643' size={19} />
        <Star color='#004643' fill='#004643' size={19} />
        <StarHalf color='#004643' fill='#004643' size={19} />
       </div>
      </div>
    </div>
  )
}

export default Item