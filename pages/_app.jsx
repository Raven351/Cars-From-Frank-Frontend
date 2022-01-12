import '../styles/globals.css'
import CartContext from '../contexts/CartContext'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  
  const [cart, setCart] = useState([])
  const onAddCarToCart = (car) => {
    if (cart.filter(carInCart => carInCart.Id === car.Id).length > 0) console.log("Car already in cart")
    else setCart(cart => [...cart, car])
  }


  return (
    <Component 
    {...pageProps} 
    cart = {cart}
    onAddCarToCart = {onAddCarToCart}
    />
  )
}

export default MyApp
