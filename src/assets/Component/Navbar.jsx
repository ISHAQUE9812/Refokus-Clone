import React from 'react'
import Button from './Button'

function Navbar() {
  return (
    <div>
      <div className='max-w-screen-lg py-6  mx-auto flex items-center justify-between border-b-[1px] border-zinc-700'>
        <div className='left flex items-center'>
              <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
           <div className='link flex gap-14 ml-20'>
              {['Home','Work','Culture','','Newsletter'].map((item, index) =>( 
               item.length === 0 ?<span key={index} className='w-[2px] h-6 bg-zinc-700'></span> :
              <a key={index} className='text-sm flex items-center gap-1 ' href='#'>
              {index === 1 && (<span style={{boxShadow: "0 0 0.35em #00ff19"}} className='inline-block w-1 h-1 bg-green-500 rounded-full'></span>) }
              
              {item}</a>))}
           </div>
        </div>
      <Button/>
      </div>
    </div>
  )
}

export default Navbar