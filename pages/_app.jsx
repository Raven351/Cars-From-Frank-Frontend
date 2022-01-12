import '../styles/globals.css'
import CartContext from '../contexts/CartContext'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  
  const [cart, setCart] = useState([])

  const onAddCarToCart = (car) => {
    if (cart.some(carInCart => carInCart.id === car.id)) console.log("Car already in cart")
    else setCart(cart => [...cart, car])
  }

  const onRemoveCarFromCart = (car) => {
    if (cart.some(carInCart => carInCart.id === car.id)){
      setCart(cart => cart.filter(item => item.id !== car.id))
    }
  }


  return (
    <Component 
    {...pageProps} 
    cart = {cart}
    onAddCarToCart = {onAddCarToCart}
    onRemoveCarFromCart = {onRemoveCarFromCart}
    />
  )
}

export default MyApp
