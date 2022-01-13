import TopBar from "../../components/TopBar/TopBar"
import NavBarMobile from "../../components/NavBar/navBar"
import CartContent from "../../components/Cart/CartContent"
import IndexPageWrapper from "../../components/IndexPageWrapper"

const Cart = (props) => {
    console.log(props.cart)
    return (
        <IndexPageWrapper>
            <TopBar/>
            <CartContent props={props}/>
            <NavBarMobile data = {props}/>
        </IndexPageWrapper>
    )
}

export default Cart