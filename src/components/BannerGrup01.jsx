import React from 'react'
import backgroundBanner01 from '../assets/backgroundBanner01.png'

const BannerGrup01 = () => {
  return (
    <div className='bg-white pt-40'>
        <div className='relative max-w-7xl mx-auto pt-20 md:rounded-2xl bg-cover bg-center h-[450px] md:h-[500px]' style={{backgroundImage: `url(${backgroundBanner01})`}}>
            <div className='absolute inset-0 bg-[#0a0a0a] md:rounded-2xl bg-opacity-50 flex items-center justify-center'>
                <div className='text-white text-center px-4'>
                    <h2 className='text-2xl font-bold pb-3'>Nike day</h2>
                    <h1 className='font-serif uppercase text-7xl pb-2'>+30% off</h1>
                    <p className='text-xl text-grey pb-2'>cupom: devnike2025</p>
                    <button className='bg-[#e71919] hover:bg-[#e04e4e] text-white font-semibold py-2 px-4 md:px-6 rounded-lg transition duration-300'>Comprar</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BannerGrup01