import React from 'react'
import { MdClose } from 'react-icons/md'

const Model = ({ children, close }) => {
    return (
        <>
            <div onClick={() => close(false)} className="overlay w-full h-[100vh] bg-[#5b708366] duration-200 fixed top-0 left-0 z-10"></div>
            <div className='model relative max-w-[320px] py-3 px-[40px] lg:px-[80px] md:max-w-[500px] lg:max-w-[600px]'>
                <button onClick={() => close(false)} className='absolute pr-[2px] top-2 left-2 flex items-center justify-center rounded-[50%] w-[34px] h-[34px] bg-black hover:bg-colorBlack duration-200 cursor-pointer'>
                    <MdClose className='text-colorWhite text-[21px]' />
                </button>
                {children}
            </div>
        </>
    )
}

export default Model