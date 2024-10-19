import React from 'react'

function Stripe({Val}) {
  return (
        <div className='w-[16.6%] px-9 py-5 border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-600 flex  items-center justify-between'>
            <img className=' ' src={Val.url} alt="" />
            <span className='font-semibold '>{Val.number}</span>
        </div>
    
  )
}

export default Stripe