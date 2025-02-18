import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import React from 'react'
import master  from '../assets/master.png'
import elo  from '../assets/elo.png'
import pix  from '../assets/pix.png'
import barcode  from '../assets/barcode.png'
import visa  from '../assets/visa.png'

const images = [
  {id: 1, url: barcode, name: 'barcode'},
  {id: 2, url: visa, name: 'visa'},
  {id: 3, url: master, name: 'master'},
  {id: 4, url: elo, name: 'elo'},
  {id: 5, url: pix, name: 'pix'},
]

const Footer = () => {
  return (
    <div className='bg-secundaryblue py-10'>
      <div className='flex justify-center items-center gap-20'>
       <div className='items-center justify-center flex flex-col'>
        <p className='text-white text-lg pb-4'>Formas de pagamento</p>
        <ul className='flex justify-center items-center'>
          {images.map((image)=> {
              return <div key={image.id}>
                <li className='flex'>
                  <img src={image.url} alt={image.name} className='w-[48px] h-[32px]' />
                </li>
              </div>
          })}
        </ul>
       </div>
       <div className='flex justify-center items-center flex-col'>
        <p className='text-white text-lg pb-4'>Rede sociais</p>
        <div className='flex gap-3 text-bluetext'>
          <Facebook className='hover:scale-125 duration-300 cursor-pointer' />
          <Instagram className='hover:scale-125 duration-300 cursor-pointer' />
          <Twitter className='hover:scale-125 duration-300 cursor-pointer' />
          <Youtube className='hover:scale-125 duration-300 cursor-pointer'/>
        </div>
       </div>
      </div>
      <div className='mt-8 border-t border-bluetext pt-6 text-center text-sm'>
        <p className='text-white'>&copy;{new Date().getFullYear()} <span className='text-bluetext'>Passos de Estilo</span> Todos os direitos reservados.</p>
      </div>
    </div>
  )
}

export default Footer