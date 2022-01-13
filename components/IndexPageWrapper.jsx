import { Children } from "react"

const IndexPageWrapper = ({children}) => {
    return(
        <div className='flex flex-col pb-24 items-center'>
            <div className='flex flex-col max-w-6xl'>
                {children}
            </div>
        </div>
    )
}

export default IndexPageWrapper