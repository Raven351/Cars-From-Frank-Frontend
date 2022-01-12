import TopBar from "../../components/TopBar/TopBar"
import NavBarMobile from "../../components/NavBar/navBar"
import CartContent from "../../components/Cart/CartContent"

const Cart = (props) => {
    console.log(props.cart)
    return (
        <div className='flex flex-col pb-12'>
            <TopBar/>
            <CartContent props={props}/>
            <NavBarMobile data = {props}/>
        </div>  
    )
}

export default Cart