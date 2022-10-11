import Image from 'next/image'
import React from 'react'

function CardCustomComponent({ name, price, img }) {
    return (
        <div className='w-52 shadow-xl h-80 shrink-0 bg-black rounded-xl relative overflow-hidden flex flex-col items-center justify-center '>
            <p className=' z-10  text-white '>{name || `Dried Flower`}</p>
            <p className=' z-10  text-white text-xs font-semibold'>Rp.{price}</p>
            <Image alt='img' className=' hover:scale-105 hover:opacity-50 duration-500 ' layout='fill' objectFit='cover' src={img} />
        </div>
    )
}

export default CardCustomComponent