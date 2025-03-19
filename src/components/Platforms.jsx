import React from 'react'
import platform1 from "../assets/platform1.webp"
import platform2 from "../assets/platform2.svg"
import platform3 from "../assets/platform3.svg"
import platform4 from "../assets/platform4.svg"
import platform5 from "../assets/platform5.svg"
import platform6 from "../assets/platform6.svg"



function Platforms() {
    const platform =[
        {img:platform1},
        {img:platform2},
        {img:platform3},
        {img:platform4},
        {img:platform5},
        {img:platform6},
    ]
  return (
    <div className='py-20'>
        <div className='flex justify-center'><p className='text-[#020a19] font-bold text-4xl  text-center'>Platforms Supported</p></div>
        <div className='tailwind-container mx-auto grid grid-cols-3 lg:grid-cols-6 gap-5 pt-16'>
            {platform.map((item,index)=>(
                <div key={index}>
                    <img src={item.img}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Platforms