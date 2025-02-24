import React, { useContext } from 'react'
import {Shopcontext} from '../shop/Shop'
// import Swipper React 
import { Swiper, SwiperSlide } from 'swiper/react';
//import Swiper style 
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { Star, StarHalf } from 'lucide-react';
import { Link } from 'react-router-dom';

const Display = (props) => {
  const {product} = props;
  const {add} = useContext(Shopcontext)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 my-20 md:gap-10 px-6 md:px-0'>
      <div>
        <Swiper
          pagination={{
            dynamicBullets: true
          }}
          modules={[Pagination]}
          className='items-center'
        >
          <SwiperSlide><img src={product.image} className='md:h-[500px] border-[1px] border-secundaryblue rounded-md' /></SwiperSlide>
          <SwiperSlide><img src={product.image3} className='md:h-[500px] border-[1px] border-secundaryblue rounded-md' /></SwiperSlide>
          <SwiperSlide><img src={product.image2} className='md:h-[500px] border-[1px] border-secundaryblue rounded-md' /></SwiperSlide>
          <SwiperSlide><img src={product.image4} className='md:h-[500px] border-[1px] border-secundaryblue rounded-md' /></SwiperSlide>
        </Swiper>
      </div>
      <div className='flex md:1/2 flex-col mt-8 md:mt-0'>
          <h1 className='text-4xl font-bold'>{product.name}</h1>
          <div className='flex text-gray-500 items-center gap-1 text-sm mt-4'>
            <Star color='#004643' fill='#004643' size={15} />
            <Star color='#004643' fill='#004643' size={15} />
            <Star color='#004643' fill='#004643' size={15} />
            <Star color='#004643' fill='#004643' size={15} />
            <StarHalf color='#004643' fill='#004643' size={15} />
            <p>(190) Acima da média - Fácil de usar</p>
          </div>
          <div className='flex flex-col mt-7 font-semibold'>
            <p className='text-xs'>De: <span className='line-through'>R$ {product.old_price}</span></p>
            <p className='text-[#f00] text-3xl font-bold'>R$ {product.new_price} <span className='text-2xl'>no Pix</span></p>
          </div>
          <div>
            <h2 className='text-black text-base mt-2'>Tamanho do produto:</h2>
            <div className='flex gap-4 items-center my-4'>
              <p className='border-secundaryblue hover:border-red-600 border-[2px] p-4'>35</p>
              <p className='border-secundaryblue hover:border-red-600 border-[2px] p-4'>36</p>
              <p className='border-secundaryblue hover:border-red-600 border-[2px] p-4'>37</p>
              <p className='border-secundaryblue hover:border-red-600 border-[2px] p-4'>38</p>
              <p className='border-secundaryblue hover:border-red-600 border-[2px] p-4'>39</p>
              <p className='border-secundaryblue hover:border-red-600 border-[2px] p-4'>40</p>
            </div>
          </div>
          <Link to={'/cart'}>
            <button className='border-[2px] hover:bg-secundaryblue hover:text-white hover:border-secundaryblue font-bold border-[#f00] text-[#f00] px-6 py-5 my-4 w-max' onClick={() => add(product.id)}>Adicionar ao carrinho</button>
          </Link>
      </div>
    </div>
  )
}

export default Display