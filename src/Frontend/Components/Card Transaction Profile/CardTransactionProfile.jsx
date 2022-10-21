import Image from 'next/image'
import React from 'react'

function CardTransactionProfileComponent({ name, img, desc }) {
    return (
        <div className=' w-48 h-64 snap-center shrink-0 max-h-full bg-white/75 shadow-2xl flex flex-col items-start rounded-2xl overflow-hidden cursor-pointer '>
            <div className=' h-3/4 w-full relative '>
                <Image loading='lazy' alt='image' src={img || 'https://i.pinimg.com/564x/3d/37/bb/3d37bbf290aa0c592c328014aa6d9af6.jpg'} layout='fill' objectFit='cover' />
            </div>
            <h1 className='truncate mt-1 ml-2 text-xl '>{name || `Dried Flower`}</h1>
            <p className='truncate w-full px-2 text-xs overflow-hidden '>{desc || `Any file inside the folder pages/api is mapped to`}</p>
        </div>
    )
}

export default CardTransactionProfileComponent