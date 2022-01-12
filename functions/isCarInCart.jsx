export default function isCarInCart(cart, car){
    return cart.some(carInCart => carInCart.id === car.id)
}