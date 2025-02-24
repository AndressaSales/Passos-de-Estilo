import { ChevronRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const BreadcrumbTrail = (props) => {
  const {product} = props
  return (
    <div className='flex items-center md:gap-2 gap-1 px-6 md:px-0 text-gray-950 font-semibold text-base'>
      <Link className='underline' to={'/'}>PassosdeEstilo</Link> <ChevronRight size={15} /> {product.category} <ChevronRight size={15}/> {product.name}
    </div>
  )
}

export default BreadcrumbTrail