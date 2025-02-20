import React, { useContext } from 'react'
import { Shopcontext } from '../shop/Shop'
import { Link } from 'react-router-dom'
import Item from '../components/Item'
import { ChevronRight } from 'lucide-react'

const Mens = () => {
  const {all_product} = useContext(Shopcontext)
  const menProducts = all_product.filter((product) => product.category === 'men')
  return (
    <div className=' max-w-7xl mx-auto md:mt-32'>
      <div className='flex items-center md:gap-2 gap-1 lg:px-0 md:px-10 text-gray-950 font-semibold text-base'>
        <Link className='underline' to={'/'}>PassosdeEstilo</Link> <ChevronRight size={15} /> <Link className='underline' to={'/mens'}>todos os produtos</Link> <ChevronRight size={15}/> masculino
      </div>
      <div className='py-10 md:px-10 lg:px-0'>
        <div className='border-l-[4px] border-secundaryblue'>
          <h2 className='text-2xl dont-bold tracking-tight text-dark pl-3'>Calçados masculinos</h2>
        </div>
        <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 px-6 md:px-0 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {
            menProducts.map((product) => {
              return <Item key={product.id} product={product} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Mens