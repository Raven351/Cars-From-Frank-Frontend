import React from "react";
import Logo from '../Logo/logo'
import {ReactComponent as ListViewIcon} from '../../public/bx-list-ul.svg'
import ChangeViewButton from '../Buttons/ChangeViewButton'

const TopBar = () => {
    return(
        <header className="flex flex-row items-stretch p-5 sticky top-0 bg-white rounded-b-lg shadow-lg z-50">
            <div className="basis-2/5">
                <Logo/>
            </div>
            <div className="basis-2/5"/>
            <div className="flex flex-row-reverse basis-1/5 self-center space-x-3 space-x-reverse place-content-center">
                <div className="w-7 h-7 sm:w-8 sm:h-8 relative">
                    <ChangeViewButton 
                    src = "/bxs-cart.svg" 
                    alt = "Change view to simple list"/>
                </div>
            </div>
        </header>
    )
}

export default TopBar