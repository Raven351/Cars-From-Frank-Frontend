import React from "react";
import Logo from '../Logo/logo'
import {ReactComponent as ListViewIcon} from '../../public/bx-list-ul.svg'
import ChangeViewButton from '../Buttons/ChangeViewButton'

const TopBar = () => {
    return(
        <div className="flex flex-row items-stretch p-5">
            <div className="basis-2/5">
                <Logo/>
            </div>
            <div className="basis-2/5"/>
            <div className="flex flex-row-reverse basis-1/5 self-center space-x-3 space-x-reverse">
                <div className="w-5 h-5 sm:w-8 sm:h-8 relative">
                    <ChangeViewButton 
                    src = "/bx-list-ul.svg" 
                    alt = "Change view to simple list"/>
                </div>
                <div className="w-5 h-5 sm:w-8 sm:h-8 relative">
                    <ChangeViewButton 
                    src = "/bx-photo-album.svg" 
                    alt = "Change view to photo list"/>
                </div>
            </div>
        </div>
    )
}

export default TopBar