import new_accessories from '../utils/new_accessories'
import all_product from '../utils/all_product'
import { createContext } from 'react'

export const Shopcontext = createContext(null);

const getCart = () => {
    let cart = {}
    for (let index = 0; index < all_product.length + 1; index++){
        cart[index] = 0
    }
    return cart
}

const Shop = (props) => {

    

    const valueContext = {all_product, new_accessories}
  return (
    <Shopcontext.Provider value={valueContext}>
        {props.children}
    </Shopcontext.Provider>
  )
}

export default Shop