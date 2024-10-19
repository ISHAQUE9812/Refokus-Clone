import React from 'react'
import Stripe from './Stripe'
function Stripes() {
    var data =[
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275c2fcf540272672ef_intenseeye.svg", number: 48},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d27518bb52e4d642644e_bcgp.svg", number: 42},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275e1d5aa08ccc379dd_ypo.svg", number: 33},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2ce14e6c85b010c2e1e3c_Logo%20White%201.svg", number: 48},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d27518bb52e4d642644e_bcgp.svg", number: 42},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d304ad489e305be8dad7_sevdesk-white.svg", number: 33},
    ]
  return (
    <div className='flex items-center justify-between mt-20 bg-zinc-900 '>
        {data.map((elem, index) => (
            <Stripe key={index} Val={elem}        />
        ))}
    </div>
  )
}

export default Stripes