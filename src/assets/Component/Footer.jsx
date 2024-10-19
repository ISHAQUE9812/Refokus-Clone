import React from 'react'

function Footer() {
  return (
    <div className='w-full bg-zinc-900'>
        <div className='max-w-screen-xl mx-auto px-10 py-10 flex gap-32'>
            <div className='basis-1/2'>
                <h1 className='text-[11rem] font-semibold leading-none tracking-tight'>refokus.</h1>
            </div>
            <div className='basis-1/2 flex gap-14'>
               <div className='basis-1/3'>
                 <h4 className='mt-10 text-zinc-500 capitalize'>socials</h4>
                 {["instagram","twitter (x?)","LinkedIn"].map((item, index)  => <a key={index} className='block mt-3 text-zinc-600 capitalize'>{item}</a>)}
               </div>
               <div className='basis-1/3'>
                 <h4 className='mt-10 text-zinc-500 capitalize'>socials</h4>
                 {["instagram","twitter (x?)","LinkedIn"].map((item, index)  => <a key={index} className='block mt-3 text-zinc-600 capitalize'>{item}</a>)}
               </div>
               <div className='bases-1/2 flex-col justify-between items-end'>
                   <p className='text-right text-zinc-400'>Refokus is pioneeing website where they make very beautiful website.</p>
                   <img className='w-28 h-10 mt-10 ml-[7.6vw]' src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/661c1b5fd7aa742286c16467_webflow%20refokus%20(1).png"  alt="" />
               </div>
            </div>
        </div>

    </div>
  )
}

export default Footer