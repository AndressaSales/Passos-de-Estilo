import { useContext } from 'react'
import cart from '../assets/cartt.png'
import { Link } from 'react-router-dom'
import {Shopcontext} from '../shop/Shop'
import { X } from 'lucide-react'
const Cart = () => {
  const {all_product, cartItem, totalCart, remove, getTotal} = useContext(Shopcontext)
  return (
    <div className='mt-32'>
      <div className='max-w-7xl mx-auto my-10 p-4'>
        {
          totalCart() === 0 ? (
            <div className='flex items-center justify-center flex-col'>
                <img src={cart} className='w-[200px]' />
                <h2 className='font-bold text-2xl m-2'>Seu carrinho está vazio</h2>
                <p className='text-base font-serif m-3 text-center'>Procurando produtos esportivos incríveis? A <br />gente te ajuda a encontrar.</p>
                <Link to={'/'} className='py-4 px-5 border border-secundaryblue bg-secundaryblue text-white rounded-md '>
                  Conferir produtos
                </Link>
            </div>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3'>
              <div>
                <div className='flex gap-7 font-bold text-lg pb-2'>
                  <p></p>
                  <p>Produto</p>
                  <p>Preço</p>
                  <p>Quantidade</p>
                  <p>Total</p>
                </div>
                <div>
                  <hr className='bg-gray-300 border-0 h-[2px]' />
                </div>
                {
                  all_product.map((e) => {
                    if(cartItem[e.id] > 0){
                      return(
                        <div key={e.id} className='flex items-center gap-2 '>
                          <X onClick={() => {remove(e.id)}} className='cursor-pointer' />
                          <img src={e.image} className='w-16 h-16 object-cover ' />
                          <p className='ml-4'>R$ {e.new_price}</p>
                          <button className='w-16 h-12 border-gray-300 border ml-10'>{cartItem[e.id]}</button>
                          <p className='ml-5'>R$ {e.new_price * cartItem[e.id]}</p>
                        </div>
                      )
                    }
                    return null
                  })
                }
              </div>
              <div className='flex flex-col mx-12 gap-10 md:gap-12'>
                <div className='flex-1 flex flex-col gap-4 '>
                  <h1 className='font-semibold'>Totais do Carrinho</h1>
                  <div className='flex justify-between py-2'>
                      <p>Subtotal</p>
                      <p>R$ {getTotal()}</p>
                  </div>
                  <hr className='bg-gray-300 border-0 h-[2px] mt-2' />
                  <div className='flex justify-between'>
                    <p>taxa de envio</p>
                    <p>Gráatis</p>
                  </div>
                  <hr className='bg-gray-300 border-0 h-[2px]' />
                  <div className='flex justify-between text-xl font-semibold'>
                    <h3>Total</h3>
                    <span>R$ {getTotal()}</span>
                  </div>
                </div>
                <button className='w-full py-5 bg-secundaryblue text-white font-bold rounded-md'>
                  Finalizar Compra
                </button>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Cart