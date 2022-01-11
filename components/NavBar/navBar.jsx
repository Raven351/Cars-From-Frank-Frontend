import React from "react";
import NavBarButton from "../Buttons/NavBarButton";

const NavBarMobile = () => {
    return(
        <div className="w-60 bg-red-800 sticky bottom-5 h-12 rounded-md border place-self-center flex flex-row flex-nowrap place-items-center">
            <div className="basis-1/3 h-full flex place-content-center">
                <div className="relative h-6 w-6 mt-3">
                    <NavBarButton src = "/bxs-envelope.svg"/>
                </div>
            </div>
            <div className="basis-1/3 h-full flex place-content-center">
                <div className="relative w-14 h-4 mt-4 ">
                    <NavBarButton src = "/car.svg"/>
                </div>
            </div>
            <div className="basis-1/3 h-full flex place-content-center">
                <div className="relative h-6 w-6 mt-3 ">
                    <NavBarButton src = "/bxs-cart.svg"/>
                </div>
            </div>
        </div>
    )
}

export default NavBarMobile