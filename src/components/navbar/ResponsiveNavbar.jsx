import React from 'react'
import { Link } from 'react-router-dom'

const ResponsiveNavbar = ({menu, setMenu}) => {
  return (
    <div className={`${menu ? "left-0" : "left-[100%]"} fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-center bg-secundaryblue px-8 pb-16 text-bluetext md:hidden rounded-r-xl shadow-md `}>
        <nav>
            <ul className='flex flex-col space-y-4 text-xl text-center'>
                <Link to='/' className='border-b border-bluetext pb-2 ' onClick={() => setMenu(false)}>Home</Link>
                <Link to='/womens' className='border-b border-bluetext pb-2' onClick={() => setMenu(false)}>Mulheres</Link>
                <Link to='/mens' className='border-b border-bluetext pb-2' onClick={() => setMenu(false)}>Homens</Link>
                <Link to='/kids' className='border-b border-bluetext pb-2' onClick={() => setMenu(false)}>Kids</Link>
            </ul>
        </nav>
    </div>
  )
}

export default ResponsiveNavbar