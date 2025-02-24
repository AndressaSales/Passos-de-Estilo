import new_accessories from '../utils/new_accessories'
import all_product from '../utils/all_product'
import { createContext, useState } from 'react'

export const Shopcontext = createContext(null);

const getCart = () => {
    let cart = {}
    for (let index = 0; index < all_product.length + 1; index++){
        cart[index] = 0
    }
    return cart
}

const Shop = (props) => {

  const [cartItem, setCartItem] = useState(getCart())

  const add = (itemId) => {
    setCartItem((prev) => ({...prev, [itemId]:prev[itemId] + 1}))
  }

  const remove = () => {
    setCartItem((prev) => ({...prev, [itemId]:prev[itemId] - 1}))
  }
  
  const getTotal = () => {
    let total = 0
    for (const item in cartItem){
      let info = all_product.find((product) => product.id === Number(item))
      total += cartItem[item] * info.new_price
    }
    return total
  }

  const totalCart = () => {
    let totItem = 0
    for (const item in cartItem){
      if(cartItem[item] > 0){
        totItem += cartItem[item]
      }
    }
   return totItem
  }

    const valueContext = {all_product, new_accessories, add, remove, getTotal, totalCart}
  return (
    <Shopcontext.Provider value={valueContext}>
        {props.children}
    </Shopcontext.Provider>
  )
}

export default Shop