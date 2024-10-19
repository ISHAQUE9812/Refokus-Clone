import React from 'react'
import Card from './Card'
function Cards() {
  return (
    <div className='w-full bg-zinc-900'>
      <div className='max-w-screen-xl mx-auto px-40 py-20 flex gap-[3px]'>
         <Card width={"basis-1/3"} start={false} para={true}/>   
         <Card width={"basis-2/3"} start={true} para={false}/>   
      </div>
    </div>
  )
}

export default Cards