import React from "react";
import Image from "next/image";

const ChangeViewButton = ({src, alt}) =>{
    return(
        <Image 
        src={src}
        alt = {alt}
        layout="fill"
        objectFit="cover"
        className="rounded-full"/> //objectFit and className can be changed
    )
}

export default ChangeViewButton