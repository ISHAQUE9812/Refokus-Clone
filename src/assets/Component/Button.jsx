import React from 'react'
import { VscArrowSmallRight } from "react-icons/vsc";

function Button({title = "Get Started"}) {
  return (
    <div className='w-40 px-4 py-2 bg-zinc-200 text-black rounded-full flex items-center justify-between'>
      <span className='text-sm font-medium'>{title}</span>
      <VscArrowSmallRight />
    </div>
  )
}

export default Button