import React, { useContext } from 'react'
import { Shopcontext } from '../shop/Shop';
import Item from './Item'
const NewAccessories = () => { 
  const {new_accessories} = useContext(Shopcontext)
  return (
    <div className='bg-white py-10'>
       <div className='mx-auto max-w-2xl px-4 py-16 sm:pt-14 lg:max-w-7xl lg:px-8'>
            <h2 className='text-4xl font-bold tracking-tight text-gray-900 text-center font-serif'>Novos Produtos</h2>
            <p className='font-mono text-sm text-center mt-3 md:px-56 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam alias possimus consectetur ab beatae cum, nesciunt quia reiciendis incidunt modi ullam corporis ducimus dolores aliquam, repudiandae, dicta sint velit tempore!</p>
            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-10 px-6 md:px-0 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                {new_accessories.map((product)=> {
                  return <Item key={product.id} product={product} />
                })}
            </div>
       </div>
    </div>
  )
}

export default NewAccessories;