import React from "react";
import NavBarButton from "../Buttons/NavBarButton";
import Link from "next/link";

const NavBarMobile = ({data}) => {
    return(
        <div className="w-60 bg-red-800 fixed bottom-5 h-12 rounded-md border border-neutral-800 place-self-center flex flex-row flex-nowrap place-items-center shadow-md shadow-black">
            <div className="basis-1/3 h-full flex place-content-center rounded-l">
                <div className="relative h-6 w-6 mt-3">
                    <NavBarButton src = "/bxs-envelope.svg"/>
                </div>
            </div>
            <Link href={'/'} passHref>
                <div className="basis-1/3 h-full flex place-content-center">
                    <div className="relative w-14 h-4 mt-4 ">
                        <NavBarButton src = "/car.svg"/>
                    </div>
                </div>
            </Link>
            <div className={`basis-1/3 h-full flex place-content-center ${data.cart.length > 0 ? "bg-blue-500" : ""} rounded-r`}>
                <div className="relative h-6 w-6 mt-3 ">
                    <NavBarButton src = "/bxs-cart.svg"/>
                </div>
            </div>
        </div>
    )
}

export default NavBarMobile