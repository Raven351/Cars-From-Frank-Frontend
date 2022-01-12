import React from "react";
import LogoPNG from "../../public/CFF-Logo.png"
import Image from "next/image";

const Logo = () => {
    return(
        <Image src={LogoPNG} alt="Cars from frank logo" className="max-h-16"/>
    )
}

export default Logo