import Image from 'next/image'

const ImageTemplate = ({src, alt, className, imageClassName}) => {
    return (
        <div className="w-screen">
            <Image
                src={src}
                alt = {alt}
                objectFit="cover" 
                className= {imageClassName} //objectFit and className can be changed 
                />
        </div>
    )
}

export default ImageTemplate