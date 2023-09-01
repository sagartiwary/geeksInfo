import React from 'react'
import Logo from '../image/banner.png'

export const Banner = () => {
  return (
    <div className='bg-neutral-950 sm:bg-neutral-950  md:h-[560px] relative'>
       <img src={Logo} alt="logo" className='absolute top-0 right-0 left-0 bottom-0 overflow-hidden z-6 ' />
    </div>
  )
}
