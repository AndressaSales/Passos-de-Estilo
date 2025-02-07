import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer'
import Home from './page/Home'
import Mens from './page/Mens'
import Womens from './page/Womens'
import Kids from './page/Kids'
import Card from './page/Cart'

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <> <Navbar/> <Home/> <Footer/> </>
    },
    {
      path: '/mens',
      element: <> <Navbar/> <Mens/> <Footer/> </>
    },
    {
      path: '/womens',
      element: <> <Navbar/> <Womens/> <Footer/> </>
    },
    {
      path: '/kids',
      element: <> <Navbar/> <Kids/> <Footer/> </>
    },
    {
      path: '/cart',
      element: <> <Navbar/> <Card/> <Footer/> </>
    }
  ])

  return (
    <>
      <RouterProvider  router={router}/>
    </>
  )
}

export default App