import React from "react";
import Image from "next/image";

const NavBarButton = (src, alt) => {
    return(
        <Image 
        src={src}
        alt = {alt}
        layout="fill"
        objectFit="cover"
        className=""/> //objectFit and className can be changed
    )
}

export default NavBarButton