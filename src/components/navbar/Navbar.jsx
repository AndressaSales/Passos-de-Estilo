import { AlignLeft, AlignRight, ShoppingCart } from 'lucide-react'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/shoe.png'
import ResponsiveNavbar from './ResponsiveNavbar'
import {Shopcontext} from '../../shop/Shop'
const Navbar = () => {

  const [menu, setMenu] = useState(false)
  const toogleMenu = () => {
    setMenu(!menu)
  }
  const {totalCart} = useContext(Shopcontext)

  return (
    <div className='bg-secundaryblue px-4 fixed w-full z-50 shadow-sm top-0'>
      <div className='max-w-7xl mx-auto py-2 flex justify-between items-center'>
        <Link to='/'>
          <img src={logo} alt="logo" className='md:w-24 w-20' />
        </Link>
        <div className='flex items-center gap-5'>
          <nav className='hidden md:block'>
            <ul className='flex items-center font-semibold  text-xl gap-7 text-white'>
              <Link className='hover:text-bluetext' to='/'>Home</Link>
              <Link className='hover:text-bluetext' to='/womens'>Mulheres</Link>
              <Link className='hover:text-bluetext' to='/mens'>Homens</Link>
              <Link className='hover:text-bluetext' to='/kids'>Kids</Link>
            </ul>
          </nav>
          <Link to='/cart' className='relative w-10'>
            <ShoppingCart size={25} className='text-bluetext'/>
            <div className='bg-red-500 w-5 absolute -top-2 right-1 flex items-center justify-center rounded-full text-white'>{totalCart()}</div>
          </Link>
          {
            menu ? (
              <AlignRight onClick={toogleMenu} className='cursor-pointer transition-all md:hidden text-bluetext' size={30} />
            ) : (
              <AlignLeft onClick={toogleMenu} className='curcor-pointer transition-all md:hidden text-bluetext' size={30}/>
            )
          }
        </div>
      </div>
      <ResponsiveNavbar menu={menu} setMenu={setMenu} />
    </div>
  )
}

export default Navbar