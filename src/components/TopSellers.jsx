import React, { useContext } from 'react'
import { Shopcontext } from '../shop/Shop'
import Item from './Item'

const TopSellers = () => {
    const {all_product} = useContext(Shopcontext)
  return (
    <div className='mx-auto max-w-2wl px-4 py-16 sm:pt-24 lg:max-w-7xl lg:px-8'>
        <h2 className='text-4xl font-bold tracking-tight text-dark text-center font-serif'>Os Mais Vendidos</h2>
        <p className='text-center mt-3 md:px-56 text-gray-500 font-mono'>sit amet consectetur adipisicing elit. Dolor vel dolore ducimus expedita molestias, quo eveniet qui ea incidunt.</p>
        <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-10 px-6 md:px-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {
                all_product.slice(0,20).map((product) => {
                    return <Item key={product.id} product={product} />
                })
            }
        </div>
    </div>
  )
}

export default TopSellers